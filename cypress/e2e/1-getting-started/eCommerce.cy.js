/// <reference types="cypress" />

describe("This is our first cypress code", () => {
    it("Verify that the URL is properly launched", () => {
      cy.visit("/");
     cy.get(
       "#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input"
     ).type("samsung{enter}");
     cy.url().should('contain', 'samsung')
     //cy.location('pathname').should('eq', 'samsung')
    });
  });