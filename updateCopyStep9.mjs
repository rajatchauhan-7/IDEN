import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  /<section id="finalcta">[\s\S]*?<\/section>/,
  `<section id="finalcta">
        <div className="section-inner" style={{ textAlign: "center" }}>
          <h2
            className="finalcta-headline bebas reveal"
            style={{ letterSpacing: "0.02em" }}
          >
            Your Next LinkedIn Post Should Sound Like You Wrote It. Not Like AI Did.
          </h2>
          <p style={{ fontSize: "1.2rem", color: "var(--muted)", maxWidth: "500px", margin: "0 auto 40px" }}>
            Try IDEN free. 10 generations. No card. No account.<br/><br/>
            If the first post does not feel different - leave.<br/>
            If it does, you will know exactly why it is $49<br/>
            and not $49 every month.
          </p>
          <div className="finalcta-cta-wrap reveal">
            <a
              href="/app"
              className="btn-primary finalcta-cta"
              style={{ fontSize: "1.2rem", padding: "16px 40px" }}
              aria-label="Start IDEN free trial - 10 generations, no credit card"
            >
              Try IDEN Free &rarr;
            </a>
          </div>
          <div className="finalcta-trust reveal" style={{ marginTop: "24px", display: "flex", gap: "16px", justifyContent: "center", fontSize: "12px", color: "var(--muted)", letterSpacing: "1px", textTransform: "uppercase" }}>
            <span>7-day guarantee</span>
            <span>·</span>
            <span>Zero LinkedIn account risk</span>
            <span>·</span>
            <span>Licence key in minutes</span>
          </div>
        </div>
      </section>`
);

// Format Legal string properly for the footer
const currentLegal = `<div
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
            © 2025 IDEN. Zero LinkedIn account risk. 7-day satisfaction
            guarantee. IDEN is not affiliated with or endorsed by LinkedIn
            Corporation. "LinkedIn" is a registered trademark of LinkedIn
            Corporation.
          </p>
        </div>`;

const newLegal = `<div
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
            © 2025 IDEN. Zero LinkedIn account risk. 7-day satisfaction guarantee.<br/>
            IDEN is not affiliated with or endorsed by LinkedIn Corporation.<br/>
            "LinkedIn" is a registered trademark of LinkedIn Corporation.
          </p>
        </div>`;

content = content.replace(
  /<div\s*className="footer-legal-block"[\s\S]*?<\/div>/,
  newLegal
);

fs.writeFileSync('src/App.tsx', content);
