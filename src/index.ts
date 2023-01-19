/// <reference types="cypress" />

import * as cy2 from "cy2";

const URL = "https://cy.currents.dev";

/**
 * Run Cypress via {@link https://docs.cypress.io/guides/guides/module-api| Module API} while using {@link https://currents.dev| Currents} as cloud orchestration service
 *
 * @param config Cypress.run {@link https://docs.cypress.io/guides/guides/module-api#Options| options}
 * @returns Cypress {@link https://docs.cypress.io/guides/guides/module-api#Results| run results}
 */
export async function run(
  config?: Partial<CypressCommandLine.CypressRunOptions>
) {
  return await cy2.run(URL, config);
}

/**
 * Spawn Cypress as a child process, inheriting all the flags and environment variables.
 */
export async function spawn() {
  console.log(`[currents] Using orchestration service: ${URL}`);
  return cy2.spawn(URL);
}
