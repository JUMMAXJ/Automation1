/// <reference types= "cypress" />

export const RegistrationPage = {
  getHome(){
    return cy.contains("Home")
  },

  getMyAccount(){
    return cy.contains("My account").click({force:true})
  },

  

  getRegister(){
    return cy.contains("Register").click({force:true})
  },
  
  getFillFirstName() {
   return cy.get('#input-firstname');
  },

 getFillLastName() {
   return cy.get('#input-lastname');
  },

  getFillEmail() {
    return cy.get('#input-email');
  },

  getFillTelephone() {
    return cy.get('#input-telephone');
  },

  getFillPassword() {
    return cy.get('#input-password');
  },

  getFillConfirmPassword() {
   return  cy.get('#input-confirm');
  },

  getAcceptPrivacyPolicy() {
    return cy.get('label[for="input-agree"]').click();
  },

  getSubmit() {
    return  cy.get('input[value="Continue"]').click();

  },


  getAlertMessage(){
    return  cy.get('.alert-danger').should('be.visible')
  },

  getErrorText(){
    return cy.get('.alert-danger').should('be.visible').and("contain",ErrorText) ;
  },

  getUrl(){
    return cy.url().should("eq","https://ecommerce-playground.lambdatest.io/index.php?route=account/register")
  }

  
}
