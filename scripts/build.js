const fs = require('fs');
const path = require('path');

const projectDir = path.join(__dirname, '..');
const pagesDir = path.join(projectDir, 'pages');
const outputFile = path.join(projectDir, 'scripts', 'pages-content.js');

const pages = {};

fs.readdirSync(pagesDir).forEach(file => {
  if (file.endsWith('.html')) {
    const pageName = path.basename(file, '.html');
    const content = fs.readFileSync(path.join(pagesDir, file), 'utf-8');
    pages[pageName] = content;
  }
});

const output = `window.pages = ${JSON.stringify(pages, null, 2)};`;

fs.writeFileSync(outputFile, output);

console.log('pages-content.js has been generated.');


