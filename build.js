const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Build the Next.js project
console.log('Building Next.js project...');
execSync('npm run build', { stdio: 'inherit' });

// Create a copy of the out directory
const outDir = path.join(__dirname, 'out');
const publicDir = path.join(__dirname, 'public');

// Ensure the public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Copy the out directory contents to public using Windows commands
console.log('Copying build output to public directory...');
execSync(`xcopy /E /I /Y "${outDir}\\*" "${publicDir}"`, { stdio: 'inherit' });

// Create index.html in the root
console.log('Creating index.html in root...');
const indexContent = `<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="refresh" content="0;url=/hello" />
  </head>
  <body>
    <p>Redirecting to <a href="/hello">/hello</a>...</p>
  </body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'index.html'), indexContent);

console.log('Build process completed successfully!'); 