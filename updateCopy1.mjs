import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace("LinkedIn AI Tool for Founders, Creators and Ghostwriters", "For founders who are done sounding like everyone else on LinkedIn.");

content = content.replace(
  /<TypewriterText text="THAT BUILDS YOUR IDENTITY" delay=\{1\.4\} \/>\s*<\/span>\s*<span style=\{\{ display: "block", whiteSpace: "nowrap" \}\}>\s*<TypewriterText text="BEFORE WRITING A SINGLE WORD" id="remove-me-2" delay=\{2\.3\} \/>\s*<\/span>/m,
  '<TypewriterText text="THAT FINALLY SOUNDS LIKE YOU." delay={2.3} />\n            </span>'
);

// I will just use simpler replacers
fs.writeFileSync('src/App.tsx', content);
