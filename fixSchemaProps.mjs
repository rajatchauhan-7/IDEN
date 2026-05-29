import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf8');
content = content.replace(/itemprop/g, 'itemProp');
content = content.replace(/itemscope/g, 'itemScope');
content = content.replace(/itemtype/g, 'itemType');
fs.writeFileSync('src/App.tsx', content);
