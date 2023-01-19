# @currents/cli

<p align="center">
Integrate Cypress with <a href="https://currents.dev/?utm_source=currents_cli">Currents</a> - a drop-in replacement for Cypress Cloud
</p>

<p align="center">
  <img width="830" src="https://user-images.githubusercontent.com/1637928/213367982-78987b7a-411a-4d2e-9486-ca204847022e.png" />
</p>

<p align="center">
<a href="https://currents.dev?utm_source=currents_cli">Currents</a> | <a href="./CHANGELOG.md">Changelog</a> | <a href="https://currents.dev/readme/guides/cypress-compatibility">Compatibility</a> |
<a href="https://currents.dev/readme/guides/currents-cli">Documentation</a>
</p>

---

## CLI Usage

Use Currents as an orchestration and recording service. The command passes down all the CLI flags to cypress and executes cypress behind the scenes.

```sh
npm install @currents/cli cypress
npx currents run --parallel --record --key XXXXXX --ci-build-id build-001
```

## API

### `run`

Run Cypress via its [Module API](https://docs.cypress.io/guides/guides/module-api)

```ts
run(config: CypressCommandLine.CypressRunOptions): Promise<CypressCommandLine.CypressRunResult | CypressCommandLine.CypressFailedRunResult>
```

Example:

```ts
import { run } from "@currents/cli";

const cypressOptions: Partial<CypressCommandLine.CypressRunOptions> = {
  browser: "chrome",
  parallel: true,
  record: true,
  key: "Currents key from https://app.currents.dev",
  tag: "smoke",
};
const results = await run(cypressOptions);
```

### `spawn`

Spawn Cypress as a child process and inherit all the flags and environment variables. It invokes `process.exit` with the child process' exit code at the end of its execution.

```ts
spawn(): Promise<void>
```

Example:

```ts
import { spawn } from "@currents/cli";

await spawn();
```

## Breaking Changes

### Version 4+

Version 4+ doesn't modify the local installation of Cypress. The following complimentary binaries were deprecated:

- `currents-prepare` script is deprecated. Use `run` or `spawn` API instead.
- `currents-reset` script is deprecated, use `run` or `spawn` API instead.
- `patch` API is deprecated. Use `run` or `spawn` instead.
