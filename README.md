# @currents/cli

CLI tool for running cypress tests with https://currents.dev dashboard. [Currents.dev](https://currents.dev/?utm_source=currents_cli) - is a drop-in replacement for Cypress Dashboard.

## Example: Run cypress connected to Currents Dashboard

```sh
npm install @currents/cli cypress
npx currents run --parallel --record --key XXXXXX --ci-build-id build-001
```

## Example: Prepare cypress for connecting to Currents Dashboard

```sh
npm install @currents/cli cypress
npx currents-prepare
npx cypress-retry ...
```

## Example: API usage

```ts
import { patch } from "@currents/cli";
import cypress from "cypress";

async function main() {
  await patch();

  cypress
    .run({
      spec: "./cypress/e2e/examples/actions.cy.js",
      parallel: true,
      record: true,
      key: "Currents key from https://app.currents.dev",
      ciBuildId: "hello-currents",
    })
    .then((results) => {
      console.log(results);
    })
    .catch((err) => {
      console.error(err);
    });
}
main().catch((error) => {
  console.error(error);
  process.exit(1);
});
```

# Changelog

https://github.com/currents-dev/cli/blob/main/CHANGELOG.md
