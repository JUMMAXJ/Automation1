/// <reference types="cypress" />

describe("Assignment", () => {
  //module
  it("Alerts", () => {
    cy.visit("/");
    cy.contains("Alerts, Frame & Windows").click();
    cy.get(":nth-child(3) > .element-list > .menu-list > #item-1").click();
    //cy.contains("Alerts").click();
    cy.get("#alertButton").click();
    cy.get("#timerAlertButton").click();
    cy.get("#confirmButton").click();
    cy.get("#promtButton").click();
    cy.get("#promtButton").click().type("Jummy Joy{enter}");
    cy.get("#javascriptAlertsWrapper").click();
    //cy.get('#Ad\.Plus-970x250-1').should('have.text','Alert')
    //cy.get(`.text-centre`).should('have.text','Alerts');
    //cy.url().should("eq", "https://demoqa.com/alertsWindows");
    cy.url().should("eq", "https://demoqa.com/alerts");
    //Assertions
    cy.location("pathname").should("contain", "/alerts");
    cy.location("pathname").should("eq","/alerts");
    cy.contains("Click me").click();
    cy.on("window:alert", (message) => {
      expect(message).to.be.eq("You clicked a button");
    });
  });
});
