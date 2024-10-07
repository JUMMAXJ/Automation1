/// <reference types="cypress" />
//import item from "../fixtures/example.json";
describe('Login Test', () => {
    it('should log in with valid credentials', () => {
        //cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
        cy.get(':nth-child(2) > .card > .card-body > h2').click()
        cy.get('#input-email').type("AdePeace@gmail.com")
        cy.get('#input-password').type("ADEola123")
        cy.get('form > .btn').click()
        cy.url().should("eq","https://ecommerce-playground.lambdatest.io/index.php?route=account/account")
       

})
})