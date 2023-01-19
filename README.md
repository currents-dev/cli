# @currents/cli

Integrate your Cypress with [Currents](https://currents.dev/?utm_source=currents_cli) - a drop-in replacement for Cypress Cloud.

---

[Changelog](./CHANGELOG.md) | [Compatibility](https://currents.dev/readme/guides/cypress-compatibility) | [Documentation](https://currents.dev/readme/guides/currents-cli) | [NX](https://currents.dev/readme/ci-setup/nx)

## CLI Usage

Integrate Cypress with Currents Dashboard. The command passes down all the CLI flags to Cypress.

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

Spawn Cypress as a child process and inherit all the flags and environment variables. It invokes `process.exit` with the child process' exit code.

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
