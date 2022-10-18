#!/usr/bin/env node

const lib = require("../");

lib.reset().catch((error) => {
  console.error(error);
  process.exit(1);
});
