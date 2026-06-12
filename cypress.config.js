const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Air Arabia Test Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportDir: "cypress/reports/html",
    overwrite: true,
  },
  e2e: {
    baseUrl: "https://www.airarabia.com",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },
  retries: {
    runMode: 1,
    openMode: 0,
  },
  defaultCommandTimeout: 15000,
  requestTimeout: 20000,
  pageLoadTimeout: 60000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: false,
});
