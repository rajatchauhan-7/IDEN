import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf8');

// I will rebuild the faqs variable holding the question/answer data.
// In App.tsx the faqs are likely hardcoded in JSX or in an array.
// Let's just output a new block to replace it or I will query it exactly.
// Since it's repeated HTML nodes, I will replace the inside of the FAQ accordion container.
content = content.replace("Every Question Answered.", "Every Question About IDEN, Answered Honestly.");

const q1 = `<div
              className="faq-item"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="faq-q"
                onClick={(e) => (window as any).toggleFaq(e.currentTarget)}
              >
                <span className="faq-q-text" itemProp="name">
                  Do I need a Claude or Anthropic account to use IDEN?
                </span>
                <span className="faq-q-icon">+</span>
              </button>
              <div
                className="faq-body"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div className="faq-body-inner">
                  <p className="faq-a" itemProp="text">
                    No. IDEN handles everything. You pay for IDEN once and the AI capabilities are included. You never need an Anthropic account, an API key, or any AI billing setup. Open it and use it.
                  </p>
                </div>
              </div>
            </div>`;

const q2 = `<div
              className="faq-item"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="faq-q"
                onClick={(e) => (window as any).toggleFaq(e.currentTarget)}
              >
                <span className="faq-q-text" itemProp="name">
                  What is the difference between Professional ($49) and Agency ($149)?
                </span>
                <span className="faq-q-icon">+</span>
              </button>
              <div
                className="faq-body"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div className="faq-body-inner">
                  <p className="faq-a" itemProp="text">
                    Professional is for your own personal LinkedIn brand — unlimited use, all 9 tools, forever. Agency covers unlimited client brands, white-label rights, and permission to incorporate IDEN into a professional ghostwriting or personal brand service. One Agency licence, unlimited clients.
                  </p>
                </div>
              </div>
            </div>`;

const q3 = `<div
              className="faq-item"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="faq-q"
                onClick={(e) => (window as any).toggleFaq(e.currentTarget)}
              >
                <span className="faq-q-text" itemProp="name">
                  Is there a money-back guarantee?
                </span>
                <span className="faq-q-icon">+</span>
              </button>
              <div
                className="faq-body"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div className="faq-body-inner">
                  <p className="faq-a" itemProp="text">
                    Yes. 7-day satisfaction guarantee on both paid plans. Email hello@useiden.com within 7 days of purchase with your order number for a full refund. No questions asked. We are confident enough in the product to stand behind it completely.
                  </p>
                </div>
              </div>
            </div>`;

const q4 = `<div
              className="faq-item"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="faq-q"
                onClick={(e) => (window as any).toggleFaq(e.currentTarget)}
              >
                <span className="faq-q-text" itemProp="name">
                  How do I get my licence key after purchasing?
                </span>
                <span className="faq-q-icon">+</span>
              </button>
              <div
                className="faq-body"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div className="faq-body-inner">
                  <p className="faq-a" itemProp="text">
                    Your licence key is delivered by email within 1 hour of purchase (usually within minutes). Open IDEN, enter your key, and get instant unlimited access. No account creation, no app to install.
                  </p>
                </div>
              </div>
            </div>`;

const q5 = `<div
              className="faq-item"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="faq-q"
                onClick={(e) => (window as any).toggleFaq(e.currentTarget)}
              >
                <span className="faq-q-text" itemProp="name">
                  Will IDEN get my LinkedIn account restricted or banned?
                </span>
                <span className="faq-q-icon">+</span>
              </button>
              <div
                className="faq-body"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div className="faq-body-inner">
                  <p className="faq-a" itemProp="text">
                    Zero risk. IDEN has zero LinkedIn integration. It does not log into your account, does not use the LinkedIn API, does not scrape your profile, and does not automate any LinkedIn actions. You generate content in IDEN and copy-paste it yourself. In April 2025, LinkedIn enforcement targeted cookie-based authentication tools. IDEN is completely unaffected.
                  </p>
                </div>
              </div>
            </div>`;

const q6 = `<div
              className="faq-item"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="faq-q"
                onClick={(e) => (window as any).toggleFaq(e.currentTarget)}
              >
                <span className="faq-q-text" itemProp="name">
                  What if I am not a good writer — will this still work for me?
                </span>
                <span className="faq-q-icon">+</span>
              </button>
              <div
                className="faq-body"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div className="faq-body-inner">
                  <p className="faq-a" itemProp="text">
                    Yes. You do not need to be a good writer. Give IDEN your topic, your audience, and your Voice DNA. It handles the writing. You review, adjust if needed, and post. Most users spend under 5 minutes per post.
                  </p>
                </div>
              </div>
            </div>`;

const q7 = `<div
              className="faq-item"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="faq-q"
                onClick={(e) => (window as any).toggleFaq(e.currentTarget)}
              >
                <span className="faq-q-text" itemProp="name">
                  Does the free trial require a credit card?
                </span>
                <span className="faq-q-icon">+</span>
              </button>
              <div
                className="faq-body"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div className="faq-body-inner">
                  <p className="faq-a" itemProp="text">
                    No credit card, no account, no API key. Enter your email, get 10 free generations across all 9 tools. If you want unlimited access after your trial, pay $49 once. If not, no charge, no emails, no hassle.
                  </p>
                </div>
              </div>
            </div>`;

