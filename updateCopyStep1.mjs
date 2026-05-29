import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace("LinkedIn AI Tool for Founders, Creators and Ghostwriters", "For founders who are done sounding like everyone else on LinkedIn.");

content = content.replace(
  /<span style=\{\{\s*display:\s*"block",\s*color:\s*"var\(--lime\)",\s*whiteSpace:\s*"nowrap"\s*\}\}>\s*<TypewriterText text="THAT BUILDS YOUR IDENTITY" delay=\{1\.4\} \/>\s*<\/span>\s*<span style=\{\{\s*display:\s*"block",\s*whiteSpace:\s*"nowrap"\s*\}\}>\s*<TypewriterText text="BEFORE WRITING A SINGLE WORD" delay=\{2\.3\} \/>\s*<\/span>/,
  `<span style={{ display: "block", color: "var(--lime)", whiteSpace: "nowrap" }}>
              <TypewriterText text="THAT FINALLY SOUNDS LIKE YOU." delay={1.4} />
            </span>`
);

content = content.replace(
  'Stop sounding like AI. Start sounding like you.',
  'Not like AI. Not like a template. Like you.'
);

content = content.replace(
  /<p className="hero-desc">[\s\S]*?<\/p>/,
  `<p className="hero-desc">
            IDEN extracts your exact writing voice, builds your complete brand strategy, and generates LinkedIn content your audience will recognise as unmistakably yours.
            <br />
            <br />
            One payment. No monthly fees. Yours forever.
          </p>`
);

