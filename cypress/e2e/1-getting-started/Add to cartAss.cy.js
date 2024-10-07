/// <reference types="cypress" />
//import item from "../fixtures/example.json";
describe('Add to Cart Test', () => {
    it('Should add items to cart', () => {
        cy.visit('/')
        cy.contains("Home").click({force:true});
        cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(1) > .icon-left').click()
        cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .dropdown > .btn').click()
        cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').click()
        
        cy.get('.type-text').click()
        cy.get('#list-view > .fas').click()
        cy.wait(5000)
        cy.wait(5000) 
        //cy.get(':nth-child(1) > .product-thumb > .caption > .title > .text-ellipsis-2').click()
        
        //cy.get('#mz-product-grid-image-28-212469 > .carousel-inner > .active > .lazy-load').click()
        cy.get(':nth-child(1) > .product-thumb > .caption > .product-action > .btn-cart').click()
        cy.get(':nth-child(1) > .product-thumb > .caption > .product-action > .btn-cart > span').click()
        cy.get('.show > .toast-body > .d-flex > p > [href="https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=28"]').click()
        cy.wait(5000)
        //cy.get('.cart-success-message').should('contain', 'Success: You have added HTC Touch HD to your shopping cart!');
        cy.get('.cart-items').should('contain', '2 item');
    
    });

   // it('should display "Successfully added to cart" message', () => {
        
    //    cy.visit('/');
    
        
       // cy.get(':nth-child(1) > .product-thumb > .caption > .product-action > .btn-cart').click();
    
        // Assert that the success message is displayed
     //   cy.get('.cart-success-message').should('contain', 'Successfully added to cart');
  // });
})       
    