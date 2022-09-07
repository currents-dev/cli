#!/usr/bin/env node

const lib = require("../");

lib.patch().catch((error) => {
  console.error(error);
  process.exit(1);
});