content = content.replace(
  /Used by founders and ghostwriters across\{\" \"\}\s*<span id="heroCounter">14<\/span> countries/,
  'Used by founders and ghostwriters across 14 countries'
);

content = content.replace(
  /Start Free - No Card Required/,
  'Try Free - 10 Generations, No Card'
);

content = content.replace(
  /<span>✦ 10 free generations<\/span>\s*<span>· No credit card<\/span>\s*<span>· No LinkedIn account needed<\/span>[\s\S]*?<\/div>/,
  `<span>Zero LinkedIn account risk</span>
            <span>·</span>
            <span>No credit card</span>
            <span>·</span>
            <span>No LinkedIn account needed</span>
            <span>·</span>
            <span>7-day guarantee</span>
          </div>`
);

content = content.replace(
  /No scraping, no bans, no automation\s*·\s*9 tools\s*·\s*0 monthly fees\./,
  `Zero LinkedIn account risk · No automation, no scraping, no bans · 9 AI-powered brand tools · $49 once, not $65 every month`
);

// SECTION 04 — PAIN SECTION
content = content.replace("WHY AI LINKEDIN CONTENT FAILS", "THE PROBLEM YOU ALREADY KNOW");

content = content.replace(
  /<div className="pain-body reveal">[\s\S]*?<\/div>\s*<div className="pain-contrast reveal">/,
  `<div className="pain-body reveal">
              <p>
                You spent an hour on that post.<br/>
                You tweaked the hook four times.<br/>
                You asked ChatGPT to write in your style.
              </p>
              <p>
                It still sounded like someone else wrote it.
              </p>
              <p>
                Not because you cannot write.<br/>
                Because no tool has ever asked who you are<br/>
                before generating content for you.
              </p>
              <p>
                They all start the same way:<br/>
                "What do you want to write about today?"
              </p>
              <p>
                None of them ask:<br/>
                "Who are you?"
              </p>
              <p>
                That one question changes everything that follows.
              </p>
            </div>
            <div className="pain-contrast reveal">`
);

content = content.replace(
  /<div className="pain-contrast reveal">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/,
  `<div className="pain-contrast reveal">
              <p>Content gets consumed.<br/>A brand gets remembered.</p>
              <p style={{ marginTop: "24px" }}>Content builds followers.<br/>A brand builds opportunities.</p>
              <p style={{ marginTop: "24px" }}>Content expires in 48 hours.<br/>A brand compounds every time you show up.</p>
            </div>
          </div>
        </div>
      </section>`
);

// SECTION 05 — SOLUTION
content = content.replace("IDENTITY BUILT", "THE IDEN DIFFERENCE");
content = content.replace("Identity First. Content Second.", "What Happens When a Tool Finally Knows Who You Are.");

content = content.replace(
  /<div className="solution-col">[\s\S]*?<div className="solution-num">01<\/div>[\s\S]*?<h3 className="solution-title">Deep Profile Scan<\/h3>[\s\S]*?<div className="solution-body">[\s\S]*?<\/div>[\s\S]*?<\/div>/,
  `<div className="solution-col">
              <div className="solution-num">01</div>
              <h3 className="solution-title">WHO ARE YOU?</h3>
              <p style={{ color: "var(--lime)", marginBottom: "12px", fontFamily: '"Bebas Neue", sans-serif', fontSize: "16px", letterSpacing: "1px" }}>Before you write a word, know exactly who you are on LinkedIn.</p>
              <div className="solution-body">
                <p>Most LinkedIn tools ask what you want to write.<br/><br/>
                IDEN asks who you are first.<br/><br/>
                The Identity Engine deep-scans your LinkedIn profile and extracts your actual voice, your real expertise, your positioning gaps, and where your brand should go next.<br/><br/>
                Before a single word is generated, IDEN understands you.<br/><br/>
                This is why the outputs feel different.</p>
              </div>
            </div>`
);

content = content.replace(
  /<div className="solution-col">[\s\S]*?<div className="solution-num">02<\/div>[\s\S]*?<h3 className="solution-title">Voice DNA Extraction<\/h3>[\s\S]*?<div className="solution-body">[\s\S]*?<\/div>[\s\S]*?<\/div>/,
  `<div className="solution-col">
              <div className="solution-num">02</div>
              <h3 className="solution-title">WHAT IS YOUR VOICE?</h3>
              <p style={{ color: "var(--lime)", marginBottom: "12px", fontFamily: '"Bebas Neue", sans-serif', fontSize: "16px", letterSpacing: "1px" }}>The last time you will ever re-explain your style to an AI.</p>
              <div className="solution-body">
                <p>Voice DNA extracts your writing fingerprint from 3 to 5 of your best posts.<br/><br/>
                Sentence rhythm. Vocabulary. Hook patterns. Personality. The things that make your writing distinctly yours.<br/><br/>
                Locked once. Applied to every tool, every time. Automatically.<br/><br/>
                You never re-enter your voice.<br/>
                You never paste examples again.<br/>
                You never spend 20 minutes coaxing the AI back to your style.<br/><br/>
                It writes like you. Because it knows you.</p>
              </div>
            </div>`
);

content = content.replace(
  /<div className="solution-col">[\s\S]*?<div className="solution-num">03<\/div>[\s\S]*?<h3 className="solution-title">Strategy Engine<\/h3>[\s\S]*?<div className="solution-body">[\s\S]*?<\/div>[\s\S]*?<\/div>/,
  `<div className="solution-col">
              <div className="solution-num">03</div>
              <h3 className="solution-title">WHAT IS YOUR STRATEGY?</h3>
              <p style={{ color: "var(--lime)", marginBottom: "12px", fontFamily: '"Bebas Neue", sans-serif', fontSize: "16px", letterSpacing: "1px" }}>A complete brand system before you write your first post.</p>
              <div className="solution-body">
                <p>Before IDEN generates a single post, it builds your complete brand system.<br/><br/>
                Positioning. Pillars. Voice guidelines. LinkedIn headline. About section. 30-day growth plan.<br/><br/>
                What personal brand consultants charge thousands for, IDEN delivers in 3 minutes.<br/><br/>
                Not as a template.<br/>
                As your system, built around your specific background, audience, and goals.</p>
              </div>
            </div>`
);


fs.writeFileSync('src/App.tsx', content);
