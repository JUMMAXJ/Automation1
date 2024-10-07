///<reference types='cypress'/>

//import { faker } from "../1-getting-started/parameter.cy.js";
const { faker } = require("@faker-js/faker");

describe("parameterization of data", () => {
  it("dynamic registration page", () => {
    const firstName = faker.internet.userName();
    const lastName = faker.internet.userName();
    const username = faker.internet.userName();
    const password = faker.internet.password();
    const address = faker.internet.userName();
    const city = faker.internet.userName();
    const state = faker.internet.userName();
    const zipCode = faker.internet.userName();
    const phoneNumber = faker.internet.userName();
    const ssn = faker.internet.userName();
    const repeatedPassword = password;
    cy.visit("https://parabank.parasoft.com/parabank/register.htm");
    cy.contains("Register").click();
    cy.get("table.form2").within(() => {
      cy.get('input[id="customer.firstName"]').type(firstName);
      cy.get('input[id="customer.lastName"]').type(lastName);
      cy.get('input[id="customer.address.street"]').type(address);
      cy.get('input[id="customer.address.city"]').type(city);
      cy.get('input[id="customer.address.state"]').type(state);
      cy.get('input[id="customer.address.zipCode"]').type(zipCode);
      cy.get('input[id="customer.phoneNumber"]').type(phoneNumber);
      cy.get('input[id="customer.ssn"]').type(ssn);
      cy.get('input[id="customer.username"]').type(username);
      cy.get('input[id="customer.password"]').type(password);
      cy.get('input[id="repeatedPassword"]').type(repeatedPassword);
      cy.get('input[type="submit').click();
      cy.url().should("eq","https://parabank.parasoft.com/parabank/register.htm");
      
      //cy.contains(`Welcome ${username}`)
    });

    //cy.contains('Welcome ',username)
    cy.contains(`Welcome ${username}`).should("be.visible");
  });
});
