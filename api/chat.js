// api/chat.js — IDEN Claude proxy
// Runs on Vercel serverless. Your ANTHROPIC_API_KEY stays here, never in the browser.
// Free trial: 5 generations (tracked by IP + fingerprint in KV store, or simple cookie)
// Licensed users: unlimited (validated against IDEN_LICENSE_KEYS env var)

export const config = { runtime: 'edge' };

const TRIAL_LIMIT = 5;
const MODEL = 'claude-sonnet-4-20250514';
const MAX_TOKENS = 1800;

// Simple in-memory rate map (resets on cold start — good enough for MVP)
// For production: swap this for Vercel KV (one line change)
const usageMap = new Map();

export default async function handler(req) {
  // CORS — allow your domain + localhost for dev
  const origin = req.headers.get('origin') || '';
  const allowedOrigins = [
    'https://iden.app',           // your production domain
    'https://iden-app.vercel.app', // vercel preview
    'http://localhost:3000',
    'http://localhost:5500',
    'http://127.0.0.1:5500',
  ];

  const corsHeaders = {
    'Access-Control-Allow-Origin': allowedOrigins.includes(origin) ? origin : allowedOrigins[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-License-Key',
  };

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405, headers: corsHeaders });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  const { system, messages, licenseKey, clientId } = body;

  if (!system || !messages) {
    return new Response(JSON.stringify({ error: 'Missing system or messages' }), {
      status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  // ── LICENSE / TRIAL CHECK ────────────────────────────────
  const isLicensed = validateLicense(licenseKey);
  
  if (!isLicensed) {
    // Trial: track by clientId (set in browser localStorage)
    const id = clientId || getIP(req);
    const usage = usageMap.get(id) || 0;

    if (usage >= TRIAL_LIMIT) {
      return new Response(JSON.stringify({
        error: 'TRIAL_EXPIRED',
        message: `Your ${TRIAL_LIMIT} free generations are used. Unlock unlimited access for $49.`,
        upgradeUrl: process.env.GUMROAD_URL || 'https://iden.lemonsqueezy.com'
      }), {
        status: 402,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Increment usage
    usageMap.set(id, usage + 1);
  }

  // ── CALL CLAUDE (STREAMING) ──────────────────────────────
  const anthropicKey = process.env.ANTHROPIC_API_KEY;
  if (!anthropicKey) {
    return new Response(JSON.stringify({ error: 'Server misconfigured' }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  try {
    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': anthropicKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: MAX_TOKENS,
        stream: true,
        system,
        messages,
      }),
    });

    if (!upstream.ok) {
      const err = await upstream.json().catch(() => ({}));
      return new Response(JSON.stringify({ error: err?.error?.message || 'Claude API error' }), {
        status: upstream.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Stream the response straight through to the browser
    return new Response(upstream.body, {
      status: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'X-Trial-Remaining': isLicensed ? 'unlimited' : String(TRIAL_LIMIT - (usageMap.get(clientId || getIP(req)) || 0)),
      },
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
}

// ── HELPERS ──────────────────────────────────────────────────
function validateLicense(key) {
  if (!key) return false;
  const validKeys = process.env.IDEN_LICENSE_KEYS || '';
  // Comma-separated list of valid keys in env var
  return validKeys.split(',').map(k => k.trim()).includes(key.trim());
}

function getIP(req) {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
}
