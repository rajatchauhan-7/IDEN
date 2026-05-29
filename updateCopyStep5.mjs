import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf8');

const newTableBody = `<tbody>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <td style={{ padding: "16px", color: "var(--muted)" }}>Year 1 cost</td>
                  <td style={{ padding: "16px", fontWeight: "500", color: "var(--lime)" }}>$49 once</td>
                  <td style={{ padding: "16px" }}>$348-468/year</td>
                  <td style={{ padding: "16px" }}>$588-828/year</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <td style={{ padding: "16px", color: "var(--muted)" }}>Year 2 cost</td>
                  <td style={{ padding: "16px", fontWeight: "500", color: "var(--lime)" }}>$0 (you own it)</td>
                  <td style={{ padding: "16px" }}>$348-468/year</td>
                  <td style={{ padding: "16px" }}>$588-828/year</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <td style={{ padding: "16px", color: "var(--muted)" }}>Year 3 cost</td>
                  <td style={{ padding: "16px", fontWeight: "500", color: "var(--lime)" }}>$0 (you own it)</td>
                  <td style={{ padding: "16px" }}>$348-468/year</td>
                  <td style={{ padding: "16px" }}>$588-828/year</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <td style={{ padding: "16px", color: "var(--body)", fontWeight: "600" }}>3-Year Total</td>
                  <td style={{ padding: "16px", fontWeight: "700", color: "var(--lime)", fontSize: "1.1rem" }}>$49</td>
                  <td style={{ padding: "16px", color: "var(--body)" }}>$1,044-1,404</td>
                  <td style={{ padding: "16px", color: "var(--body)" }}>$1,764-2,484</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <td style={{ padding: "16px", color: "var(--muted)" }}>Voice Lock</td>
                  <td style={{ padding: "16px" }}>Instant (1 session)</td>
                  <td style={{ padding: "16px", opacity: 0.6 }}>Gradual (weeks)</td>
                  <td style={{ padding: "16px", opacity: 0.6 }}>Generic viral posts</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <td style={{ padding: "16px", color: "var(--muted)" }}>Identity Engine</td>
                  <td style={{ padding: "16px" }}>Only tool with this</td>
                  <td style={{ padding: "16px", opacity: 0.6 }}>Not available</td>
                  <td style={{ padding: "16px", opacity: 0.6 }}>Not available</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <td style={{ padding: "16px", color: "var(--muted)" }}>Brand OS</td>
                  <td style={{ padding: "16px" }}>Full 10-section system</td>
                  <td style={{ padding: "16px", opacity: 0.6 }}>Not available</td>
                  <td style={{ padding: "16px", opacity: 0.6 }}>Not available</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <td style={{ padding: "16px", color: "var(--muted)" }}>Pre-publish Scoring</td>
                  <td style={{ padding: "16px" }}>Only tool with this</td>
                  <td style={{ padding: "16px", opacity: 0.6 }}>Not available</td>
                  <td style={{ padding: "16px", opacity: 0.6 }}>Not available</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <td style={{ padding: "16px", color: "var(--muted)" }}>LinkedIn Account Risk</td>
                  <td style={{ padding: "16px", color: "var(--lime)" }}>Zero</td>
                  <td style={{ padding: "16px", opacity: 0.6 }}>Low</td>
                  <td style={{ padding: "16px", opacity: 0.6 }}>High (April 2025)</td>
                </tr>
                <tr>
                  <td style={{ padding: "16px", color: "var(--muted)" }}>One-time payment</td>
                  <td style={{ padding: "16px", color: "var(--lime)" }}>Yes</td>
                  <td style={{ padding: "16px", opacity: 0.6 }}>No</td>
                  <td style={{ padding: "16px", opacity: 0.6 }}>No</td>
                </tr>
              </tbody>`;

content = content.replace(/<tbody>[\s\S]*?<\/tbody>/, newTableBody);

content = content.replace(
  /IDEN was built to build identity, then generate content\./,
  "IDEN was built to build identity first, then generate content."
);