const q8 = `<div
              className="faq-item"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="faq-q"
                onClick={(e) => (window as any).toggleFaq(e.currentTarget)}
              >
                <span className="faq-q-text" itemProp="name">
                  Is this a subscription? Will I be charged again?
                </span>
                <span className="faq-q-icon">+</span>
              </button>
              <div
                className="faq-body"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div className="faq-body-inner">
                  <p className="faq-a" itemProp="text">
                    Never. One payment, lifetime access. No monthly fees, no annual renewals, no premium tier to unlock later. Pay $49 once and IDEN is yours forever.
                  </p>
                </div>
              </div>
            </div>`;

const q9 = `<div
              className="faq-item"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="faq-q"
                onClick={(e) => (window as any).toggleFaq(e.currentTarget)}
              >
                <span className="faq-q-text" itemProp="name">
                  Why do my LinkedIn posts sound like AI wrote them?
                </span>
                <span className="faq-q-icon">+</span>
              </button>
              <div
                className="faq-body"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div className="faq-body-inner">
                  <p className="faq-a" itemProp="text">
                    AI posts sound generic because the tool has no information about who you are. It defaults to the average LinkedIn professional voice, which sounds like nobody in particular. IDEN solves this with Voice DNA Lock: your specific writing fingerprint is extracted from your own posts in one session, locked permanently, and auto-applied to every generation. The output sounds like you because the AI has been calibrated specifically to you — not to the average founder.
                  </p>
                </div>
              </div>
            </div>`;

const q10 = `<div
              className="faq-item"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="faq-q"
                onClick={(e) => (window as any).toggleFaq(e.currentTarget)}
              >
                <span className="faq-q-text" itemProp="name">
                  How is IDEN different from Taplio and SuperGrow?
                </span>
                <span className="faq-q-icon">+</span>
              </button>
              <div
                className="faq-body"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div className="faq-body-inner">
                  <p className="faq-a" itemProp="text">
                    Taplio and SuperGrow generate content. IDEN builds identity first, then generates content. IDEN has four features no competitor offers: Voice DNA Lock (instant voice extraction), Identity Engine (profile analysis before generation), Brand OS (complete brand strategy system), and Pre-Publish Reach Scorer. IDEN costs $49 once versus $588 to $828 per year for Taplio's AI plan.
                  </p>
                </div>
              </div>
            </div>`;

const q11 = `<div
              className="faq-item"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="faq-q"
                onClick={(e) => (window as any).toggleFaq(e.currentTarget)}
              >
                <span className="faq-q-text" itemProp="name">
                  What is the best LinkedIn personal branding tool in 2025?
                </span>
                <span className="faq-q-icon">+</span>
              </button>
              <div
                className="faq-body"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div className="faq-body-inner">
                  <p className="faq-a" itemProp="text">
                    IDEN is designed for identity-first personal brand building with features no competitor offers: forensic voice extraction, complete brand strategy system, and pre-publish post scoring. For scheduling and analytics, AuthoredUp and SuperGrow are worth evaluating. The best tool depends on whether identity building or content management is your primary need.
                  </p>
                </div>
              </div>
            </div>`;

// Find the FAQ block to replace
const faqRegex = /<div\s+className="faq-wrap reveal"[\s\S]*?itemType="https:\/\/schema\.org\/FAQPage"\s*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/;

content = content.replace(faqRegex, `<div
            className="faq-wrap reveal"
            itemScope
            itemType="https://schema.org/FAQPage"
          >\n${q1}\n${q2}\n${q3}\n${q4}\n${q5}\n${q6}\n${q7}\n${q8}\n${q9}\n${q10}\n${q11}\n          </div>
        </div>
      </section>`);


// SECTION 14: FINAL CTA
content = content.replace("Pay Once. Sound Like You.", "Your Next LinkedIn Post Should Sound Like You Wrote It. Not Like AI Did.");
content = content.replace(
  /<p\s*style=\{\{\s*fontSize:\s*"1\.2rem",[\s\S]*?<\/p>/,
  `<p style={{ fontSize: "1.2rem", color: "var(--muted)", maxWidth: "500px", margin: "0 auto 40px" }}>
            Try IDEN free. 10 generations. No card. No account.<br/><br/>
            If the first post does not feel different - leave.<br/>
            If it does, you will know exactly why it is $49<br/>
            and not $49 every month.
          </p>`
);

// Wait! Both previous instances of this CTA replaced "Start Free" with "Try IDEN Free &rarr;"
content = content.replace(
  /<a href="\/app" className="btn-primary" style=\{\{ padding: "16px 40px", fontSize: "18px" \}\}>\s*Start Free &rarr;\s*<\/a>/,
  `<a href="/app" className="btn-primary" style={{ padding: "16px 40px", fontSize: "18px" }}>
            Try IDEN Free &rarr;
          </a>`
);

content = content.replace(
  /<div style=\{\{\s*marginTop:\s*"24px",[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/,
  `<div style={{ marginTop: "24px", display: "flex", gap: "16px", justifyContent: "center", fontSize: "12px", color: "var(--muted)", letterSpacing: "1px", textTransform: "uppercase" }}>
            <span>7-day guarantee</span>
            <span>·</span>
            <span>Zero LinkedIn account risk</span>
            <span>·</span>
            <span>Licence key in minutes</span>
          </div>
        </div>
      </section>`
);


fs.writeFileSync('src/App.tsx', content);
