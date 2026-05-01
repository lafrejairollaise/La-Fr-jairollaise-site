const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// remove video recap section
code = code.replace(/\{\/\* Video Recap 2026 Section \*\/\}[\s\S]*?(?=\{\/\* 10 Years Section \*\/\})/g, '');

// remove news section
code = code.replace(/\{\/\* News Section \*\/\}[\s\S]*?(?=\{\/\* Retrospective Section \*\/\})/g, '');

// remove faq section
code = code.replace(/\{\/\* FAQ Section \*\/\}[\s\S]*?(?=\{\/\* Sponsors Marquee \*\/\})/g, '');

fs.writeFileSync('src/App.tsx', code);
