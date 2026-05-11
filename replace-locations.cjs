const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      content = content.replace(/Salem/g, 'Coimbatore');
      content = content.replace(/Attur/g, 'Tirupur');
      content = content.replace(/Mettur/g, 'Pollachi');
      content = content.replace(/Omalur/g, 'Mettupalayam');
      fs.writeFileSync(fullPath, content);
    }
  }
}

replaceInDir('./src');
console.log('Replacements completed.');
