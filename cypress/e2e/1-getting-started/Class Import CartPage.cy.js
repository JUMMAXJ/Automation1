///<reference types='cypress'/>

import { CartPage} from './Class Export Cart'


describe("Cart Activities Module ", () => {
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

