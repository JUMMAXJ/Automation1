const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e:{
    //baseUrl:"https://demoqa.com/alerts/",
   //baseUrl: "https://accounts.lambdatest.com",
  //baseUrl:'https://ecommerce-playground.lambdatest.io/index.php?route=account/register',
    baseUrl:"https://demoqa.com/",
    //baseUrl:"https://demoqa.com/text-box/",
    //baseUrl:"https://www.jumia.com.ng/mlp-appliances",
   // baseUrl: "https://www.jumia.com.ng/",
    //baseUrl:"https://ecommerce-playground.lambdatest.io/",
    //baseUrl:"https://ecommerce-playground.lambdatest.io/index.php?route=account/login'/",
    // baseUrl: "https://ecommerce-playground.lambdatest.io/index.php?route=account/login/",
    chromewebsecurity: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
     // implement node event listeners here
    },
    env: {
      users: {
        validUser: {
          userEmail: "AdePeace@gmail.com",
          password: "ADEola123"
        },
        invalidUser: {
          userEmail:"Ade@gmail.com",
          password:"Ola123"
        },
      },
    },
  },
});


