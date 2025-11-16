// #!/usr/bin/env node
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { execSync } from 'child_process';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const args = process.argv.slice(2);
// const command = args[0];
// const projectName = args[1] || 'meu-portfolio';

// if (command === 'create-app') {
//   const templateDir = path.resolve(__dirname, '../template');
//   const targetDir = path.resolve(process.cwd(), projectName);

//   if (fs.existsSync(targetDir)) {
//     console.error(`❌ A pasta "${projectName}" já existe.`);
//     process.exit(1);
//   }

//   fs.cpSync(templateDir, targetDir, { recursive: true });
//   console.log(`✅ Projeto criado em ./${projectName}`);

//   console.log('📦 Instalando dependências...');
//   execSync('npm install', { cwd: targetDir, stdio: 'inherit' });

//   console.log('🚀 Pronto! Use os comandos abaixo:');
//   console.log(`\n  cd ${projectName}`);
//   console.log('  npm run dev\n');
// } else {
//   console.log('Uso: notion-portfolio create-app [nome-do-projeto]');
// }
