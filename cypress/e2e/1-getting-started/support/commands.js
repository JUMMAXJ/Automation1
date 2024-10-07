// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
//Cypress.Commands.add('login', (email, password) => {
   // cy.get('#email').type('AdePeace@gmail.com')
   // cy.get('#password').type('ADEola123')
   // cy.get('#submit').click()
// })

Cypress.Commands.add('login', (email, password) => {
    cy.visit('/')
    cy.contains("My account").click({force:true})
    cy.contains("Login").click({force:true})
    cy.get('#input-email').type('AdePeace@gmail.com')
    cy.get('#input-password').type('ADEola123')
    //cy.get('input[value=login]').click()
  })



//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })