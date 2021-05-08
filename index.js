const { run } = require('cy2');

exports.run = async function main() {
  await run('https://cy.currents.dev', 'currents');
};
