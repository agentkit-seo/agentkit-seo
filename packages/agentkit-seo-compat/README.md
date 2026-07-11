# AgentKit SEO compatibility package

AgentKit SEO is now **VitaeContext**.

This package keeps the former command working while users migrate:

```bash
npx agentkit-seo version
```

New installations should use the canonical package and command:

```bash
npm install -g vitaecontext
vitaecontext version
```

The compatibility command prints a deprecation warning, forwards all arguments to the installed VitaeContext CLI, and returns its exit status.

- [VitaeContext on npm](https://www.npmjs.com/package/vitaecontext)
- [VitaeContext repository](https://github.com/vitaecontext/vitaecontext)
- [Migration documentation](https://github.com/vitaecontext/vitaecontext#why-vitaecontext)
