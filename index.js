const { run, patch, inject } = require("cy2");

exports.run = async function main() {
  process.env.CYPRESS_API_URL = "https://cy.currents.dev/";
  await run("currents");
};

exports.patch = async function () {
  await inject(`${__dirname}/inject.js`);
};

exports.reset = async function () {
  await patch();
};
