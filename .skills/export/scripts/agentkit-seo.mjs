#!/usr/bin/env node

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

function usage() {
  console.log(`AgentKit SEO CLI

Usage:
  agentkit-seo export --provider <provider|all> --output <dir> [--force]
  agentkit-seo install --provider <provider> [--project-root <dir>|--target-dir <dir>] [--commands-target-dir <dir>] [--force]
  agentkit-seo install --provider shared --target-dir <dir> [--force]
  agentkit-seo list providers
  agentkit-seo list skills
  agentkit-seo list commands --provider <provider>
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

function expandUserPath(targetPath) {
  if (targetPath === "~") {
    return os.homedir();
  }
  if (targetPath.startsWith("~/")) {
    return path.join(os.homedir(), targetPath.slice(2));
  }
  return targetPath;
}

function normalizeRelativePath(filePath) {
  return filePath.split(path.sep).join("/");
}

function shouldCopySkillPath(skillRoot, sourcePath, excludedPaths) {
  if (!excludedPaths || excludedPaths.length === 0) {
    return true;
  }

  const relativePath = normalizeRelativePath(path.relative(skillRoot, sourcePath));
  return !excludedPaths.some(
    (excludedPath) => relativePath === excludedPath || relativePath.startsWith(`${excludedPath}/`)
  );
}

function copySkillFolders(repoRoot, skills, targetRoot, excludedPaths = []) {
  const exported = [];

  for (const skill of skills) {
    const source = path.join(repoRoot, skill.source);
    const destination = path.join(targetRoot, skill.name);
    if (!fs.existsSync(source)) {
      throw new Error(`Skill source does not exist: ${source}`);
    }
    fs.cpSync(source, destination, {
      recursive: true,
      filter: (sourcePath) => shouldCopySkillPath(source, sourcePath, excludedPaths)
    });
    exported.push(skill.name);
  }

  return exported;
}

function copyProviderFiles(repoRoot, files, targetRoot, force) {
  const copied = [];

  if (!files || files.length === 0) {
    return copied;
  }

  fs.mkdirSync(targetRoot, { recursive: true });

  for (const file of files) {
    const source = path.join(repoRoot, file.source);
    const destination = path.join(targetRoot, file.target ?? path.basename(file.source));
    if (!fs.existsSync(source)) {
      throw new Error(`Provider file source does not exist: ${source}`);
    }
    if (fs.existsSync(destination)) {
      if (!force) {
        throw new Error(
          `Provider file target already exists: ${destination}. Use --force to replace AgentKit SEO provider files.`
        );
      }
      removeIfExists(destination);
    }
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.cpSync(source, destination, { recursive: true });
    copied.push(path.relative(targetRoot, destination));
  }

  return copied;
}

function copyCommandFiles(repoRoot, commands, targetRoot, force) {
  const copied = [];

  if (!commands || commands.length === 0) {
    return copied;
  }

  fs.mkdirSync(targetRoot, { recursive: true });

  for (const command of commands) {
    const source = path.join(repoRoot, command.source);
    const destination = path.join(targetRoot, path.basename(command.source));
    if (!fs.existsSync(source)) {
      throw new Error(`Command source does not exist: ${source}`);
    }
    if (fs.existsSync(destination)) {
      if (!force) {
        throw new Error(
          `Command target already exists: ${destination}. Use --force to replace AgentKit SEO command files.`
        );
      }
      removeIfExists(destination);
    }
    fs.cpSync(source, destination);
    copied.push(command.name);
  }

  return copied;
}

function installSkillFolders(repoRoot, skills, targetRoot, force, excludedPaths = []) {
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
    fs.cpSync(source, destination, {
      recursive: true,
      filter: (sourcePath) => shouldCopySkillPath(source, sourcePath, excludedPaths)
    });
    installed.push(skill.name);
  }

  return installed;
}

function writeBundleManifest(bundleRoot, provider, config, exportedSkills) {
  const providerSpec = config.providers[provider];
  const manifest = {
    package: config.package,
    provider,
    exported_at: new Date().toISOString(),
    skills: exportedSkills,
    commands: providerSpec.commands?.map((command) => command.name) ?? [],
    layout: providerSpec.layout
  };
  const manifestPath = path.join(bundleRoot, "agentkit-seo-export.json");
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
}

function exportProvider(repoRoot, outputRoot, provider, config, force) {
  const providerSpec = config.providers[provider];
  const bundleRoot = path.join(outputRoot, provider);
  ensureCleanDirectory(bundleRoot, force);

  if (providerSpec.files) {
    copyProviderFiles(repoRoot, providerSpec.files, bundleRoot, force);
  }

  const skillTarget = providerSpec.skillTarget ?? ".";
  const targetRoot =
    providerSpec.layout === "gemini-extension"
      ? path.join(bundleRoot, skillTarget)
      : path.join(bundleRoot, providerSpec.target);
  fs.mkdirSync(targetRoot, { recursive: true });

  const exportedSkills = copySkillFolders(
    repoRoot,
    config.skills,
    targetRoot,
    providerSpec.skillExcludes
  );
  if (providerSpec.commandTarget && providerSpec.commands) {
    const commandRoot = path.join(bundleRoot, providerSpec.commandTarget);
    copyCommandFiles(repoRoot, providerSpec.commands, commandRoot, force);
  }
  writeBundleManifest(bundleRoot, provider, config, exportedSkills);
}

function resolveInstallRoot(flags, providerSpec, provider) {
  if (flags["target-dir"]) {
    return path.resolve(expandUserPath(flags["target-dir"]));
  }

  if (provider === "shared") {
    throw new Error(
      "Shared installs require --target-dir because there is no single default workspace location."
    );
  }

  if (flags["project-root"]) {
    return path.resolve(flags["project-root"], providerSpec.target);
  }

  if (providerSpec.homeEnv && process.env[providerSpec.homeEnv]) {
    return path.resolve(process.env[providerSpec.homeEnv], "skills");
  }

  if (providerSpec.globalTarget) {
    return path.resolve(expandUserPath(providerSpec.globalTarget));
  }

  throw new Error(
    `Provider '${provider}' installs require --project-root or --target-dir because no default target is configured.`
  );
}

function resolveCommandInstallRoot(flags, providerSpec) {
  if (!providerSpec.commandTarget || !providerSpec.commands) {
    return null;
  }

  if (flags["commands-target-dir"]) {
    return path.resolve(expandUserPath(flags["commands-target-dir"]));
  }

  if (flags["target-dir"]) {
    return null;
  }

  if (flags["project-root"]) {
    return path.resolve(flags["project-root"], providerSpec.commandTarget);
  }

  if (providerSpec.globalCommandTarget) {
    return path.resolve(expandUserPath(providerSpec.globalCommandTarget));
  }

  return null;
}

function installProvider(repoRoot, provider, config, flags) {
  const providerSpec = config.providers[provider];
  const targetRoot = resolveInstallRoot(flags, providerSpec, provider);
  if (providerSpec.files) {
    copyProviderFiles(repoRoot, providerSpec.files, targetRoot, Boolean(flags.force));
  }
  const skillTargetRoot =
    providerSpec.layout === "gemini-extension"
      ? path.join(targetRoot, providerSpec.skillTarget ?? "skills")
      : targetRoot;
  const installedSkills = installSkillFolders(
    repoRoot,
    config.skills,
    skillTargetRoot,
    Boolean(flags.force),
    providerSpec.skillExcludes
  );
  const commandTargetRoot =
    providerSpec.layout === "gemini-extension"
      ? path.join(targetRoot, providerSpec.commandTarget)
      : resolveCommandInstallRoot(flags, providerSpec);
  const installedCommands = commandTargetRoot
    ? copyCommandFiles(repoRoot, providerSpec.commands, commandTargetRoot, Boolean(flags.force))
    : [];

  console.log(`Installed ${installedSkills.length} skill folder(s) for ${provider}`);
  console.log(`- target: ${skillTargetRoot}`);
  if (installedCommands.length > 0) {
    console.log(`Installed ${installedCommands.length} command file(s) for ${provider}`);
    console.log(`- commands target: ${commandTargetRoot}`);
  }
  if (providerSpec.layout === "gemini-extension") {
    console.log(`- extension target: ${targetRoot}`);
  }
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

function listCommands(config, provider) {
  const providerSpec = config.providers[provider];
  if (!providerSpec) {
    const available = Object.keys(config.providers).sort().join(", ");
    throw new Error(`Unknown provider '${provider}'. Available: ${available}`);
  }
  for (const command of providerSpec.commands ?? []) {
    console.log(command.name);
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
    const flags = parseFlags(rest.slice(1));
    if (subject === "providers") {
      listProviders(config);
      return;
    }
    if (subject === "skills") {
      listSkills(config);
      return;
    }
    if (subject === "commands") {
      if (!flags.provider) {
        throw new Error("Usage: agentkit-seo list commands --provider <provider>");
      }
      listCommands(config, flags.provider);
      return;
    }
    throw new Error("Usage: agentkit-seo list providers|skills|commands --provider <provider>");
  }

  if (command === "install") {
    const flags = parseFlags(rest);
    if (!flags.provider) {
      throw new Error(
        "Usage: agentkit-seo install --provider <provider> [--project-root <dir>|--target-dir <dir>] [--commands-target-dir <dir>] [--force]"
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
