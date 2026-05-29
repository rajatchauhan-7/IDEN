import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

const replacement = `      {/* HOW IT WORKS */}
      <section id="howitworks">
        <div className="section-inner">
          <span className="eyebrow">THREE STEPS</span>
          <h2 className="section-headline reveal">Simpler Than You Think. Here Is How It Works.</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-num">01</div>
              <div className="step-title">TRY FREE</div>
              <p className="step-body">
                Enter your email. Get 10 free generations across all 9 tools. No card, no account, no API key. Just open it and use it.
              </p>
            </div>
            <div className="step-card">
              <div className="step-num">02</div>
              <div className="step-title">LOCK YOUR VOICE</div>
              <p className="step-body">
                Paste 3 to 5 of your best LinkedIn posts into Voice DNA. IDEN extracts your writing fingerprint and locks it in one session. Every tool now writes exactly like you. Automatically. Forever.
              </p>
            </div>
            <div className="step-card">
              <div className="step-num">03</div>
              <div className="step-title">OWN IT FOREVER</div>
              <p className="step-body">
                If you love it, unlock unlimited access for $49 once. One payment. No monthly fees. Licence key delivered by email in minutes.
              </p>
            </div>
          </div>
        </div>
      </section>`;

// Replace from section to testimoials
content = content.replace(/      {\/\* HOW IT WORKS \*\/}?\n      <section id="howitworks">[\s\S]*?(?=      {\/\* TESTIMONIALS \*\/})/m, replacement + '\n\n');

fs.writeFileSync('src/App.tsx', content);
