/// <reference types="cypress" />
//import item from "../fixtures/example.json";
describe('Add to Cart Test', () => {
    it('should add an item to the cart', () => {
     // cy.visit('https://ecommerce-playground.lambdatest.io/');
     // cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').click()
     // cy.get('#input-search').type("samsung")
     cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').click()
     cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').type("Samsung")
     cy.get('.type-text').click()
     cy.get('#input-search').click()
     cy.get('#button-search').click()
     cy.get('#list-view').click()
     cy.get(':nth-child(1) > .product-thumb > .caption > .product-action > .btn-cart > span').click()
     cy.get('p > [href="https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=33"]').click()
     cy.url().should("eq","https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=33")
     
    })
})