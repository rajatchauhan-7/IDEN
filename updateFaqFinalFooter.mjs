import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

const replacement = `      {/* FAQ */}
      <section id="faq">
        <div className="section-inner" itemscope itemtype="https://schema.org/FAQPage">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-headline reveal">Every Question About IDEN, Answered Honestly.</h2>
          <div className="faq-list reveal">
            <div className="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <button
                className="faq-q"
                onClick={(e) => (window as any).toggleFaq(e.currentTarget)}
              >
                <span className="faq-q-text" itemprop="name">
                  Do I need a Claude or Anthropic account?
                </span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-body-wrap" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <div className="faq-body-inner">
                  <p className="faq-a" itemprop="text">
                    No. IDEN handles everything. You pay for IDEN once and the AI capabilities are included. You never need an Anthropic account, an API key, or any AI billing setup. Just open it and use it.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <button
                className="faq-q"
                onClick={(e) => (window as any).toggleFaq(e.currentTarget)}
              >
                <span className="faq-q-text" itemprop="name">
                  What is the difference between Professional ($49) and Agency ($149)?
                </span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-body-wrap" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <div className="faq-body-inner">
                  <p className="faq-a" itemprop="text">
                    Professional is for your own personal brand - unlimited use. Agency covers unlimited client brands, white-label rights, and permission to incorporate IDEN into a professional ghostwriting or personal brand service. One Agency licence, unlimited clients.
                  </p>
                </div>
              </div>
            </div>

            <div className="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <button
                className="faq-q"
                onClick={(e) => (window as any).toggleFaq(e.currentTarget)}
              >
                <span className="faq-q-text" itemprop="name">
                  Is there a money-back guarantee?
                </span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-body-wrap" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <div className="faq-body-inner">
                  <p className="faq-a" itemprop="text">
                    Yes. 7-day satisfaction guarantee on both paid plans. Email hello@useiden.com within 7 days of purchase with your order number for a full refund. No questions asked.
                  </p>
                </div>
              </div>
            </div>

            <div className="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <button
                className="faq-q"
                onClick={(e) => (window as any).toggleFaq(e.currentTarget)}
              >
                <span className="faq-q-text" itemprop="name">
                  How do I get my licence key after purchasing?
                </span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-body-wrap" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <div className="faq-body-inner">
                  <p className="faq-a" itemprop="text">
                    Your licence key is delivered by email within 1 hour of purchase (usually within minutes). Open IDEN, enter your key, and get instant unlimited access. No account creation, no app to install.
                  </p>
                </div>
              </div>
            </div>

            <div className="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <button
                className="faq-q"
                onClick={(e) => (window as any).toggleFaq(e.currentTarget)}
              >
                <span className="faq-q-text" itemprop="name">
                  Will IDEN get my LinkedIn account restricted or banned?
                </span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-body-wrap" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <div className="faq-body-inner">
                  <p className="faq-a" itemprop="text">
                    Zero risk. IDEN has zero LinkedIn integration. It does not log into your account, does not use the LinkedIn API, does not scrape your profile, and does not automate any LinkedIn actions. You generate content in IDEN and copy-paste it yourself. In April 2025, LinkedIn enforcement targeted cookie-based authentication tools. IDEN is completely unaffected.
                  </p>
                </div>
              </div>
            </div>

            <div className="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <button
                className="faq-q"
                onClick={(e) => (window as any).toggleFaq(e.currentTarget)}
              >
                <span className="faq-q-text" itemprop="name">
                  What if I am not a good writer - will this still work?
                </span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-body-wrap" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <div className="faq-body-inner">
                  <p className="faq-a" itemprop="text">
                    Yes. You do not need to be a good writer. Give IDEN your topic, your audience, and your Voice DNA. It handles the writing. You review, personalise if needed, and post. Most users spend under 5 minutes per post.
                  </p>
                </div>
              </div>
            </div>

            <div className="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <button
                className="faq-q"
                onClick={(e) => (window as any).toggleFaq(e.currentTarget)}
              >
                <span className="faq-q-text" itemprop="name">
                  Does the free trial require a credit card?
                </span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-body-wrap" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <div className="faq-body-inner">
                  <p className="faq-a" itemprop="text">
                    No credit card, no account, no API key. Enter your email, get 10 free generations across all 9 tools. If you want unlimited access, pay $49 once. If not, no charge and no hassle.
                  </p>
                </div>
              </div>
            </div>

            <div className="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <button
                className="faq-q"
                onClick={(e) => (window as any).toggleFaq(e.currentTarget)}
              >
                <span className="faq-q-text" itemprop="name">
                  Is this a subscription? Will I be charged monthly?
                </span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-body-wrap" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <div className="faq-body-inner">
                  <p className="faq-a" itemprop="text">
                    Never. One payment, lifetime access. No monthly fees, no renewal charges, no premium tier to upgrade to. Pay $49 once and IDEN is yours forever.
                  </p>
                </div>
              </div>
            </div>

            <div className="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <button
                className="faq-q"
                onClick={(e) => (window as any).toggleFaq(e.currentTarget)}
              >
                <span className="faq-q-text" itemprop="name">
                  Why do my LinkedIn posts sound like AI wrote them?
                </span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-body-wrap" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <div className="faq-body-inner">
                  <p className="faq-a" itemprop="text">
                    AI posts sound generic because the AI has no information about who you are. It defaults to the average LinkedIn professional voice, which sounds like nobody in particular. IDEN solves this with Voice DNA Lock: your specific writing fingerprint is extracted from your own posts and applied to every generation automatically.
                  </p>
                </div>
              </div>
            </div>

            <div className="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <button
                className="faq-q"
                onClick={(e) => (window as any).toggleFaq(e.currentTarget)}
              >
                <span className="faq-q-text" itemprop="name">
                  How is IDEN different from Taplio and SuperGrow?
                </span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-body-wrap" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <div className="faq-body-inner">
                  <p className="faq-a" itemprop="text">
                    Taplio and SuperGrow generate content. IDEN builds identity first, then generates content. IDEN has four features no competitor offers: Voice DNA Lock, Identity Engine, Brand OS, and Pre-Publish Reach Scorer. IDEN costs $49 once versus $588 to $828 per year for Taplio's AI plan.
                  </p>
                </div>
              </div>
            </div>

            <div className="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <button
                className="faq-q"
                onClick={(e) => (window as any).toggleFaq(e.currentTarget)}
              >
                <span className="faq-q-text" itemprop="name">
                  What is the best LinkedIn personal branding tool in 2025?
                </span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-body-wrap" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <div className="faq-body-inner">
                  <p className="faq-a" itemprop="text">
                    IDEN is designed for identity-first personal brand building with features no competitor offers: forensic voice extraction, complete brand strategy system, and pre-publish post scoring. For scheduling and analytics, AuthoredUp and SuperGrow are worth evaluating. The best tool depends on whether identity building or content management is your primary need.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="finalcta">
        <div className="section-inner" style={{ textAlign: "center" }}>
          <h2
            className="finalcta-headline bebas reveal"
            style={{ letterSpacing: "0.02em" }}
          >
            Pay Once. Sound Like You. Build Something That Lasts.
          </h2>
          <p className="finalcta-comparison reveal">
            <strong>9 tools. One voice. One payment. No monthly guilt.</strong>
          </p>
          <p className="finalcta-sub reveal">
            Start with 10 free generations. No card needed.
          </p>
          <div className="finalcta-cta-wrap reveal">
            <a
              href="/app"
              className="btn-primary finalcta-cta"
              style={{ fontSize: "1.2rem", padding: "16px 40px" }}
              aria-label="Start IDEN free trial - 10 generations, no credit card"
            >
              Try IDEN Free →
            </a>
          </div>
          <div className="finalcta-trust reveal">
            <span>♡ 7-day guarantee</span>
            <span>🔒 Zero LinkedIn account risk</span>
            <span>⚡ Licence key in minutes</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div className="footer-logo">
            ID<span style={{ color: "var(--lime)" }}>E</span>N
          </div>
          <div className="footer-links">
            <a href="mailto:hello@useiden.com">hello@useiden.com</a>
            <a href="#faq">FAQ</a>
            <a href="#pricing">Pricing</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>

        <div
          className="footer-legal-block"
          style={{
            fontSize: "11px",
            color: "var(--muted)",
            lineHeight: "1.6",
            borderTop: "1px solid var(--border)",
            paddingTop: "32px",
          }}
        >
          <p>
            © 2025 IDEN. Zero LinkedIn account risk. 7-day satisfaction guarantee. IDEN is not affiliated with or endorsed by LinkedIn Corporation. "LinkedIn" is a registered trademark of LinkedIn Corporation.
          </p>
        </div>
      </footer>`;

// Replace from faq to EOF but keep the `    </>\n  );\n}` part at the end
content = content.replace(/      {\/\* FAQ \*\/}[\s\S]*?(?=    <\/>\n  \);\n})/m, replacement + '\n');

fs.writeFileSync('src/App.tsx', content);
