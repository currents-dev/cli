import * as cy2 from "cy2";

const URL = "https://cy.currents.dev";

export async function run(config: CypressCommandLine.CypressRunOptions) {
  return await cy2.run(URL, config);
}

export async function spawn() {
  console.log(`[currents] Using Cypress orchestration service: ${URL}`);
  return cy2.spawn(URL);
}
