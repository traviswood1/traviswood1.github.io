// Import the file system module
const fs = require('fs');
// Import the path module for handling file paths
const path = require('path');

// Get the path to the project root directory (one level up from the current script)
const projectDir = path.join(__dirname, '..');
// Set the path to the 'pages' directory within the project
const pagesDir = path.join(projectDir, 'pages');
// Set the path for the output file 'pages-content.js' in the 'scripts' directory
const outputFile = path.join(projectDir, 'scripts', 'pages-content.js');

// Initialize an empty object to store page contents
const pages = {};

// Read all files in the pages directory
fs.readdirSync(pagesDir).forEach(file => {
  // Check if the file has a .html extension
  if (file.endsWith('.html')) {
    // Get the filename without the .html extension
    const pageName = path.basename(file, '.html');
    // Read the content of the HTML file
    const content = fs.readFileSync(path.join(pagesDir, file), 'utf-8');
    // Store the content in the pages object, using the filename as the key
    pages[pageName] = content;
  }
});

// Create a string that assigns the pages object to window.pages in JavaScript format
const output = `window.pages = ${JSON.stringify(pages, null, 2)};`;

// Write the output string to the specified file
fs.writeFileSync(outputFile, output);

// Log a message indicating successful file generation
console.log('pages-content.js has been generated.');


