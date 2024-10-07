
//describe("Assignment", () => { //module
it("Text Box", () => {
    cy.visit("/")
    cy.contains("Element").click();
    cy.contains("Text Box").click();
   
    cy.get("#userName").click().type('Jummy Joy');
    cy.get("#userEmail").click().type('jummy@gmail.com');
    cy.get("#currentAddress").click().type('192Mustamael. Tallinn');
    cy.get("#permanentAddress").click().type('192Mustamael Tallinn .Estonia');
    cy.get('#submit').click();
    //Assertion for the text box
    cy.url().should("eq", "https://demoqa.com/text-box");
    cy.location("pathname").should("eq", "/text-box");
    cy.location("pathname").should("contain", "text-box");
    cy.wait(5000)
  });
  

