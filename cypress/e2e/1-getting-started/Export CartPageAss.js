///<reference types='cypress'/>

export const CartPage = {
  getHome() {
    return cy.contains("Home").click({force:true});
    
  },

  
  getCategory () {
    return cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .dropdown > .btn');
    },
   getList() {
    return cy.get('#list-view > .fas');
    },
   getAddToCart(){
    return cy.get(':nth-child(1) > .product-thumb > .caption > .product-action > .btn-cart').click()
   },
    
   getAddToCartIncrement() {
   return cy.get('.cart-items').should('contain', '2 item');
 },
  

};
