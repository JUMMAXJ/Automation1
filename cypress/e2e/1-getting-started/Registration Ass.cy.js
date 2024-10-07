   ///<reference types='cypress'/>


describe('LambdaTest eCommerce Registration', () => {
    it('should register a new user', () => {
      cy.visit('/index.php?route=account/register');
      const ErrorText= "Warning: E-Mail Address is already registered!"
      cy.contains("Home").click()
      cy.contains("My account").click({force:true})
      cy.contains("Register").click({force:true})
      cy.get('#input-firstname').type('Ade');
      cy.get('#input-lastname').type('Ola');
      cy.get('#input-email').type('AdePeace@gmail.com');
      cy.get('#input-telephone').type('+37257850134');
      cy.get('#input-password').type('ADEola123');
      cy.get('#input-confirm').type('ADEola123');
      //cy.get('input[type="radio"]').click();
      //cy.get('input[name="newsletter"]').click();
     // cy.get('input[name="Agree"]').click();
      cy.get('label[for="input-agree"]').click();
      cy.get('input[value="Continue"]').click();
      cy.get('#input-telephone-help').should("contain","Enter valid phone number with country code!")
      //cy.contains('Welcome Congratulations! Your new account has been successfully created!')
      cy.url().should("eq","https://ecommerce-playground.lambdatest.io/index.php?route=account/register")
      //cy.get('#account-register > .alert').should("have.text","Warning: You must agree to the Privacy Policy!" )
      cy.get('.alert-danger').should('be.visible').and("contain",ErrorText) ;
      //cy.url().should('include', 'success')
      //cy.get('.alert-success').should('be.visible');
      //cy.wait("5000")
     // cy.get('<form.mb-4>').should("have.text","Congratulations! Your new account has been successfully created!")
      //cy.get('#content > :nth-child(3)').should("have.text","Congratulations! Your new account has been successfully created!")
      //cy.location("pathname").should("include", "/index.php?route=account/success");
      //cy.url().should("eq","https://ecommerce-playground.lambdatest.io/index.php?route=account/success")
    });
  });
  