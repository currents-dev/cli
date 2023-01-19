#!/usr/bin/env node
const lib = require("../");

lib.spawn().catch((error) => {
  console.error(error);
  process.exit(1);
});
