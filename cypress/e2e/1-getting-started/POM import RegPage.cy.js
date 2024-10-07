///<reference types= "cypress"/>
import {RegistrationPage} from './POM Export RegPage';

describe('Registration Test', () => {

 const user = Cypress.env("users").validUser;
 
  beforeEach(() => {
    //cy.login(user.userEmail, user.password);  
    cy.visit("/") 
  });

  it('for Registration Page', () => {
   const firstName = ("Ade");
   const lastName = ("Ola");
   const email = ("AdePeace@gmail.com");
   const Telephone = ("+37257850134");
   const Password = ("ADEola123");
   const confirmPassword =("ADEola123");
   const ErrorText=("Warning: E-Mail Address is already registered!");
      
      
    RegistrationPage.getHome().click();
    RegistrationPage.getMyAccount();
    RegistrationPage.getRegister();
    //RegistrationPage.getContinue();
    RegistrationPage.getFillFirstName().type(firstName);
    RegistrationPage.getFillLastName().type(lastName);
    RegistrationPage.getFillEmail().type(email);
    RegistrationPage.getFillTelephone().type(Telephone);
    RegistrationPage.getFillPassword().type(Password);
    RegistrationPage.getFillConfirmPassword().type(confirmPassword);
    RegistrationPage.getAcceptPrivacyPolicy();
    RegistrationPage.getSubmit()
    RegistrationPage.getAlertMessage().should('be.visible');
    RegistrationPage.getUrl();
   
  });
  
  
   

  
  
  
});
  

  



    