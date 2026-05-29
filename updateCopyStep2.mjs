import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace("THE SUITE", "WHAT IS INSIDE IDEN");
content = content.replace(
  "9 Tools to Build Your Brand. 1 System to Run It.",
  "9 Tools. One System. Every Part of Your LinkedIn Brand, Covered."
);
content = content.replace(
  /<div className="tools-header">[\s\S]*?<p>[\s\S]*?<\/div>\s*<\/div>/,
  `<div className="tools-header">
            <div>
              <span className="eyebrow">WHAT IS INSIDE IDEN</span>
              <h2 className="section-headline reveal">
                9 Tools. One System. Every Part of Your LinkedIn Brand, Covered.
              </h2>
            </div>
            <p>
              Everything a top personal brand consultant gives you.
              <br />
              AI-powered, calibrated to your voice, yours from day one.
              <br /><br />
              <em style={{ fontSize: "12px", opacity: 0.7 }}>AI-generated content does not guarantee viral reach or any specific outcome. Results vary by profile, audience, and LinkedIn's algorithm.</em>
            </p>
          </div>`
);

const replaceTool = (num, name, outcome, desc) => {
  const regex = new RegExp(`(<div className="tool-name">\\s*${name}[\\s\\S]*?<\\/div>\\s*<p className="tool-desc">)(?:[\\s\\S]*?)(<\\/p>)`);
  content = content.replace(regex, `$1\n                <em style={{color: "var(--lime)", display: "block", marginBottom: "8px"}}>${outcome}</em>\n                ${desc}\n              $2`);
};

replaceTool(
  "1",
  "Identity Engine",
  "Know exactly who you are on LinkedIn before you write a word.",
  "Deep-scan any LinkedIn profile. Get your real voice, expertise domains, positioning gaps, and a clear brand direction.<br />Analyse yourself, study a competitor, or discover your identity from scratch with 5 questions. The question every other tool skips."
);

// Voice DNA + Lock
replaceTool(
  "2",
  "Voice DNA \\+ Lock",
  "The last time your posts will sound like someone else wrote them.",
  "Paste 3 to 5 of your best posts. IDEN extracts what makes your writing distinctly yours and locks it permanently. Every tool writes like you from that point forward. Automatically. Forever.<br />This is the LinkedIn AI writing tool that actually sounds like you."
);

// Weekly Planner
replaceTool(
  "3",
  "Weekly Planner",
  "Never stare at a blank screen on Sunday night again.",
  "5 specific post ideas built from your brand pillars, with the hook already written. Click any idea to send it straight to Post Studio. Your entire week of LinkedIn content planned in under 2 minutes."
);

// Post Studio
replaceTool(
  "4",
  "Post Studio",
  "Posts that read back and feel like you actually wrote them.",
  "8 formats: single post, thread, story, data post, contrarian take, lessons learned, case study, hot take. Your locked voice applied automatically. Live character counter. First comment generated for you. The most complete LinkedIn post generator available."
);

// Repurpose Engine
replaceTool(
  "5",
  "Repurpose Engine(?:[\\s\\S]*?New<\\/span>)?",
  "Your best content is already written. It is just in the wrong format.",
  "Paste any blog post, video script, newsletter, or transcript.<br />IDEN transforms it into LinkedIn-ready content in your locked voice.<br />The insight you spent hours writing becomes a post in 3 minutes."
);

// Carousel Builder
replaceTool(
  "6",
  "Carousel Builder",
  "The highest-engagement LinkedIn format. Scripted. Downloaded. Done.",
  "Full slide-by-slide scripts with visual direction. Live slide preview in your brand colours. One-click PDF download ready to upload to LinkedIn as a Document post. No Canva required.<br />LinkedIn carousels drive 6.6% average engagement, the highest of any format."
);

// Video Script
replaceTool(
  "7",
  "Video Script",
  "More reach. Less time figuring out what to say.",
  "60-second LinkedIn native video scripts with your brand visible in the first 4 seconds. Five-section structure with on-screen text direction. Caption, thumbnail guidance, and first comment included. Ready to record."
);

// Reach Scorer
replaceTool(
  "8",
  "Reach Scorer",
  "Know if your post will land before 200 people scroll past it.",
  "Paste any draft. IDEN scores it on 5 signals the LinkedIn algorithm currently rewards. Rewrites the weak parts. Recommends the best posting time. The only LinkedIn post scorer that works before you publish, not after you fail.*"
);

// Brand OS
replaceTool(
  "9",
  "Brand OS",
  "The brand strategy system you should have built before your first post.",
  "10 sections: positioning, content pillars, voice guidelines, headline formula, About section, visual identity, and a 30-day growth plan. Built around your specific background and goals. What LinkedIn brand strategy consultants charge thousands for, built in 3 minutes."
);

// Add footnote below the tools grid
content = content.replace(
  /<div className="tools-grid reveal">[\s\S]*?<\/section>/,
  `$&`.replace(
    /<\/section>$/,
    `  <div style={{ maxWidth: "1200px", margin: "20px auto 0", padding: "0 60px", fontSize: "12px", color: "var(--muted)", fontStyle: "italic", opacity: 0.7 }}>
            * The Reach Scorer analyses your draft against known engagement patterns and algorithmic signals. It does not guarantee reach, impressions, or follower growth. LinkedIn's algorithm changes without notice and IDEN cannot control distribution outcomes.
          </div>
        </section>`
  )
);

fs.writeFileSync('src/App.tsx', content);
