import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  /<div className="pain-body reveal">[\s\S]*?<\/div>\s*<div\s*className="pain-contrast reveal"[\s\S]*?>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/,
  `<div className="pain-body reveal">
              <p>
                You spent an hour on that post.<br/>
                You tweaked the hook four times.<br/>
                You asked ChatGPT to write in your style.
              </p>
              <p>
                It still sounded like someone else wrote it.
              </p>
              <p>
                Not because you cannot write.<br/>
                Because no tool has ever asked who you are<br/>
                before generating content for you.
              </p>
              <p>
                They all start the same way:<br/>
                "What do you want to write about today?"
              </p>
              <p>
                None of them ask:<br/>
                "Who are you?"
              </p>
              <p>
                That one question changes everything that follows.
              </p>
            </div>
            <div className="pain-contrast reveal">
              <p>Content gets consumed.<br/>A brand gets remembered.</p>
              <p style={{ marginTop: "24px" }}>Content builds followers.<br/>A brand builds opportunities.</p>
              <p style={{ marginTop: "24px" }}>Content expires in 48 hours.<br/>A brand compounds every time you show up.</p>
            </div>
          </div>
        </div>
      </section>`
);

fs.writeFileSync('src/App.tsx', content);
