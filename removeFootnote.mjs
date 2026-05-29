import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

const regex = /          <p\n            className="legal-footnote reveal"\n            style={{\n              fontSize: "11px",\n              color: "var\(--muted\)",\n              marginTop: "32px",\n            }}\n          >\n            <sup>3<\/sup> "Pre-publish optimization" refers to IDEN's scoring of\n            draft content against publicly observable LinkedIn engagement\n            patterns\. IDEN does not have access to LinkedIn's proprietary\n            algorithm and cannot guarantee distribution outcomes\.\n          <\/p>\n/m;

content = content.replace(regex, '');

fs.writeFileSync('src/App.tsx', content);
