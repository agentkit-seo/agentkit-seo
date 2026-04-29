# AgentKit SEO npm publishing process

This maintainer runbook records the steps for publishing AgentKit SEO to npm as the public `agentkit-seo` package.

## Current package choice

The preferred package name is the unscoped package:

```text
agentkit-seo
```

This gives users the clean install command:

```bash
npx agentkit-seo install --provider codex
```

The package metadata should point to:

```text
https://github.com/agentkit-seo/agentkit-seo
```

## Before publishing

Confirm the package name is still available:

```bash
npm view agentkit-seo name version
```

If npm returns `E404`, the public package name is not currently occupied.

Confirm the local git remote points to the final repository:

```bash
git remote set-url origin https://github.com/agentkit-seo/agentkit-seo.git
git remote -v
```

Make the GitHub repository public before or soon after publishing. The npm package can be published from a private repository, but a public package that links to a private GitHub repo looks incomplete to users.

## Account setup

Log into npm:

```bash
npm login
npm whoami
```

Publishing requires either npm two-factor authentication or a granular publishing token with the right permissions.

## Version preparation

Before the first public publish, change `package.json` from the development version:

```json
"version": "0.1.0-dev"
```

to the first public version:

```json
"version": "0.1.0"
```

Do not republish the same version. Every npm publish needs a new version number.

## Prepublish checks

Run the local checks:

```bash
npm run list:skills
npm run list:providers
node .skills/export/scripts/agentkit-seo.mjs export --provider all --output /tmp/agentkit-seo-review-export --force
npm --cache /tmp/npm-cache pack --dry-run
```

Create a real local tarball and test the installed CLI:

```bash
npm --cache /tmp/npm-cache pack --pack-destination /tmp
npm --cache /tmp/npm-cache exec --package /tmp/agentkit-seo-0.1.0.tgz -- agentkit-seo list skills
npm --cache /tmp/npm-cache exec --package /tmp/agentkit-seo-0.1.0.tgz -- agentkit-seo list providers
npm --cache /tmp/npm-cache exec --package /tmp/agentkit-seo-0.1.0.tgz -- agentkit-seo install --provider codex --target-dir /tmp/agentkit-seo-npm-codex-install --force
```

Adjust the tarball filename if the version is not `0.1.0`.

## Publish

For the unscoped public package:

```bash
npm publish
```

After publishing, verify the package page:

```text
https://www.npmjs.com/package/agentkit-seo
```

Then test the public package:

```bash
npx agentkit-seo list skills
npx agentkit-seo list providers
```

## Add the second maintainer

One person can publish the first version, then add the second maintainer as an npm owner:

```bash
npm owner add <other-npm-username> agentkit-seo
npm owner ls agentkit-seo
```

An npm package owner can publish new versions, modify package metadata, and add or remove other owners. Use this only for trusted maintainers.

## Scoped organization alternative

If the project later moves to an npm organization package, the package name would become:

```json
"name": "@agentkit-seo/agentkit-seo"
```

The publish command would become:

```bash
npm publish --access public
```

The user command would also change:

```bash
npx @agentkit-seo/agentkit-seo
```

For the first launch, the unscoped package is preferred because it gives the cleanest command.
