/// <reference types="cypress" />

import * as cy2 from "cy2";

const URL = "https://cy.currents.dev";

/**
 *
 * Run Cypress via [Module API]{@link https://docs.cypress.io/guides/guides/module-api}, using Currents.dev as cloud orchestration service.
 *
 * @param config configuration options for Cypress
 * @returns Cypress run results
 */
export async function run(config: CypressCommandLine.CypressRunOptions) {
  return await cy2.run(URL, config);
}

/**
 * Spawn cypress runner as a child process using [Currents.dev]{@link https://currents.dev} as cloud orchestration service. The child process inherits the all the environment variables and CLI flags
 *
 * @returns child process instance
 */
export async function spawn() {
  console.log(`[currents] Using orchestration service: ${URL}`);
  return cy2.spawn(URL);
}
