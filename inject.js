"use strict";
const Mod = require("module");
const req = Mod.prototype.require;
Mod.prototype.require = function (...args) {
  if (args[0] === "konfig") {
    return () => ({
      app: {
        api_url: "https://cy.currents.dev",
        cdn_url: "https://cdn.cypress.io",
        chromium_manifest_url: "https://download.cypress.io/chromium.json",
        chromium_url: "https://download.cypress.io/chromium",
        desktop_manifest_url: "https://download.cypress.io/desktop.json",
        desktop_url: "https://download.cypress.io/desktop",
        on_url: "https://on.cypress.io/",
      },
    });
  }
  return req.call(this, ...args);
};
