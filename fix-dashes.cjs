const fs = require('fs');
const appTsx = fs.readFileSync('src/App.tsx', 'utf-8');
fs.writeFileSync('src/App.tsx', appTsx.replaceAll('—', '-'));
