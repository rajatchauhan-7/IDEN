import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

const newMoatGrid = `          <span className="eyebrow">WHAT NO OTHER TOOL HAS BUILT</span>
          <h2 className="section-headline reveal">
            How Is IDEN Different from Taplio, SuperGrow, and Other LinkedIn Tools?
          </h2>
          <p
            className="reveal"
            style={{
              fontSize: "1.2rem",
              marginBottom: "40px",
              maxWidth: "600px",
            }}
          >
            Every LinkedIn AI tool generates content. IDEN builds identity first, then generates content. That difference changes everything.
          </p>
          <div className="moat-grid">
            <div className="moat-card">
              <div className="moat-label">PIONEER FEATURE 01</div>
              <div className="moat-title">VOICE DNA LOCK</div>
              <div className="moat-body">
                <p>
                  Other tools learn your style gradually over weeks of posting. Some train on generic viral content that has nothing to do with you.
                </p>
                <div className="moat-divider">
                  <p>
                    IDEN extracts your forensic writing fingerprint in one session from 3 to 5 sample posts. <span className="highlight">Locked permanently.</span> Applied automatically to every tool, every time.
                  </p>
                </div>
                <p>
                  One session. Your voice. Yours forever.
                </p>
              </div>
            </div>
            <div className="moat-card">
              <div className="moat-label">PIONEER FEATURE 02</div>
              <div className="moat-title">IDENTITY ENGINE</div>
              <div className="moat-body">
                <p>
                  Every LinkedIn tool starts with: "What do you want to write?"<br/>
                  IDEN asks first: "Who are you?"
                </p>
                <div className="moat-divider">
                  <p>
                    The Identity Engine deep-scans your profile, extracts your genuine expertise, maps your positioning gaps, <span className="highlight">and gives you a complete brand direction</span> before a single word is generated.
                  </p>
                </div>
                <p>
                  Content without identity is noise. IDEN generates signal.
                </p>
              </div>
            </div>
            <div className="moat-card">
              <div className="moat-label">PIONEER FEATURE 03</div>
              <div className="moat-title">BRAND OS</div>
              <div className="moat-body">
                <p>
                  80% of LinkedIn creators post without a brand strategy. They wonder why some posts land and most do not.
                </p>
                <div className="moat-divider">
                  <p>
                    IDEN's Brand OS gives you the complete system first: <span className="highlight">Positioning. Pillars. Voice. Headline. About. 30-day plan.</span>
                  </p>
                </div>
                <p>
                  What brand consultants charge thousands for, built around your specific background in 3 minutes.
                </p>
              </div>
            </div>
            <div className="moat-card">
              <div className="moat-label">PIONEER FEATURE 04</div>
              <div className="moat-title">PRE-PUBLISH REACH SCORER</div>
              <div className="moat-body">
                <p>
                  Every other LinkedIn analytics tool shows you data after your post has already failed.
                </p>
                <div className="moat-divider">
                  <p>
                    IDEN scores your post <span className="highlight">BEFORE you publish.</span> 5 algorithm signals. Specific rewrites. Best posting time.
                  </p>
                </div>
                <p>
                  No other LinkedIn tool does pre-publish optimisation. This is not a feature. It is a different category.
                </p>
              </div>
            </div>
          </div>`;

// Replace the content inside the #moat section before the footnote
content = content.replace(/<span className="eyebrow">WHAT NO OTHER TOOL HAS BUILT<\/span>[\s\S]*?(?=<\p\n            className="legal-footnote reveal"|          <p\n            className="legal-footnote reveal")/m, newMoatGrid + '\n');

fs.writeFileSync('src/App.tsx', content);
