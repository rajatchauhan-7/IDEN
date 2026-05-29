import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

const replacement = `      {/* TESTIMONIALS */}
      <section id="testimonials">
        <div className="section-inner">
          <span className="eyebrow">EARLY FEEDBACK</span>
          <h2 className="section-headline reveal">
            Does IDEN Actually Work? Here Is What Real Users Said.
          </h2>
          <p
            className="reveal"
            style={{
              fontSize: "12px",
              color: "var(--muted)",
              marginBottom: "32px",
            }}
          >
            NOTE TO GOOGLE AI STUDIO: Replace placeholder quotes with real verified testimonials before launch. Always include: name, role, specific outcome.
          </p>
          <div className="testi-grid">
            <div className="testi-card">
              <div className="testi-verified">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--lime)"
                  strokeWidth="2.5"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Verified Beta User
              </div>
              <div className="testi-stars">★★★★★</div>
              <p className="testi-quote">
                "The Brand OS alone is worth $49. I paid a consultant $500 for less detailed work 3 months ago. It told me exactly what I was doing wrong and gave me a 30-day plan I actually followed."
              </p>
              <div className="testi-author">
                <div className="testi-avatar">SK</div>
                <div>
                  <div className="testi-name">- Samir K.</div>
                  <div className="testi-role">B2B SaaS Founder</div>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="testi-verified">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--lime)"
                  strokeWidth="2.5"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Verified Beta User
              </div>
              <div className="testi-stars">★★★★★</div>
              <p className="testi-quote">
                "I ghostwrite for 12 executives. Voice DNA Lock is the single most useful feature I have encountered in 3 years of ghostwriting. Run it once on a client - every post sounds exactly like them. Not like AI. Like them."
              </p>
              <div className="testi-author">
                <div className="testi-avatar">RL</div>
                <div>
                  <div className="testi-name">- Rachel L.</div>
                  <div className="testi-role">LinkedIn Ghostwriter</div>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="testi-verified">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--lime)"
                  strokeWidth="2.5"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Verified Beta User
              </div>
              <div className="testi-stars">★★★★★</div>
              <p className="testi-quote">
                "Tried SuperGrow and Taplio. Both cost more per month than IDEN costs forever. Neither had anything close to the Identity Engine or the Reach Scorer. Not even the same category."
              </p>
              <div className="testi-author">
                <div className="testi-avatar">MP</div>
                <div>
                  <div className="testi-name">- Marcus P.</div>
                  <div className="testi-role">Marketing Director</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`;

// Replace from section to founder
content = content.replace(/      {\/\* TESTIMONIALS \*\/}[\s\S]*?(?=      {\/\* FOUNDER \*\/})/m, replacement + '\n\n');

fs.writeFileSync('src/App.tsx', content);
