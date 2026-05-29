import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

const compareHTML = `
      {/* COMPARISON */}
      <section id="comparison">
        <div className="section-inner">
          <span className="eyebrow">HOW WE COMPARE</span>
          <h2 className="section-headline reveal">
            IDEN vs Taplio vs SuperGrow: The Honest Comparison
          </h2>
          <div className="reveal" style={{ marginBottom: "40px", maxWidth: "800px" }}>
            <p style={{ fontSize: "1.2rem", marginBottom: "16px" }}>The honest comparison nobody else will give you.</p>
            <p style={{ marginBottom: "8px", color: "var(--foreground)", opacity: 0.9 }}>
              Taplio and SuperGrow are real products with real users.<br/>
              They were built to generate content.<br/>
              IDEN was built to build identity, then generate content.<br/>
              That difference changes everything.
            </p>
          </div>
          <div className="reveal" style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.95rem" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  <th style={{ padding: "16px", color: "var(--muted)", fontWeight: "500" }}></th>
                  <th style={{ padding: "16px", color: "var(--lime)", fontWeight: "600", fontSize: "1.1rem" }}>IDEN</th>
                  <th style={{ padding: "16px", fontWeight: "600" }}>SuperGrow Pro</th>
                  <th style={{ padding: "16px", fontWeight: "600" }}>Taplio Standard</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <td style={{ padding: "16px", color: "var(--muted)" }}>Year 1</td>
                  <td style={{ padding: "16px", fontWeight: "500" }}>$49 once</td>
                  <td style={{ padding: "16px" }}>$348-468/year</td>
                  <td style={{ padding: "16px" }}>$588-828/year</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <td style={{ padding: "16px", color: "var(--muted)" }}>Year 2</td>
                  <td style={{ padding: "16px", fontWeight: "500" }}>$0 (you own it)</td>
                  <td style={{ padding: "16px" }}>$348-468/year</td>
                  <td style={{ padding: "16px" }}>$588-828/year</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <td style={{ padding: "16px", color: "var(--muted)" }}>Year 3</td>
                  <td style={{ padding: "16px", fontWeight: "500" }}>$0 (you own it)</td>
                  <td style={{ padding: "16px" }}>$348-468/year</td>
                  <td style={{ padding: "16px" }}>$588-828/year</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border)", background: "rgba(255,255,255,0.02)" }}>
                  <td style={{ padding: "16px", fontWeight: "600" }}>3-Year Total</td>
                  <td style={{ padding: "16px", color: "var(--lime)", fontWeight: "bold", fontSize: "1.1rem" }}>$49</td>
                  <td style={{ padding: "16px", fontWeight: "600" }}>$1,044-1,404</td>
                  <td style={{ padding: "16px", fontWeight: "600" }}>$1,764-2,484</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <td style={{ padding: "16px", color: "var(--muted)" }}>Voice Lock</td>
                  <td style={{ padding: "16px" }}>Instant (1 session)</td>
                  <td style={{ padding: "16px" }}>Gradual (weeks)</td>
                  <td style={{ padding: "16px" }}>Generic viral posts</td>
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
                  <td style={{ padding: "16px" }}>Zero</td>
                  <td style={{ padding: "16px" }}>Low</td>
                  <td style={{ padding: "16px" }}>High (April 2025 enforcement)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <td style={{ padding: "16px", color: "var(--muted)" }}>One-time payment</td>
                  <td style={{ padding: "16px" }}>Yes</td>
                  <td style={{ padding: "16px", opacity: 0.6 }}>No</td>
                  <td style={{ padding: "16px", opacity: 0.6 }}>No</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p
            className="legal-footnote reveal"
            style={{
              fontSize: "11px",
              color: "var(--muted)",
              marginTop: "32px",
              fontStyle: "italic"
            }}
          >
            All competitor pricing verified May 2025. Subject to change. Verify current pricing at competitor websites. In April 2025, LinkedIn enforcement targeted tools using cookie-based authentication. IDEN has zero LinkedIn integration.
          </p>
        </div>
      </section>

`;

content = content.replace('      {/* HOW IT WORKS */}', compareHTML + '      {/* HOW IT WORKS */}');
fs.writeFileSync('src/App.tsx', content);
