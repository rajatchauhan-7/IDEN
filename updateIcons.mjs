import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Update strokeWidth directly
content = content.replace(/strokeWidth=\{1\}/g, "strokeWidth={2}");

fs.writeFileSync('src/App.tsx', content);
