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
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://admin-demo.nopcommerce.com"
  },
});
