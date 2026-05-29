import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf8');

// I will rebuild the tier lists exactly.
content = content.replace(
  /<div className="price-card tier-1">[\s\S]*?<ul className="feat-list">[\s\S]*?<\/ul>[\s\S]*?<a href="\/app" className="btn-secondary">[\s\S]*?<\/a>\s*<\/div>/,
  `<div className="price-card tier-1">
              <div className="price-tier">FREE TRIAL</div>
              <div className="price-amount">
                <span>$</span>0
              </div>
              <div className="price-sub">Free - No card, no account</div>
              <ul className="feat-list">
                <li><span className="feat-check">✓</span> 10 free generations across all 9 tools</li>
                <li><span className="feat-check">✓</span> Full Voice DNA extraction</li>
                <li><span className="feat-check">✓</span> Full Brand OS</li>
                <li><span className="feat-check">✓</span> Full Identity Engine</li>
                <li><span className="feat-check">✓</span> No credit card required</li>
              </ul>
              <a href="/app" className="btn-secondary">
                Start Free &rarr;
              </a>
            </div>`
);

content = content.replace(
  /<div className="price-card featured">[\s\S]*?<ul className="feat-list">[\s\S]*?<\/ul>[\s\S]*?<a href="\/app" className="btn-primary">[\s\S]*?<\/a>\s*<\/div>/,
  `<div className="price-card featured">
              <div className="price-badge">MOST POPULAR</div>
              <div className="price-tier">PROFESSIONAL</div>
              <div className="price-amount">
                <span>$</span>49
              </div>
              <div className="price-sub">
                $49 one-time - yours forever, no renewals
              </div>
              <ul className="feat-list">
                <li><span className="feat-check">✓</span> Unlimited generations</li>
                <li><span className="feat-check">✓</span> All 9 tools</li>
                <li><span className="feat-check">✓</span> Voice DNA Lock</li>
                <li><span className="feat-check">✓</span> Personal brand use</li>
                <li><span className="feat-check">✓</span> Licence key by email in minutes</li>
                <li><span className="feat-check">✓</span> 7-day satisfaction guarantee</li>
              </ul>
              <a href="/app" className="btn-primary">
                Get Unlimited Access &rarr;
              </a>
            </div>`
);

content = content.replace(
  /<div className="price-card tier-3">[\s\S]*?<ul className="feat-list">[\s\S]*?<\/ul>[\s\S]*?<a href="\/app" className="btn-secondary">[\s\S]*?<\/a>\s*<\/div>/,
  `<div className="price-card tier-3">
              <div className="price-tier">AGENCY</div>
              <div className="price-amount">
                <span>$</span>149
              </div>
              <div className="price-sub">
                $149 one-time - unlimited clients, white-label
              </div>
              <ul className="feat-list">
                <li><span className="feat-check">✓</span> Everything in Professional</li>
                <li><span className="feat-check">✓</span> Unlimited client brands</li>
                <li><span className="feat-check">✓</span> Voice DNA Lock per client</li>
                <li><span className="feat-check">✓</span> White-label rights</li>
                <li><span className="feat-check">✓</span> Resell as your own service</li>
                <li><span className="feat-check">✓</span> Priority support</li>
              </ul>
              <a href="/app" className="btn-secondary">
                Get Agency Access &rarr;
              </a>
            </div>`
);

content = content.replace(
  /<p style=\{\{\s*marginTop:\s*"32px",\s*fontSize:\s*"14px",\s*color:\s*"var\(--muted\)"\s*\}\}>[\s\S]*?<\/section>/,
  `<p style={{ marginTop: "32px", fontSize: "14px", color: "var(--muted)" }}>
            Ghostwriter? The Agency licence ($149 once) covers unlimited clients.<br/>
            No per-client fees. No per-seat charges. One purchase, unlimited brands.*
          </p>
          <p style={{ marginTop: "12px", fontSize: "11px", color: "var(--muted)", fontStyle: "italic", opacity: 0.6 }}>
            * "Unlimited clients" refers to the number of distinct Voice DNA profiles and Brand OS builds under one Agency licence. Fair use applies.
          </p>

          <div style={{ marginTop: "48px", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "12px", padding: "24px 32px", textAlign: "left", maxWidth: "800px", margin: "48px auto 0" }}>
            <p style={{ marginBottom: "16px", color: "var(--body)", fontWeight: "500" }}>
              7-day satisfaction guarantee on both paid plans.
            </p>
            <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.7" }}>
              If IDEN does not deliver what we promise, email us within 7 days<br/>
              of purchase with your order number for a full refund.<br/>
              No hassle. No questions. We stand behind it completely.
            </p>
          </div>

          <div style={{ marginTop: "32px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", fontSize: "12px", color: "var(--muted)", letterSpacing: "1px", textTransform: "uppercase" }}>
            <span>Zero LinkedIn account risk</span>
            <span>·</span>
            <span>No data sold or shared</span>
            <span>·</span>
            <span>7-day satisfaction guarantee</span>
            <span>·</span>
            <span>No hidden fees. Ever.</span>
            <span>·</span>
            <span>Licence key by email in minutes</span>
          </div>
        </div>
      </section>`
);


fs.writeFileSync('src/App.tsx', content);
