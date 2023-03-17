const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://itera-qa.azurewebsites.net/',
    defaultCommandTimeout: 4000,
    screenshotOnRunFailure : true,
    video: true
  },
  env: {
    baseUrl: 'https://itera-qa.azurewebsites.net/',
  }
});
