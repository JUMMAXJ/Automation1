/// <reference types="cypress" />
//import item from "../fixtures/example.json";
describe('Reqister', () => {
  it('should register new user', () => {
//cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
cy.get('#input-firstname').type("Ade");
cy.get('#input-lastname').type("Ola");
cy.get('#input-email').type("AdePeace@gmail.com");
cy.get('#input-telephone').type("+37257850134");
cy.get('#input-password').type("ADEola123")
cy.get('#input-confirm').type("ADEola123")
cy.get('.col-sm-10 > :nth-child(1) > .custom-control-label').click()
cy.get('.float-right > .custom-control > .custom-control-label').click()
cy.get('.float-right > .btn').click()
cy.get('#input-telephone-help').should("contain","Enter valid phone number with country code!")
cy.get('#content').click()
cy.url().should("eq","https://ecommerce-playground.lambdatest.io/index.php?route=account/register")
  })
})
