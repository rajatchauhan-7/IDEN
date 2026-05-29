import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// SECTION 01 - NAVIGATION
content = content.replace(
  '<a href="#" className="nav-logo">',
  '<a href="#" className="nav-logo" aria-label="IDEN LinkedIn Personal Branding Tool - Home">'
);

content = content.replace(
  '<a href="/app" className="btn-primary">\n          Try Free - No Card Needed\n        </a>',
  '<a href="/app" className="btn-primary" aria-label="Start free trial - no credit card required">\n          Try Free - No Card Needed\n        </a>'
);

content = content.replace(
  'Try Free - No Card Needed\n        </a>\n      </div>\n\n      {/* HERO */}',
  'Try Free - No Card Needed\n        </a>\n      </div>\n\n      {/* HERO */}' // let's do this by hand if it's too complex.
);

fs.writeFileSync('src/App.tsx.temp', content);
