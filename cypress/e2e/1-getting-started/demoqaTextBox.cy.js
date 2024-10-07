///<reference types='cypress'/>

describe("Elements", () => {
  //module
  it.only("Text box", () => {
    const name = "Doyenify Class";
    const email = "test@doyenify.com";
    const currentAddress = "21 Hankul Estonia";
    const permanentAddress = "213 Hankul Estonia";
    cy.visit("/");
    cy.contains("Elements").click();
    cy.contains("Text Box").click();
    //assertion that the text box open

    cy.url().should("eq", "https://demoqa.com/text-box");
    cy.location("pathname").should("eq", "/text-box");
    cy.get(".text-center").should("have.text", "Text Box");
    cy.get("#userName").type(name);
    cy.get("#userEmail").type(email)
;
    cy.get("#currentAddress").type(currentAddress);
    cy.get("#permanentAddress").type(permanentAddress);
    cy.get("#submit").click();
//assertion for the entries
    cy.get(".border").within(() => {
      cy.get("#name").should("have.text", `Name:${name}`);
      cy.get("#email").should("have.text", `Email:${email}`);
      cy.get("#currentAddress").should("include.text", `Current Address :${currentAddress}`);
      cy.get("#permanentAddress").should(
        "have.text",
        `Permananet Address :${permanentAddress}`
      );
    });
  });
});



