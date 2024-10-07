/// <reference types ='cypress'/>
describe("Webtable on Demoqa.com", () => {
    beforeEach(() => {
       cy.visit("https://demoqa.com/");
       cy.contains("Elements").click();
       cy.contains("Web Tables").click();
    });
    const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  // This is a regular expn e.g EE4453453457 = /^[A-Z]{2}$+[0-9]{10}$/
    it("should add new entry to the web table", () => {
       const firstName = "Joanna";
       const lastName = "Israel";
       const userEmail = "Joanna@gmail.com";
       const Age = "28";
       const Salary = "60000";
       const Department = "Admin";
       cy.get("#addNewRecordButton").click();
        cy.get("#userForm").within(() =>{
          cy.get("#firstName").type(firstName);
          cy.get("#lastName").type(lastName);
          cy.get("#userEmail").type(userEmail);
          cy.get("#age").type(Age);
          cy.get("#salary").type(Salary);
          cy.get("#department").type(Department);
          cy.get("#submit").click();
          cy.url().should("eq","https://demoqa.com/webtables")
          //cy.get('#registration-form-modal').should('have.text','Registration Form')
       })
       
        
       
       //Assertions
       cy.get(':nth-child(4) > .rt-tr > :nth-child(1)') .should('contain','Joanna');
       cy.get(':nth-child(4) > .rt-tr > :nth-child(2)').should('contain','Israel');
       cy.get(':nth-child(4) > .rt-tr > :nth-child(3)').should('contain','28');
       
       cy.get(":nth-child(4) > .rt-tr > :nth-child(4)")
      .invoke("text")
      .then((emailValue) => {
        expect(emailValue).to.match(emailRegEx);
      });
       cy.get(':nth-child(4) > .rt-tr > :nth-child(5)')
       .invoke("text")
      .then((salaryValue) => {
        expect(salaryValue).to.match(emailRegEx);
      });
       cy.get(':nth-child(4) > .rt-tr > :nth-child(6)').should('contain','Admin')
     });
  });
  