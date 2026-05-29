import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf8');

// I will fix the closing div mismatch.
content = content.replace(
  /            <\/div>\n          <\/div>\n        <\/section>/,
  `            </div>
          </div>
        </div>
      </section>`
);

fs.writeFileSync('src/App.tsx', content);
