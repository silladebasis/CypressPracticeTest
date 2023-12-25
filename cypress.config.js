const { defineConfig } = require("cypress");

module.exports = defineConfig({
  include: ["./node_modules/cypress", "cypress/**/*.js"],
  include:["./node_modules/cypress-iframe","cypress/**/*.js"],
  watchForFileChanges:false,
  video:false,
  experimentalWebKitSupport:true,
  viewportHeight:1080,
  viewportWidth:1920,
  defaultCommandTimeout:6000,
  env:{
    url:"https://rahulshettyacademy.com"
  },
  reporter:"cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Automation Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: "https://admin-demo.nopcommerce.com"
  },
});
