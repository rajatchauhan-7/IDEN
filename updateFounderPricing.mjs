import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

const replacement = `      {/* FOUNDER */}
      <section id="founder">
        <div className="section-inner">
          <span className="eyebrow">FROM THE FOUNDER</span>
          <div
            className="founder-inner reveal"
            style={{ position: "relative" }}
          >
            <div className="founder-quote-mark">"</div>
            <div className="founder-avatar">F</div>
            <div>
              <div
                style={{
                  fontSize: "10px",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: "20px",
                }}
              >
                Why I Built This
              </div>
              <p className="founder-quote">
                "I watched founders pay $65 a month for tools that still made their posts sound like AI wrote them. The problem was never the AI. It was that nobody was building around identity. Who you are. What you sound like. What makes your thinking worth following.<br/><br/>
                That is what IDEN does.<br/><br/>
                One payment. No monthly guilt. And it actually sounds like you."
              </p>
              <div className="founder-sig">- Founder, IDEN</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing">
        <div className="section-inner">
          <span className="eyebrow">PRICING</span>
          <h2 className="section-headline reveal">Try Free. Pay Once. Done.</h2>
          <div className="pricing-grid">
            <div className="price-card">
              <div className="price-tier">FREE TRIAL</div>
              <div className="price-amount">Free</div>
              <div className="price-sub">
                No card · No account
              </div>
              <ul className="price-features">
                <li>
                  <span className="feat-check">✓</span> 10 free generations
                  across all 9 tools
                </li>
                <li>
                  <span className="feat-check">✓</span> Full Voice DNA
                  extraction
                </li>
                <li>
                  <span className="feat-check">✓</span> Full Brand OS
                </li>
                <li>
                  <span className="feat-check">✓</span> Full Identity Engine
                </li>
                <li>
                  <span className="feat-check">✓</span> No credit card required
                </li>
              </ul>
              <a href="/app" className="btn-primary">
                Start Free →
              </a>
            </div>
            <div className="price-card featured">
              <div className="price-badge">MOST POPULAR</div>
              <div className="price-tier">PROFESSIONAL</div>
              <div className="price-amount">
                <span>$</span>49
              </div>
              <div className="price-sub">
                one-time<br/>
                Yours forever. No renewals.
              </div>
              <ul className="price-features">
                <li>
                  <span className="feat-check">✓</span> Unlimited generations
                </li>
                <li>
                  <span className="feat-check">✓</span> All 9 tools
                </li>
                <li>
                  <span className="feat-check">✓</span> Voice DNA Lock
                </li>
                <li>
                  <span className="feat-check">✓</span> Personal brand use
                </li>
                <li>
                  <span className="feat-check">✓</span> Licence key by email in minutes
                </li>
                <li>
                  <span className="feat-check">✓</span> 7-day satisfaction guarantee
                </li>
              </ul>
              <a href="/app" className="btn-primary">
                Get Unlimited Access →
              </a>
            </div>
            <div className="price-card">
              <div className="price-tier">AGENCY</div>
              <div className="price-amount">
                <span>$</span>149
              </div>
              <div className="price-sub">
                one-time<br/>
                Unlimited clients. White-label.
              </div>
              <ul className="price-features">
                <li>
                  <span className="feat-check">✓</span> Everything in
                  Professional
                </li>
                <li>
                  <span className="feat-check">✓</span> Unlimited client brands
                </li>
                <li>
                  <span className="feat-check">✓</span> Voice DNA Lock per
                  client
                </li>
                <li>
                  <span className="feat-check">✓</span> White-label rights
                </li>
                <li>
                  <span className="feat-check">✓</span> Resell as your own
                  service
                </li>
                <li>
                  <span className="feat-check">✓</span> Priority support
                </li>
              </ul>
              <a href="/app" className="btn-ghost" style={{ border: "1px solid rgba(255, 255, 255, 0.2)"}}>
                Get Agency Access →
              </a>
            </div>
          </div>

          <div className="pricing-callout reveal">
            <p>
              Ghostwriter? The Agency licence ($149 once) covers unlimited clients. No per-client fees. No per-seat charges. One purchase, unlimited brands.*
            </p>
          </div>

          <div
            className="pricing-guarantee reveal"
            style={{
              marginTop: "24px",
              display: "flex",
              gap: "12px",
              alignItems: "flex-start",
              background: "rgba(255,255,255,0.03)",
              padding: "24px",
              borderRadius: "12px",
            }}
          >
            <span style={{ color: "var(--lime)", fontSize: "20px" }}>♡</span>
            <p
              style={{
                fontSize: "14px",
                color: "var(--muted)",
                lineHeight: "1.5",
              }}
            >
              <strong>7-day satisfaction guarantee on both paid plans.</strong><br/>
              If IDEN does not deliver what we promise, email us within 7 days of purchase with your order number for a full refund. No hassle. We stand behind it completely.
            </p>
          </div>

          <div
            className="trust-badges reveal"
            style={{
              marginTop: "24px",
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div className="trust-badge">♡ Zero LinkedIn account risk</div>
            <div className="trust-badge">🔒 No data sold or shared</div>
            <div className="trust-badge">✓ 7-day satisfaction guarantee</div>
            <div className="trust-badge">✦ No hidden fees. Ever.</div>
            <div className="trust-badge">
              ⚡ Licence key by email in minutes
            </div>
          </div>

          <p
            className="legal-footnote reveal"
            style={{
              fontSize: "11px",
              color: "var(--muted)",
              marginTop: "32px",
            }}
          >
            * "Unlimited clients" refers to the number of distinct Voice DNA profiles and Brand OS builds you can run under a single Agency licence. Fair use applies - this licence is for your direct client work, not for resale of the licence itself.
          </p>
        </div>
      </section>`;

// Replace from founder to faq
content = content.replace(/      {\/\* FOUNDER \*\/}[\s\S]*?(?=      {\/\* FAQ \*\/})/m, replacement + '\n\n');

fs.writeFileSync('src/App.tsx', content);
