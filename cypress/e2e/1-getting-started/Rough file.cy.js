/*describe("Cart Activities Module ", () => {
    const user = Cypress.env("users").validUser;
    beforeEach(() => {
       cy.login(user.userEmail, user.password);
      });
   
      it.only("Add to cart", () => {
         CartPage.getHome().click()
         CartPage.getCategory().click()
         CartPage.getItem().click()
         CartPage.getCartIncrement().click();
         CartPage.getBuyNow().click();
   
       });
   });


   describe("CartPage Activities Module ", () => {

    beforeEach(() => {
      
    
  
      it.only("Add to cart", () => {
       cy.visit("https://ecommerce-playground.lambdatest.io/")
       CartPage.getHome().click()
       CartPage.getCategory().click()
       CartPage.getItem().click()
       CartPage.getCartIncrement().click();
       CartPage.getBuyNow().click();
          
  
      });
    })
  })
  cy.visit ("/index.php?route=account/register")

  // cypress/integration/add_to_cart_spec.js
describe('Add to Cart', () => {
  beforeEach(() => {
      cy.visit('/index.php?route=product/product&product_id=33')

    cy.fixture('Samsung SyncMaster 941BW.json').then((Samsung) => {
     this.Samsung =Samsung;
    });
  });

  it('should add product to cart', () => {
      cy.get ('Home').click()
      cy.get('p > [href="https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=33"]').click()


    cy.get(`[data-product-id="${this.entry_216815}"]`).click(); // Assuming there's a data attribute for product ID
    cy.get('button[title="Buy now"]').click(); // Assuming there's a button with class 'add-to-cart'
    cy.get('.cart-items').should('contain', "this.'Samsung'.'Samsung','SyncMaster 941BW")
    cy.url().should("eq","https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=33")
  });
});

/*cy.on("window:alert",('On button click,This alert apppeared after 5 seconds'),
      expect('On button click,This alert appeared after 5 seconds').to.eq('You clicked a button')
      
    );*/