import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

const newTypewriter = `function TypewriterText({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const words = text.split(" ");
  let charIndex = 0;
  return (
    <span className={className}>
      {words.map((word, wordIdx) => (
        <span key={wordIdx} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
          {Array.from(word).map((char, i) => {
            const currentIdx = charIndex++;
            return (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: delay + currentIdx * 0.015,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            );
          })}
          {wordIdx !== words.length - 1 && (
            <span style={{ display: "inline-block" }}>&nbsp;</span>
          )}
        </span>
      ))}
    </span>
  );
}`;

content = content.replace(/function TypewriterText\([\s\S]*?(?=function App\(\) {)/m, newTypewriter + '\n\n');

// Update font size clamp on hero title
content = content.replace(
  'fontSize: "clamp(44px, 7.5vw, 100px)",',
  'fontSize: "clamp(28px, 6vw, 90px)",'
);

fs.writeFileSync('src/App.tsx', content);
