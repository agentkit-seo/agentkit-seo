#!/usr/bin/env node

import path from "node:path";
import process from "node:process";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const packageRoot = path.dirname(
  fileURLToPath(import.meta.resolve("vitaecontext/package.json"))
);
const cliPath = path.join(
  packageRoot,
  ".skills",
  "export",
  "scripts",
  "vitaecontext.mjs"
);

console.error(
  "warning: 'agentkit-seo' has been renamed to 'vitaecontext'; this compatibility command forwards to VitaeContext."
);

const result = spawnSync(process.execPath, [cliPath, ...process.argv.slice(2)], {
  stdio: "inherit"
});

if (result.error) {
  console.error(`error: unable to start VitaeContext: ${result.error.message}`);
  process.exit(1);
}

if (result.signal) {
  process.kill(process.pid, result.signal);
}

process.exit(result.status ?? 1);
