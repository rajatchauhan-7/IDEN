import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf8');

const toolsContent = `<div className="tools-grid reveal">
            {/* Tool 1 */}
            <div className="tool-card">
              <span className="tool-icon" style={{ fontSize: "32px", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent" }}>
                <Fingerprint strokeWidth={2} style={{ width: "32px", height: "32px", color: "var(--lime)" }} />
              </span>
              <div className="tool-name">Identity Engine</div>
              <p className="tool-desc">
                <em style={{color: "var(--lime)", display: "block", marginBottom: "8px"}}>Know exactly who you are on LinkedIn before you write a word.</em>
                Deep-scan any LinkedIn profile. Get your real voice, expertise domains, positioning gaps, and a clear brand direction.<br />
                Analyse yourself, study a competitor, or discover your identity from scratch with 5 questions. The question every other tool skips.
              </p>
            </div>
            
            {/* Tool 2 */}
            <div className="tool-card">
              <span className="tool-icon" style={{ fontSize: "32px", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent" }}>
                <Dna strokeWidth={2} style={{ width: "32px", height: "32px", color: "var(--lime)" }} />
              </span>
              <div className="tool-name">Voice DNA + Lock</div>
              <p className="tool-desc">
                <em style={{color: "var(--lime)", display: "block", marginBottom: "8px"}}>The last time your posts will sound like someone else wrote them.</em>
                Paste 3 to 5 of your best posts. IDEN extracts what makes your writing distinctly yours and locks it permanently. Every tool writes like you from that point forward. Automatically. Forever.<br />
                This is the LinkedIn AI writing tool that actually sounds like you.
              </p>
            </div>
            
            {/* Tool 3 */}
            <div className="tool-card">
              <span className="tool-icon" style={{ fontSize: "32px", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent" }}>
                <CalendarDays strokeWidth={2} style={{ width: "32px", height: "32px", color: "var(--lime)" }} />
              </span>
              <div className="tool-name">Weekly Planner</div>
              <p className="tool-desc">
                <em style={{color: "var(--lime)", display: "block", marginBottom: "8px"}}>Never stare at a blank screen on Sunday night again.</em>
                5 specific post ideas built from your brand pillars, with the hook already written. Click any idea to send it straight to Post Studio. Your entire week of LinkedIn content planned in under 2 minutes.
              </p>
            </div>
            
            {/* Tool 4 */}
            <div className="tool-card">
              <span className="tool-icon" style={{ fontSize: "32px", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent" }}>
                <PenLine strokeWidth={2} style={{ width: "32px", height: "32px", color: "var(--lime)" }} />
              </span>
              <div className="tool-name">Post Studio</div>
              <p className="tool-desc">
                <em style={{color: "var(--lime)", display: "block", marginBottom: "8px"}}>Posts that read back and feel like you actually wrote them.</em>
                8 formats: single post, thread, story, data post, contrarian take, lessons learned, case study, hot take. Your locked voice applied automatically. Live character counter. First comment generated for you. The most complete LinkedIn post generator available.
              </p>
            </div>
            
            {/* Tool 5 */}
            <div className="tool-card">
              <span className="tool-icon" style={{ fontSize: "32px", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent" }}>
                <Recycle strokeWidth={2} style={{ width: "32px", height: "32px", color: "var(--lime)" }} />
              </span>
              <div className="tool-name">Repurpose Engine</div>
              <p className="tool-desc">
                <em style={{color: "var(--lime)", display: "block", marginBottom: "8px"}}>Your best content is already written. It is just in the wrong format.</em>
                Paste any blog post, video script, newsletter, or transcript.<br />
                IDEN transforms it into LinkedIn-ready content in your locked voice.<br />
                The insight you spent hours writing becomes a post in 3 minutes.
              </p>
            </div>
            
            {/* Tool 6 */}
            <div className="tool-card">
              <span className="tool-icon" style={{ fontSize: "32px", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent" }}>
                <LayoutTemplate strokeWidth={2} style={{ width: "32px", height: "32px", color: "var(--lime)" }} />
              </span>
              <div className="tool-name">Carousel Builder</div>
              <p className="tool-desc">
                <em style={{color: "var(--lime)", display: "block", marginBottom: "8px"}}>The highest-engagement LinkedIn format. Scripted. Downloaded. Done.</em>
                Full slide-by-slide scripts with visual direction. Live slide preview in your brand colours. One-click PDF download ready to upload to LinkedIn as a Document post. No Canva required.<br />
                LinkedIn carousels drive 6.6% average engagement, the highest of any format.
              </p>
            </div>
            
            {/* Tool 7 */}
            <div className="tool-card">
              <span className="tool-icon" style={{ fontSize: "32px", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent" }}>
                <Clapperboard strokeWidth={2} style={{ width: "32px", height: "32px", color: "var(--lime)" }} />
              </span>
              <div className="tool-name">Video Script</div>
              <p className="tool-desc">
                <em style={{color: "var(--lime)", display: "block", marginBottom: "8px"}}>More reach. Less time figuring out what to say.</em>
                60-second LinkedIn native video scripts with your brand visible in the first 4 seconds. Five-section structure with on-screen text direction. Caption, thumbnail guidance, and first comment included. Ready to record.
              </p>
            </div>
            
            {/* Tool 8 */}
            <div className="tool-card">
              <span className="tool-icon" style={{ fontSize: "32px", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent" }}>
                <TrendingUp strokeWidth={2} style={{ width: "32px", height: "32px", color: "var(--lime)" }} />
              </span>
              <div className="tool-name">Reach Scorer</div>
              <p className="tool-desc">
                <em style={{color: "var(--lime)", display: "block", marginBottom: "8px"}}>Know if your post will land before 200 people scroll past it.</em>
                Paste any draft. IDEN scores it on 5 signals the LinkedIn algorithm currently rewards. Rewrites the weak parts. Recommends the best posting time. The only LinkedIn post scorer that works before you publish, not after you fail.*
              </p>
            </div>
            
            {/* Tool 9 */}
            <div className="tool-card">
              <span className="tool-icon" style={{ fontSize: "32px", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent" }}>
                <Compass strokeWidth={2} style={{ width: "32px", height: "32px", color: "var(--lime)" }} />
              </span>
              <div className="tool-name">Brand OS</div>
              <p className="tool-desc">
                <em style={{color: "var(--lime)", display: "block", marginBottom: "8px"}}>The brand strategy system you should have built before your first post.</em>
                10 sections: positioning, content pillars, voice guidelines, headline formula, About section, visual identity, and a 30-day growth plan. Built around your specific background and goals. What LinkedIn brand strategy consultants charge thousands for, built in 3 minutes.
              </p>
            </div>
          </div>
          
          <div style={{ maxWidth: "1200px", margin: "20px auto 0", padding: "0 60px", fontSize: "12px", color: "var(--muted)", fontStyle: "italic", opacity: 0.7 }}>
            * The Reach Scorer analyses your draft against known engagement patterns and algorithmic signals. It does not guarantee reach, impressions, or follower growth. LinkedIn's algorithm changes without notice and IDEN cannot control distribution outcomes.
          </div>
          
          {/* THE MOAT MOVED HERE BECAUSE I REPLACED IT BY MISTAKE! */}
          <div style={{ marginTop: "100px" }}>
            <span className="eyebrow">WHAT NO OTHER TOOL HAS BUILT</span>
            <h2 className="section-headline reveal" style={{ marginTop: "16px" }}>
              How Is IDEN Different from Taplio, SuperGrow, and Other LinkedIn Tools?
            </h2>
            <p className="reveal" style={{ fontSize: "1.2rem", maxWidth: "800px", marginBottom: "48px", color: "var(--body)" }}>
              Every LinkedIn AI tool generates content.<br />
              IDEN builds identity first, then generates content.<br />
              That one difference changes everything that follows.
            </p>
            
            <div className="moat-grid reveal">
              <div className="moat-card">
                <div className="moat-label">PIONEER FEATURE 01</div>
                <div className="moat-title">VOICE DNA LOCK</div>
                <div className="moat-body">
                  <p>Other tools learn your style gradually over weeks of posting.<br />Some train on generic viral content that has nothing to do with you.</p>
                  <p>The result: posts that sound professional but could have been written by anyone. Because they were trained on anyone.</p>
                  <p>IDEN extracts your forensic writing fingerprint in one session from 3 to 5 of your own posts. Locked permanently. Applied automatically to every tool, every time, forever.</p>
                  <strong style={{color:"var(--headline)"}}>One session. Your voice. Yours.</strong>
                </div>
              </div>
              
              <div className="moat-card">
                <div className="moat-label">PIONEER FEATURE 02</div>
                <div className="moat-title">IDENTITY ENGINE</div>
                <div className="moat-body">
                  <p>Every LinkedIn tool starts with: "What do you want to write?"</p>
                  <p>That question assumes you already know your brand.<br />Most founders do not. Not clearly. Not specifically.</p>
                  <p>IDEN asks first: "Who are you?"</p>
                  <p>The Identity Engine deep-scans your profile, extracts your genuine expertise, maps your positioning gaps, and builds your brand direction before a single word is generated.</p>
                  <strong style={{color:"var(--headline)"}}>Content without identity is noise.<br />IDEN generates signal.</strong>
                </div>
              </div>
              
              <div className="moat-card">
                <div className="moat-label">PIONEER FEATURE 03</div>
                <div className="moat-title">BRAND OS</div>
                <div className="moat-body">
                  <p>80% of founders on LinkedIn post without a brand strategy.<br />They post consistently. Nothing compounds. They wonder why.</p>
                  <p>The answer is not more content.<br />The answer is the system that should have come first.</p>
                  <p>IDEN's Brand OS gives you that system before the first post: positioning, pillars, voice, headline formula, About section, and a 30-day plan - calibrated to your specific background in 3 minutes.</p>
                  <strong style={{color:"var(--headline)"}}>Not a template filled in with your name.<br />Your strategy. Built from who you actually are.</strong>
                </div>
              </div>
              
              <div className="moat-card">
                <div className="moat-label">PIONEER FEATURE 04</div>
                <div className="moat-title">PRE-PUBLISH REACH SCORER</div>
                <div className="moat-body">
                  <p>Every other LinkedIn analytics tool shows you data after your post has already failed.</p>
                  <p>You see the 47 impressions. You wonder what went wrong.<br />By then it is too late.</p>
                  <p>IDEN scores your post before you publish.<br />5 algorithm signals. Specific rewrites. Best posting time.</p>
                  <strong style={{color:"var(--headline)"}}>No other LinkedIn tool does pre-publish optimisation.<br />This is not a feature. It is a different category entirely.</strong>
                </div>
              </div>
            </div>
          </div>
        </section>`;

content = content.replace(
  /<div className="moat-card">[\s\S]*?<\/section>/,
  toolsContent
);

fs.writeFileSync('src/App.tsx', content);
