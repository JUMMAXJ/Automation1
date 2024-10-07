/// <reference types = "cypress"/>

describe('LambdaTest eCommerce Login', () => {
  const Login = "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
  beforeEach(() => {
    cy.visit('/index.php?route=account/login');
  });
  
  it('should log in with valid credentials', () => {
    cy.contains("Home").click({force:true});
    cy.contains("My account").click({force:true})
    cy.contains("Login").click({force:true})
   cy.get('#input-email').type('AdePeace@gmail.com');
   cy.get('#input-password').type('ADEola123');
   cy.get('input[type="submit"]').click();
   //cy.url().should("contain",Login);
   //cy.url().should('include','https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
   cy.url().should('include','/account');
   cy.get('.list-group > [href="https://ecommerce-playground.lambdatest.io/index.php?route=account/logout"]').click()
   cy.url().should("contains","https://ecommerce-playground.lambdatest.io/index.php?route=account/logout")
   

   


  });

  
  
  it('should show error for invalid username', () => {
   //const Text = "No match for E-Mail Address and/or Password."
   const errorText = "Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour."
   cy.contains("Home").click();
   cy.contains("My account").click({force:true})
   cy.contains("Login").click({force:true})
   cy.get('#input-email').type('Ade@gmail.com');
   cy.get('#input-password').type('ADEola123');
   cy.get('input[type="submit"]').click();
   cy.get('.alert-danger').should('be.visible');
   cy.url().should("contain",Login);
   // cy.get('.alert-danger').should('be.visible').and("contain",Text)
   cy.get('.alert-danger').should('be.visible').and("contain",errorText) 
    
   
 });
  
  it('should show error for invalid password', () => {
    //const errorText="Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour."
    //const errorTextt="Warning: No match for E-Mail Address and/or Password."
   cy.contains("Home").click();
   cy.contains("My account").click({force:true})
   cy.contains("Login").click({force:true})
   cy.get('#input-email').type('AdePeace@gmail.com');
   cy.get('#input-password').type('ola123');
   cy.get('input[type="submit"]').click();
   cy.get('.alert-danger').should('be.visible');
   cy.url().should("contain",Login);
  // cy.get('.alert-danger').should('be.visible').and("contain",errorText) 
   //cy.get('.alert-danger').should('be.visible').and("contain",errorTextt) 
  });

  
  it('should show error for empty fields', () => {
    //const errorText="Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour."
    //const errorTextt="Warning: No match for E-Mail Address and/or Password."
    cy.contains("Home").click();
    cy.contains("My account").click({force:true})
    cy.contains("Login").click({force:true})
    cy.get('input[type="submit"]').click();
    cy.get('.alert-danger').should('be.visible');
    cy.url().should("contain",Login);
    //cy.get('.alert-danger').should('be.visible').and("contain",errorText) 
   // cy.get('.alert-danger').should('be.visible').and("contain",errorTextt) 
 });

});
  