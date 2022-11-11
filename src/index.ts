import { inject, patch as cyPatch, run as cyRun } from "cy2";

export async function run() {
  process.env.CYPRESS_API_URL = "https://cy.currents.dev/";
  await cyRun("currents");
}

/**
 * Patch Cypress to inject the Currents SDK.
 *
 * @param cypressPackage - the entry point to the Cypress package.
 */
export async function patch(cypressPackage = require.resolve("cypress")) {
  await inject(`${__dirname}/inject.js`, cypressPackage);
}

/**
 * Reset Cypress to use the original configuration.
 *
 * @param cypressPackage - the entry point to the Cypress package.
 */
export async function reset(cypressPackage = require.resolve("cypress")) {
  await cyPatch(cypressPackage);
}
