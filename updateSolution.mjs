import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf8');

// The solution string
const newSolution = `      <section id="solution">
        <div className="section-inner">
          <span className="eyebrow">THE IDEN DIFFERENCE</span>
          <h2 className="section-headline reveal">
            What Happens When a Tool Finally Knows Who You Are.
          </h2>
          <div className="solution-grid" style={{ marginTop: "40px" }}>
            <div className="solution-col">
              <div className="solution-num bebas">01</div>
              <div className="solution-title">WHO ARE YOU?</div>
              <p style={{ color: "var(--lime)", marginBottom: "16px", fontWeight: "500" }}>
                Before you write a word, know exactly who you are on LinkedIn.
              </p>
              <p className="solution-body">
                Most LinkedIn tools ask what you want to write.
                <br />
                <br />
                IDEN asks who you are first.
                <br />
                <br />
                The Identity Engine deep-scans your LinkedIn profile and
                extracts your actual voice, your real expertise, your
                positioning gaps, and where your brand should go next.
                <br />
                <br />
                Before a single word is generated, IDEN understands you.
                <br />
                <br />
                This is why the outputs feel different.
              </p>
            </div>
            <div className="solution-col">
              <div className="solution-num bebas">02</div>
              <div className="solution-title">WHAT IS YOUR VOICE?</div>
              <p style={{ color: "var(--lime)", marginBottom: "16px", fontWeight: "500" }}>
                The last time you will ever re-explain your style to an AI.
              </p>
              <p className="solution-body">
                Voice DNA extracts your writing fingerprint from 3 to 5 of your
                best posts.
                <br />
                <br />
                Sentence rhythm. Vocabulary. Hook patterns. Personality. The
                things that make your writing distinctly yours.
                <br />
                <br />
                Locked once. Applied to every tool, every time. Automatically.
                <br />
                <br />
                You never re-enter your voice. You never paste examples again. You
                never spend 20 minutes coaxing the AI back to your style.
                <br />
                <br />
                It writes like you. Because it knows you.
              </p>
            </div>
            <div className="solution-col">
              <div className="solution-num bebas">03</div>
              <div className="solution-title">WHAT IS YOUR STRATEGY?</div>
              <p style={{ color: "var(--lime)", marginBottom: "16px", fontWeight: "500" }}>
                A complete brand system before you write your first post.
              </p>
              <p className="solution-body">
                Before IDEN generates a single post, it builds your complete
                brand system.
                <br />
                <br />
                Positioning. Pillars. Voice guidelines. LinkedIn headline. About
                section. 30-day growth plan.
                <br />
                <br />
                What personal brand consultants charge thousands for, IDEN
                delivers in 3 minutes.
                <br />
                <br />
                Not as a template. As your system, built around your specific
                background, audience, and goals.
              </p>
            </div>
          </div>
        </div>
      </section>`;

const solutionRegex = /<section id="solution">[\s\S]*?<\/div>\s*<\/section>/;
content = content.replace(solutionRegex, newSolution);

fs.writeFileSync('src/App.tsx', content);
