///<reference types='cypress'/>


describe("Elements", () => {
    //module
    beforeEach(() => {
      cy.visit("/");
    });
  
    before(() => {
      cy.log("This test hook will run once");
    });
  
    after(() => {
      cy.log("This test hook run after all test cases have been executed");
    });
  
    afterEach(() => {
      cy.log("This test hook run after each test case has been executed");
    });
  
    it("Text box", () => {
      const name = "Doyenify Class";
      const email = "test@doyenify.com";
      const currentAddress = "21 Hankul Estonia";
      const permanentAddress = "213 Hankul Estonia";
  
      cy.contains("Elements").click();
      cy.contains("Text Box").click();
      //assertion that the text box open
  
      cy.url().should("eq", "https://demoqa.com/text-box");
      cy.location("pathname").should("eq", "/text-box");
      cy.get(".text-center").should("have.text", "Text Box");
      cy.get("#userName").type(name);
      cy.get("#userEmail").type(email);
      cy.get("#currentAddress").type(currentAddress);
      cy.get("#permanentAddress").type(permanentAddress);
      cy.get("#submit").click();
      //assertion for the entries
      cy.get(".border").within(() => {
        cy.get("#name").should("have.text", `Name:${name}`);
        cy.get("#email").should("have.text", `Email:${email}`);
        cy.get("#currentAddress").should(
          "include.text",
          `Current Address :${currentAddress}`
        );
        cy.get("#permanentAddress").should(
          "have.text",
          `Permananet Address :${permanentAddress}`
        );
      });
    });
    it("Alert", () => {
      cy.contains("Alerts, Frame & Windows").click();
      cy.get(":nth-child(3) > .element-list > .menu-list > #item-1").click();
      cy.get("#alertButton").click();
      cy.on("window:alert",(message) => {
        expect(message).to.be.eq("You clicked a button");
      });
    });
  });