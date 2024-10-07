///<reference types='cypress'/>

import { CartPage } from "./Export CartPageAss";

describe("CartPage Activities Module ", () => {
  const user=Cypress.env("users").validUser;
  beforeEach(() => {
    cy.visit("https://ecommerce-playground.lambdatest.io/")
  

    it.only("Add to cart", () => {
     
     CartPage.getHome().click()
     CartPage.getCategory().click()
     CartPage.getItem().click()
     CartPage.getList().click()
     //CartPage.getAddToCart().click();
     CartPage.getAddToCartIncrement().click();
        

    });
  })
})





describe("Cart Activities Module ", () => {
 const user = Cypress.env("users").validUser;
 beforeEach(() => {
    cy.login(user.userEmail, user.password);
   });

   it.only("Add to cart", () => {
      CartPage.getHome().click()
      CartPage.getCategory().click()
      CartPage.getList().click()
      CartPage.getAddtoCart().click();
      CartPage.getCartIncrement().click();

    });
});