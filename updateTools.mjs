import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// I'll extract the Tools section out of App.tsx and replace it.
// The tools section in App.tsx starts at `<section id="tools">` and goes until `</section>` (the one containing moat is next).
const newToolsGrid = `
          <div className="tools-grid">
            <div className="tool-card">
              <span className="tool-icon" style={{ fontSize: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent' }}>🔍</span>
              <div className="tool-name">Identity Engine</div>
              <p className="tool-desc">
                <em>Know exactly who you are on LinkedIn before you write a word.</em><br/><br/>
                Deep-scan any LinkedIn profile. Get your real voice, expertise domains, positioning gaps, and a clear brand direction. Analyse yourself, study a competitor, or discover your identity from scratch with 5 questions.
              </p>
            </div>
            <div className="tool-card">
              <span className="tool-icon" style={{ fontSize: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent' }}>🧬</span>
              <div className="tool-name">Voice DNA + Lock</div>
              <p className="tool-desc">
                <em>Your writing fingerprint. Extracted. Locked. Applied everywhere.</em><br/><br/>
                Paste 3 to 5 of your best posts. IDEN extracts what makes your writing distinctly yours and locks it. Every tool writes like you from that point forward. Automatically. This is the LinkedIn AI writing tool that actually sounds like you.
              </p>
            </div>
            <div className="tool-card">
              <span className="tool-icon" style={{ fontSize: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent' }}>🗓️</span>
              <div className="tool-name">Weekly Planner</div>
              <p className="tool-desc">
                <em>Never stare at a blank screen on Sunday night again.</em><br/><br/>
                5 specific post ideas built from your brand pillars, with the hook already written. Click any idea to send it straight to Post Studio. Weekly LinkedIn content planning in under 2 minutes.
              </p>
            </div>
            <div className="tool-card">
              <span className="tool-icon" style={{ fontSize: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent' }}>✍️</span>
              <div className="tool-name">Post Studio</div>
              <p className="tool-desc">
                <em>LinkedIn posts in 8 formats. All in your voice. All algorithm-aware.</em><br/><br/>
                Single post, thread, story, data post, contrarian take, lessons learned, case study, or hot take. Your locked voice applied automatically. Live character counter. First comment generated for you. The most complete LinkedIn post generator available.
              </p>
            </div>
            <div className="tool-card">
              <span className="tool-icon" style={{ fontSize: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent' }}>♻️</span>
              <div className="tool-name">Repurpose Engine <span className="tool-new">New</span></div>
              <p className="tool-desc">
                <em>Your best content is already written. It is just in the wrong format.</em><br/><br/>
                Paste any blog post, video script, newsletter, or transcript. IDEN transforms it into LinkedIn-ready content in your locked voice. The insight you spent hours writing becomes a post in 3 minutes.
              </p>
            </div>
            <div className="tool-card">
              <span className="tool-icon" style={{ fontSize: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent' }}>📊</span>
              <div className="tool-name">Carousel Builder</div>
              <p className="tool-desc">
                <em>The highest-engagement LinkedIn format, scripted and downloaded as PDF.</em><br/><br/>
                Full slide-by-slide scripts with visual direction. Live slide preview in your brand colours. One-click PDF download ready to upload to LinkedIn as a Document post. No Canva required. LinkedIn carousels drive 6.6% average engagement - the highest of any format.
              </p>
            </div>
            <div className="tool-card">
              <span className="tool-icon" style={{ fontSize: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent' }}>🎬</span>
              <div className="tool-name">Video Script</div>
              <p className="tool-desc">
                <em>More reach. Less time on camera.</em><br/><br/>
                60-second LinkedIn native video scripts with your brand visible in the first 4 seconds. Five-section structure with on-screen text direction. Caption, thumbnail guidance, and first comment included.
              </p>
            </div>
            <div className="tool-card">
              <span className="tool-icon" style={{ fontSize: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent' }}>📈</span>
              <div className="tool-name">Reach Scorer</div>
              <p className="tool-desc">
                <em>Know if your post will perform before you hit publish.</em><br/><br/>
                Paste any draft. IDEN scores it on 5 signals the LinkedIn algorithm currently rewards. Rewrites the weak parts. Recommends the best posting time. The only LinkedIn post scorer that works before you publish, not after.*
              </p>
            </div>
            <div className="tool-card">
              <span className="tool-icon" style={{ fontSize: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent' }}>🌐</span>
              <div className="tool-name">Brand OS</div>
              <p className="tool-desc">
                <em>The brand strategy system you should have built before your first post.</em><br/><br/>
                10 sections: positioning, content pillars, voice guidelines, headline formula, About section, visual identity, and a 30-day growth plan. Built around your specific background and goals. What LinkedIn brand strategy consultants charge thousands for.
              </p>
            </div>
          </div>
          {/* AI disclaimer */}
          <div
            className="ai-disclaimer"
            style={{
              margin: "20px 0 0",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div style={{ display: "flex" }}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ flexShrink: 0, marginTop: "1px" }}
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span style={{ marginLeft: "8px" }}>
                AI-generated content does not guarantee viral reach or any
                specific outcome. Results vary by profile, audience, and
                LinkedIn's algorithm.
              </span>
            </div>
            <p
              className="legal-footnote"
              style={{
                fontSize: "11px",
                color: "var(--muted)",
                marginTop: "8px",
              }}
            >
              * The Reach Scorer analyses your draft against known engagement patterns and algorithmic signals. It does not guarantee reach, impressions, or follower growth. LinkedIn's algorithm changes without notice and IDEN cannot control distribution outcomes.
            </p>
          </div>
`;

// regex to find tools-grid up to tools-grid's end and ai-disclaimer
const newString = content.replace(/<div className="tools-grid">[\s\S]*?(?=<\/div>\n      <\/section>\n\n      {\/\* MOAT \*\/})/m, newToolsGrid);

fs.writeFileSync('src/App.tsx', newString);
