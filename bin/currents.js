#!/usr/bin/env node
const lib = require('../');

lib.run().catch((error) => {
  console.error(error);
  process.exit(1);
});
