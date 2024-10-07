/// <reference types="cypress" />
//import item from "../fixtures/example.json";

describe("This is our first cypress code", () => {
    it("Verify that the URL is properly launched", () => {
      cy.visit("/");
      cy.get(
        '.flyout > [href="https://www.jumia.com.ng/mlp-appliances/"]'
      ).click();
      cy.get(":nth-child(5) > .core > .img").click();
      cy.get("#add-to-cart > .add").click();
      //cy.get("#fi-q").click();
      cy.get('input[id="fi-q"]').click().clear().type('Pressing iron')
      /* cy.contains(".row._no-g._6cl-4cm-shs.-paxs", item.name).within(() => {
        cy.contains(".prd._box.col._hvr", item.name);
        cy.contains(".prd._box.col._hvr", item.price);
        cy.contains(".prd._box.col._hvr", item.discount)
        cy.get(".prd._box.col._hvr").click();
  
      });*/
    });
  });
  /// <reference types="cypress" />


describe("This is our first cypress code", () => {
    it("Verify that the URL is properly launched", () => {
      cy.visit("/");
      cy.get(
        '.flyout > [href="https://www.jumia.com.ng/mlp-appliances/"]'
      ).click();
      cy.get(":nth-child(5) > .core > .img").click();
      cy.get("#add-to-cart > .add").click();
      //cy.get("#fi-q").click();
      cy.wait(5000)
      cy.get('input[id="fi-q"]').click().clear().type('Pressing iron{enter}')
      
    });
  });