/// <reference types="cypress" />
describe('Custom Command', () => {
    it('login', () => {
//cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
    Cypress.Commands.add('login', (email, password) => { 
        cy.get('#email').type('AdePeace@gmail.com')
    
        cy.get('#password').type('ADEola123')
        cy.get('#submit').click()
     })
});
})
