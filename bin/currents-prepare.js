#!/usr/bin/env node

const lib = require("../dist");

lib.patch().catch((error) => {
  console.error(error);
  process.exit(1);
});
