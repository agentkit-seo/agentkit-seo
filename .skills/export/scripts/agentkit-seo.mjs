#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

function usage() {
  console.log(`AgentKit SEO CLI

Usage:
  agentkit-seo export --provider <provider|all> --output <dir> [--force]
  agentkit-seo install --provider <provider> --project-root <dir> [--force]
  agentkit-seo install --provider shared --target-dir <dir> [--force]
  agentkit-seo list providers
  agentkit-seo list skills
`);
}

function parseFlags(args) {
  const flags = {};

  for (let index = 0; index < args.length; index += 1) {
    const token = args[index];
    if (!token.startsWith("--")) {
      throw new Error(`Unexpected argument: ${token}`);
    }
    const key = token.slice(2);
    if (key === "force") {
      flags.force = true;
      continue;
    }
    const value = args[index + 1];
    if (!value || value.startsWith("--")) {
      throw new Error(`Missing value for flag: ${token}`);
    }
    flags[key] = value;
    index += 1;
  }

  return flags;
}

function repoRootFromScript() {
  const scriptPath = fileURLToPath(import.meta.url);
  return path.resolve(path.dirname(scriptPath), "..", "..", "..");
}

function loadConfig(repoRoot) {
  const configPath = path.join(repoRoot, ".skills", "export", "export-config.json");
  return JSON.parse(fs.readFileSync(configPath, "utf8"));
}

function ensureCleanDirectory(targetPath, force) {
  if (fs.existsSync(targetPath)) {
    if (!force) {
      throw new Error(`Export target already exists: ${targetPath}. Use --force to replace it.`);
    }
    fs.rmSync(targetPath, { recursive: true, force: true });
  }
  fs.mkdirSync(targetPath, { recursive: true });
}

function removeIfExists(targetPath) {
  if (fs.existsSync(targetPath)) {
    fs.rmSync(targetPath, { recursive: true, force: true });
  }
}

function copySkillFolders(repoRoot, skills, targetRoot) {
  const exported = [];

  for (const skill of skills) {
    const source = path.join(repoRoot, skill.source);
    const destination = path.join(targetRoot, skill.name);
    if (!fs.existsSync(source)) {
      throw new Error(`Skill source does not exist: ${source}`);
    }
    fs.cpSync(source, destination, { recursive: true });
    exported.push(skill.name);
  }

  return exported;
}

function installSkillFolders(repoRoot, skills, targetRoot, force) {
  const installed = [];

  fs.mkdirSync(targetRoot, { recursive: true });

  for (const skill of skills) {
    const source = path.join(repoRoot, skill.source);
    const destination = path.join(targetRoot, skill.name);
    if (!fs.existsSync(source)) {
      throw new Error(`Skill source does not exist: ${source}`);
    }
    if (fs.existsSync(destination)) {
      if (!force) {
        throw new Error(
          `Install target already exists: ${destination}. Use --force to replace AgentKit SEO skill folders.`
        );
      }
      removeIfExists(destination);
    }
    fs.cpSync(source, destination, { recursive: true });
    installed.push(skill.name);
  }

  return installed;
}

function writeBundleManifest(bundleRoot, provider, config, exportedSkills) {
  const manifest = {
    package: config.package,
    provider,
    exported_at: new Date().toISOString(),
    skills: exportedSkills
  };
  const manifestPath = path.join(bundleRoot, "agentkit-seo-export.json");
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
}

function exportProvider(repoRoot, outputRoot, provider, config, force) {
  const providerSpec = config.providers[provider];
  const bundleRoot = path.join(outputRoot, provider);
  ensureCleanDirectory(bundleRoot, force);

  const targetRoot = path.join(bundleRoot, providerSpec.target);
  fs.mkdirSync(targetRoot, { recursive: true });

  const exportedSkills = copySkillFolders(repoRoot, config.skills, targetRoot);
  writeBundleManifest(bundleRoot, provider, config, exportedSkills);
}

function resolveInstallRoot(flags, providerSpec, provider) {
  if (provider === "shared") {
    if (!flags["target-dir"]) {
      throw new Error(
        "Shared installs require --target-dir because there is no single default workspace location."
      );
    }
    return path.resolve(flags["target-dir"]);
  }

  if (!flags["project-root"]) {
    throw new Error(
      `Provider '${provider}' installs require --project-root so the CLI knows where to place ${providerSpec.target}.`
    );
  }

  return path.resolve(flags["project-root"], providerSpec.target);
}

function installProvider(repoRoot, provider, config, flags) {
  const providerSpec = config.providers[provider];
  const targetRoot = resolveInstallRoot(flags, providerSpec, provider);
  const installedSkills = installSkillFolders(
    repoRoot,
    config.skills,
    targetRoot,
    Boolean(flags.force)
  );

  console.log(`Installed ${installedSkills.length} skill folder(s) for ${provider}`);
  console.log(`- target: ${targetRoot}`);
}

function listProviders(config) {
  for (const provider of Object.keys(config.providers).sort()) {
    console.log(provider);
  }
}

function listSkills(config) {
  for (const skill of config.skills) {
    console.log(skill.name);
  }
}

function run() {
  const [, , command, ...rest] = process.argv;
  if (!command || command === "help" || command === "--help" || command === "-h") {
    usage();
    return;
  }

  const repoRoot = repoRootFromScript();
  const config = loadConfig(repoRoot);

  if (command === "list") {
    const subject = rest[0];
    if (subject === "providers") {
      listProviders(config);
      return;
    }
    if (subject === "skills") {
      listSkills(config);
      return;
    }
    throw new Error("Usage: agentkit-seo list providers|skills");
  }

  if (command === "install") {
    const flags = parseFlags(rest);
    if (!flags.provider) {
      throw new Error(
        "Usage: agentkit-seo install --provider <provider> --project-root <dir> [--force]"
      );
    }
    if (flags.provider === "all") {
      throw new Error("Install accepts one provider at a time so destinations stay explicit.");
    }
    if (!config.providers[flags.provider]) {
      const available = Object.keys(config.providers).sort().join(", ");
      throw new Error(`Unknown provider '${flags.provider}'. Available: ${available}`);
    }
    installProvider(repoRoot, flags.provider, config, flags);
    return;
  }

  if (command !== "export") {
    throw new Error(`Unknown command: ${command}`);
  }

  const flags = parseFlags(rest);
  if (!flags.provider || !flags.output) {
    throw new Error("Usage: agentkit-seo export --provider <provider|all> --output <dir> [--force]");
  }

  const providers = config.providers;
  const selected =
    flags.provider === "all"
      ? Object.keys(providers)
      : [flags.provider];

  for (const provider of selected) {
    if (!providers[provider]) {
      const available = [...Object.keys(providers).sort(), "all"].join(", ");
      throw new Error(`Unknown provider '${provider}'. Available: ${available}`);
    }
  }

  const outputRoot = path.resolve(flags.output);
  fs.mkdirSync(outputRoot, { recursive: true });

  for (const provider of selected) {
    exportProvider(repoRoot, outputRoot, provider, config, Boolean(flags.force));
  }

  console.log(`Exported ${selected.length} provider bundle(s) to ${outputRoot}`);
  for (const provider of selected) {
    console.log(`- ${provider}: ${path.join(outputRoot, provider)}`);
  }
}

try {
  run();
} catch (error) {
  console.error(`error: ${error.message}`);
  process.exit(1);
}
