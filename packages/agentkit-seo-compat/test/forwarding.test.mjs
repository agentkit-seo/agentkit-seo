import assert from "node:assert/strict";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import test from "node:test";

const packageRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  ".."
);
const cliPath = path.join(packageRoot, "bin", "agentkit-seo.mjs");

test("legacy command warns and forwards to VitaeContext", () => {
  const result = spawnSync(process.execPath, [cliPath, "version"], {
    encoding: "utf8"
  });

  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stderr, /renamed to 'vitaecontext'/);
  assert.match(result.stdout, /^vitaecontext 2\.0\.0/m);
});

test("legacy command preserves a failing exit status", () => {
  const result = spawnSync(process.execPath, [cliPath, "not-a-command"], {
    encoding: "utf8"
  });

  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /renamed to 'vitaecontext'/);
});
