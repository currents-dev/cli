const { run, patch } = require("cy2");

exports.run = async function main() {
  await run("https://cy.currents.dev", "currents");
};

exports.patch = async function () {
  await patch("https://cy.currents.dev");
};

exports.reset = async function () {
  await patch("https://api.cypress.io/");
};
