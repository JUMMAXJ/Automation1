
///<reference types='cypress'/>



export const CartPage = {
  getHome() {
    return cy.get( "#widget-navbar-217834 > .navbar-nav > :nth-child(1) > .icon-left > .info > .title");
  },
  getCategory() {
    return cy.get("#widget-navbar-217834 > ul > li:nth-child(1) > a > div > span");
  },
  getItem() {
    return cy.get(".swiper-slide-next > a > .figure > .figure-img-wrapper > .figure-img");
  },
  getCartIncrement() {
    return cy.get(":nth-child(1) > .product-thumb > .caption > .title > .text-ellipsis-2");
  },

  getBuyNow() {
    return cy.get('button[title="Buy now"]');
  },
  
};
