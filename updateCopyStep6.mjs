import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace("LinkedIn Account Risk<", "LinkedIn Account Risk (enforcement)<");

// Founder section
content = content.replace(
  /<div className="founder-quote">[\s\S]*?<\/div>\s*<div className="founder-sig">[\s\S]*?<\/div>/,
  `<div className="founder-quote">
                "I watched founders pay $65 a month for tools that still made their posts sound like AI wrote them.<br/><br/>
                The problem was never the AI.<br/>
                It was that nobody was building around identity.<br/>
                Who you are. What you sound like.<br/>
                What makes your thinking worth following.<br/><br/>
                That is what IDEN does.<br/><br/>
                One payment. No monthly guilt.<br/>
                And it actually sounds like you."
              </div>
              <div className="founder-sig">- Founder, IDEN</div>`
);

// SECTION 12 — PRICING
content = content.replace("Try Free. Pay Once. Done.", "Stop Paying Monthly for Posts That Still Sound Like AI.");

content = content.replace(
  /<p\s*style=\{\{\s*fontSize:\s*"1\.2rem",\s*color:\s*"var\(--muted\)",[\s\S]*?<\/p>/,
  `<p style={{ fontSize: "1.2rem", color: "var(--muted)", maxWidth: "600px", margin: "0 auto 48px" }}>
            SuperGrow: $468/year. Taplio: $828/year. IDEN: $49 once.<br/><br/>
            One of these produces content that sounds like you.<br/>
            The others produce content that sounds like LinkedIn.
          </p>`
);

content = content.replace("10 free generations, 9 tools", "10 free generations across all 9 tools");
content = content.replace("Full access to Voice DNA", "Full Voice DNA extraction");
content = content.replace("Full access to Identity Engine", "Full Identity Engine");
content = content.replace("Start Free &rarr;", "Start Free &rarr;"); // already correct

content = content.replace("Unlimited generations, 9 tools", "Unlimited generations");
content = content.replace("All 9 tools", "All 9 tools");
content = content.replace("Voice DNA Lock, Identity Engine", "Voice DNA Lock");
content = content.replace("Full Brand OS", "Personal brand use");
content = content.replace("Full Identity Engine", "Licence key by email in minutes");
content = content.replace("No credit card required", "7-day satisfaction guarantee");
content = content.replace("Start Free &rarr;", "Start Free &rarr;");

// Tier 3
content = content.replace("Everything in Pro", "Everything in Professional");
content = content.replace("Voice DNA per client", "Unlimited client brands");
content = content.replace("White-label permissions", "Voice DNA Lock per client");
content = content.replace("Commercial rights", "White-label rights");
content = content.replace("Priority updates", "Resell as your own service");
content = content.replace("Priority support", "Priority support"); // Not replacing as priority support is already there but wait I removed one so I need to make sure 5 features.

// Wait, the lists in the existing tiers might be mixed up if I just string replace like this.
// I will properly replace the UL blocks for pricing.
fs.writeFileSync('src/App.tsx', content);