content = content.replace(
  /<p\s*style=\{\{\s*marginTop:\s*"16px",[\s\S]*?<\/p>/,
  `<p style={{ marginTop: "16px", fontSize: "11px", color: "var(--muted)", fontStyle: "italic", opacity: 0.6 }}>
              All competitor pricing verified May 2025. Subject to change.<br/>
              Verify current pricing at competitor websites before purchasing.<br/>
              In April 2025, LinkedIn enforcement targeted tools using cookie-based authentication. IDEN has zero LinkedIn integration.
            </p>`
);

// SECTION 09: HOW IT WORKS
content = content.replace("THE PROCESS", "THREE STEPS");
content = content.replace("How It Actually Works.", "Simpler Than You Think.");

content = content.replace(
  /<div className="step-num">01<\/div>[\s\S]*?<h3 className="step-title">Try Free<\/h3>[\s\S]*?<div className="step-body">[\s\S]*?<\/div>/,
  `<div className="step-num">01</div>
              <h3 className="step-title">TRY FREE</h3>
              <div className="step-body">
                Enter your email. Get 10 free generations across all 9 tools.<br/>
                No card, no account, no API key.<br/>
                Open it and use it. Right now.
              </div>`
);

content = content.replace(
  /<div className="step-num">02<\/div>[\s\S]*?<h3 className="step-title">Extract Identity<\/h3>[\s\S]*?<div className="step-body">[\s\S]*?<\/div>/,
  `<div className="step-num">02</div>
              <h3 className="step-title">LOCK YOUR VOICE</h3>
              <div className="step-body">
                Paste 3 to 5 of your best LinkedIn posts into Voice DNA.<br/>
                IDEN extracts your writing fingerprint and locks it in one session.<br/><br/>
                From that moment, every tool writes exactly like you.<br/>
                Automatically. Forever. You never do this again.
              </div>`
);

content = content.replace(
  /<div className="step-num">03<\/div>[\s\S]*?<h3 className="step-title">Own It Forever<\/h3>[\s\S]*?<div className="step-body">[\s\S]*?<\/div>/,
  `<div className="step-num">03</div>
              <h3 className="step-title">OWN IT FOREVER</h3>
              <div className="step-body">
                If the first post feels different - and it will -<br/>
                unlock unlimited access for $49 once.<br/><br/>
                One payment. No monthly fees. No renewal.<br/>
                Licence key in your email within minutes.
              </div>`
);


// SECTION 10: TESTIMONIALS
content = content.replace("Does It Actually Work? Here Is What Real Users Said.", "Does IDEN Actually Work? Here Is What Real Users Said.");

content = content.replace(
  /"The Brand OS alone is worth \$49\. I paid a consultant \$500 for less detailed work 3 months ago\. It told me exactly what I was doing wrong and gave me a 30-day plan I actually followed\."/,
  `"The Brand OS alone is worth $49. I paid a consultant $500 for less detailed work 3 months ago. It told me exactly what I was doing wrong and gave me a 30-day plan I actually followed."`
);

// Second testimonial already looks fine in the codebase maybe, let me check. Let's just blindly replace the quotes and authors just in case.
content = content.replace(
  /"I ghostwrite for 12 executives\. Voice DNA Lock is the single most useful feature I have encountered in 3 years of ghostwriting\. Run it once on a client\. Every post sounds exactly like them\. Not like AI\. Like them\."/,
  `"I ghostwrite for 12 executives. Voice DNA Lock is the single most useful feature I have encountered in 3 years of ghostwriting. Run it once on a client. Every post sounds exactly like them. Not like AI. Like them."`
);

content = content.replace(
  /"Tried SuperGrow and Taplio\. Both cost more per month than IDEN costs forever\. Neither had anything close to the Identity Engine or the Reach Scorer\. Not even the same category\."/,
  `"Tried SuperGrow and Taplio. Both cost more per month than IDEN costs forever. Neither had anything close to the Identity Engine or the Reach Scorer. Not even the same category."`
);

fs.writeFileSync('src/App.tsx', content);
