#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";
import chalk from "chalk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectName = process.argv[2] || "my-portfolio";

const templateDir = path.resolve(__dirname, "../template");
const targetDir = path.resolve(process.cwd(), projectName);

if (fs.existsSync(targetDir)) {
  console.error(`❌ Folder "${projectName}" already exists.`);
  process.exit(1);
}

fs.cpSync(templateDir, targetDir, { recursive: true });
console.log(`✅ Project created in ./${projectName}`);

console.log("📦 Installing dependencies...");
execSync(`npm install`, {
  cwd: targetDir,
  stdio: "inherit",
});

const installer = `npm link @lauravivan/notion-portfolio`;

execSync(installer, {
  cwd: targetDir,
  stdio: "inherit",
});

console.log("🚀 All ready! Run commands below:");
console.log(`\n  cd ${projectName}`);
console.log("  npm run dev\n");
