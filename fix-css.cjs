const fs = require('fs');

const css = fs.readFileSync('src/index.css', 'utf-8');

const updated = css
  .replace(/opacity:\s*0;\s*\n\s*animation:\s*fadeUp[^;]+;/g, '')
  .replace(/margin-bottom:\s*28px;\s*\n\s*will-change:\s*transform;/g, 'margin-bottom: 28px;');

fs.writeFileSync('src/index.css', updated);
console.log('Done');
