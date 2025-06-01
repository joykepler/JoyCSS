const fs = require('fs');
const path = require('path');

console.log('🚀 Iniciando build do Joy.css...');

// CSS files
const cssFiles = [
  'base.css',
  'layout.css', 
  'spacing.css',
  'colors.css',
  'sizing.css',
  'utilities.css'
];

let joyCSSComplete = '';

cssFiles.forEach(file => {
  console.log(`📖 Lendo ${file}...`);
  
  const filePath = path.join('src', file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  joyCSSComplete += `/* ===== ${file} ===== */\n`;
  joyCSSComplete += content;
  joyCSSComplete += '\n\n';
});

if (!fs.existsSync('dist')) {
  console.log('📁 Criando pasta dist...');
  fs.mkdirSync('dist');
}

fs.writeFileSync('dist/joy.css', joyCSSComplete);

fs.copyFileSync('joy-dynamic.js', 'dist/joy-dynamic.js');

console.log('✅ Joy.css criado com sucesso!');
console.log('✅ joy-dynamic.js copiado!');
console.log('📄 Arquivos salvos em: dist/');
console.log('🎉 Agora você pode usar valores dinâmicos!');