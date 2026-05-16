# IDEN — LinkedIn Personal Brand OS

Build, write, and grow your LinkedIn personal brand with AI. No subscriptions. No monthly fees. **$49 once.**

![IDEN - Personal Brand OS](https://img.shields.io/badge/IDEN-Personal%20Brand%20OS-C8FF00?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiMwQTBBMEEiLz48L3N2Zz4=)

---

## What Is IDEN?

IDEN is a web application with **9 AI-powered tools** for LinkedIn personal branding:

- **Identity Engine** — Deep-scan any LinkedIn profile, extract voice, expertise, trajectory, gaps
- **Voice DNA + Lock** — Extract your writing fingerprint from sample posts, lock it forever
- **Weekly Planner** — 5 post ideas generated from your brand pillars
- **Post Studio** — Generate posts in 4 formats: Single, Thread, Story, Data
- **Carousel Builder** — Slide scripts, visual direction, live color preview
- **Video Script** — 60-second LinkedIn native video format with brand window structure
- **Reach Scorer** — 5-signal scoring, hook optimization, best posting times
- **Algorithm Intel** — LinkedIn algorithm briefing with built-in signal cards
- **Brand OS** — Complete 10-section brand system (positioning, pillars, voice, 30-day plan)

---

## Why IDEN?

| Feature | IDEN | SuperGrow | Taplio |
|---------|------|-----------|--------|
| **Price** | $49 once | $228/year | $780/year |
| **Subscriptions** | Zero | Monthly | Monthly |
| **LinkedIn Risk** | Zero | Medium | High* |
| **Voice DNA** | ✓ Forensic lock | ✗ Generic | ✗ Generic |
| **Brand OS** | ✓ Full system | ✗ | ✗ |

*Taplio caused account restrictions for some users in April 2025

---

## Features

✅ **Zero LinkedIn Account Risk** — No API, no scraping, no automation, no bans
✅ **One-Time Payment** — No monthly subscriptions, no recurring charges
✅ **5 Free Generations** — Try all 9 tools with no credit card
✅ **Voice DNA Lock** — All tools write in your exact style automatically
✅ **Built on Claude AI** — World-class output quality from Anthropic
✅ **Single HTML File** — Deploy anywhere in minutes, no server setup

---

## Pricing

| Plan | Price | Use |
|------|-------|-----|
| **Free Trial** | $0 | 5 generations across all 9 tools |
| **Professional** | $49 once | Personal brand, unlimited generations |
| **Agency** | $149 once | Unlimited clients, white-label rights, resell as service |

---

## Tech Stack

- **Frontend:** Single HTML file (920 lines) — vanilla JavaScript, CSS custom properties, no frameworks
- **Backend:** Vercel Edge Function (`api/chat.js`) — serverless, scales to zero cost
- **AI Model:** Claude Sonnet 4 via Anthropic API
- **Payments:** Lemon Squeezy
- **Hosting:** Vercel (free tier or $20/month Pro)
- **Email:** Brevo (free tier: 300/day)

**Total cost to launch:** ~$10 for domain (one-time)

---

## Quick Start

### Option 1: Deploy to Vercel (Recommended — Full Product)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Add environment variables in Vercel dashboard:**
   - `ANTHROPIC_API_KEY` = your Claude API key
   - `IDEN_LICENSE_KEYS` = comma-separated licence keys (add as customers buy)

4. **Get your live URL**

5. **Update `index.html`:**
   - Find `lemonsqueezy.com/buy/pro`
   - Replace with your actual Lemon Squeezy checkout URLs

**Result:** Full product live. Users can generate content, pay, receive licence keys automatically.

---

### Option 2: Deploy to GitHub Pages (Landing Page Only)

1. **Push to GitHub**
2. **Settings → Pages → Source: main branch**
3. **Site goes live at** `https://[username].github.io/IDEN`

⚠️ GitHub Pages is static-only. The `/api/chat` backend won't work. Use Vercel for the full product.

---

### Option 3: Run Locally (for Testing)

```bash
# Clone repo
git clone https://github.com/[your-username]/IDEN.git
cd IDEN

# Open in browser
open index.html
# Or on Windows: start index.html
```

Scroll to the sidebar, paste your Claude API key, and test any tool.

---

## Setup Instructions

### 1. Get Claude API Key

1. Go to **console.anthropic.com**
2. Create account (free)
3. Add credit card (you get $5 free credits)
4. Create API key
5. Copy it — you'll need it for Vercel

### 2. Set Up Lemon Squeezy Store

1. Go to **lemonsqueezy.com**
2. Create store
3. Add 2 products:
   - **IDEN Professional** → $49 one-time
   - **IDEN Agency** → $149 one-time
4. Get checkout URLs
5. Update in `index.html` (search for `lemonsqueezy.com/buy/`)

### 3. Deploy

Choose Vercel (recommended) or GitHub Pages (see Quick Start above).

---

## Files in This Repo

```
IDEN/
├── index.html          (920 lines — entire product)
├── api/
│   └── chat.js         (Vercel edge function — backend)
├── package.json        (Node/Vercel config)
├── vercel.json         (Routing for Vercel)
├── .env.example        (Template for secrets)
├── .gitignore          (Protects .env from upload)
└── README.md           (This file)
```

---

## Environment Variables

Create `.env.local` (never commit to GitHub):

```
ANTHROPIC_API_KEY=sk-ant-xxxxx
IDEN_LICENSE_KEYS=IDEN-XXXX-XXXX-XXXX
```

The `.gitignore` prevents `.env` from being uploaded. This keeps your API key safe.

---

## How It Works

### User Flow

```
User visits your site
    ↓
Clicks "Try Free"
    ↓
Enters email (captured)
    ↓
Gets 5 free generations
    ↓
Uses all 9 tools
    ↓
Trial runs out
    ↓
Clicks "Unlock Unlimited"
    ↓
Pays $49 or $149 on Lemon Squeezy
    ↓
Gets licence key by email
    ↓
Enters key in app
    ↓
Unlimited access for life
```

### Technical Flow

```
Frontend (index.html)
    ↓
Calls /api/chat
    ↓
Vercel Edge Function (api/chat.js)
    ↓
Adds your API key
    ↓
Calls Claude API
    ↓
Claude generates content
    ↓
Streams back to user
    ↓
User sees output
```

**User never sees your API key. Your key stays safe in Vercel environment.**

---

## Licence

**MIT License** — Free to use, modify, fork. Credit appreciated.

---

## Support

Email: **hello@iden.app**

Questions? Issues? Feature requests?
- Open a GitHub Issue
- Email support
- Check the FAQ section in `index.html`

---

## Roadmap

- [ ] Post history / saved generations
- [ ] Content repurposing (LinkedIn → Twitter → Newsletter)
- [ ] LinkedIn scheduler integration
- [ ] User accounts + persistent database
- [ ] Team collaboration (Agency tier expansion)
- [ ] White-label portal for agencies

---

## FAQ

**Q: Do I need to know how to code?**
A: No. Deployment is one command (`vercel`). Everything else is clicking.

**Q: Will this get my LinkedIn account banned?**
A: Zero risk. IDEN has no LinkedIn API access, no scraping, no automation. You generate content, you copy-paste it yourself.

**Q: Can I use this without paying for Claude?**
A: Yes. Switch to Google Gemini (free tier covers ~50 users). See docs for integration.

**Q: How much does the API cost?**
A: ~$0.003 per generation. One $49 sale covers ~1,000 generations.

**Q: Can I white-label this?**
A: Yes. Agency licence includes white-label rights and source code access.

---

## Credits

Built with:
- [Claude AI](https://claude.ai) — AI generation
- [Vercel](https://vercel.com) — Hosting & serverless
- [Anthropic](https://anthropic.com) — API

---

**Made with 🔥 by [Your Name]**

Status: Public MVP · Launched: 2025 · Next: [v2 roadmap]
