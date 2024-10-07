/// <reference types="cypress" />

describe("eCommerce", () => {
    it("This is the first cypress code", () => {
        cy.visit("/");
         

        cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link > .info > .title').click()
        cy.get('.list-group > .active').click()
        cy.get(':nth-child(2) > .card > .card-body > p > strong').click()
        cy.get('#input-email').type('JummyJoy@gmail.com')
        cy.get('#input-password').type('JUMmy123')
        cy.get('form > .btn').click()
       // cy.url().should("eq","https://ecommerce-playground.lambdatest.io/")
        cy.wait(5000)
        cy.get('.list-group > .active').click()
        //cy.url("https://ecommerce-playground.lambdatest.io/index.php?route=account/account").should("eq", 'https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
        cy.url().should("contains","https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
        
     //cy.get('.list-group > [href="https://ecommerce-playground.lambdatest.io/index.php?route=account/register"]').click()
     //cy.url().should("eq","https://ecommerce-playground.lambdatest.io/")
     cy.get('.list-group > .active').click()
      cy.get('#input-firstname').type("Jummy");
      cy.get('#input-lastname').type("Joy");
      cy.get('#input-email').type("JummyJoy@gmail.com")
      cy.get('#input-telephone').type(+37257850134)
      cy.get('#input-password').type("JUMmy123")
      cy.get('#input-confirm').type("JUMmy123")
      
      cy.get('.float-right > .btn').click()
      cy.get('#entry_217561 > p').click()
      cy.get('#input-telephone-help').should('contain','Enter valid phone number with country code!')
      //cy.get('.list-group > .active').click()
      //cy.get('.list-group > [href="https://ecommerce-playground.lambdatest.io/index.php?route=account/account"]').click()
      //cy.get(':nth-child(1) > .card-body > .row > :nth-child(1) > .d-inline-flex').click()
      //cy.get('#input-firstname').clear().type("Jummy")
    })
         
  })

