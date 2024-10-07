/// <reference types ='cypress' />
describe("Table entries", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com/");
    cy.contains("Elements").click();
    cy.contains("Web Tables").click();
  });
  const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  // This is a regular expn e.g EE4453453457 = /^[A-Z]{2}$+[0-9]{10}$/

  it("check number of rows and columns in the table", () => {
    cy.get(".rt-table > .rt-tbody > .rt-tr-group").should("have.length", 10);
    cy.get(".rt-table > .rt-thead > .rt-tr > .rt-th").should(
      "have.length.greaterThan", 5);
    cy.url().should("eq", "https://demoqa.com/webtables");
  });

  it("check data in a particular cell is a valid email", () => {
    //const emailRegex  = /^[w-.]+@([w-]+.)+[w-]{2,4}$/;
    cy.get(":nth-child(2) > .rt-tr > :nth-child(4)")
      .invoke("text")
      .then((emailValue) => {
        expect(emailValue).to.match(emailRegEx);
      });
      cy.get(":nth-child(3) > .rt-tr > :nth-child(4)")
      .invoke("text")
      .then((emailValue) => {
        expect(emailValue).to.match(emailRegEx);
      });

  });
  it.skip("Search data table", () => {});
  it.skip("Add a new data and confirm",() => {});
  it.skip("looping through the table count the number of row with data", () =>{});  

});
