

/// <reference types="cypress" />




describe('eCommerce website', () => {


 beforeEach(() => {
   cy.visit("/");
   cy.login('AdePeace@gmail.com','ADEola123')
 })
   
 before(() => {
   cy.log("This test hook will run once");

  })
   
 after(() => {
    cy.log("This test hook run after all test cases have been executed");
  });
   
 afterEach(() => {
   cy.log("This test hook run after each test case has been executed");
 });


 it('should register new user', () => {
   cy.visit("/index.php?route=account/register");
    cy.contains("My account").click({force:true});
    cy.contains("Register").click({force:true});
    cy.get('#input-firstname').type("Ade");
    cy.get('#input-lastname').type("Ola");
    cy.get('#input-email').type("AdePeace@gmail.com");
    cy.get('#input-telephone').type("+37257850134");
    cy.get('#input-password').type("ADEola123")
    cy.get('#input-confirm').type("ADEola123")
    cy.get('.col-sm-10 > :nth-child(1) > .custom-control-label').click()
    cy.get('.float-right > .custom-control > .custom-control-label').click()
    cy.get('.float-right > .btn').click()
    cy.get('#input-telephone-help').should("contain","Enter valid phone number with country code!")
    cy.get('#content').click()
    cy.get('label[for="input-agree"]').click();
    cy.get('.float-right > .btn').click()
   // cy.get('.h1.page-title').should("contain","Congratulations! Your new account has been successfully created!")
    //cy.get('#content > :nth-child(3)').should("have.text","Congratulations! Your new account has been successfully created!")
    //cy.url().should("contain","https://ecommerce-playground.lambdatest.io/index.php?route=account/success")
    cy.url().should("eq","https://ecommerce-playground.lambdatest.io/index.php?route=account/register")
 })

 
 it('should log in with valid credentials', () => {
   cy.visit("/index.php?route=account/login");
   cy.get(':nth-child(2) > .card > .card-body > h2').click()
   cy.get('#input-email').type("AdePeace@gmail.com")
   cy.get('#input-password').type("ADEola123")
   cy.get('form > .btn').click()
   cy.url().should("eq","https://ecommerce-playground.lambdatest.io/index.php?route=account/account")
   //cy.url().should("contains","https://ecommerce-playground.lambdatest.io/index.php?route=account/success")
  // cy.contains('Your Account Has Been Created!').should('be.visible');
   cy.get('.list-group > [href="https://ecommerce-playground.lambdatest.io/index.php?route=account/logout"]').click()
   cy.url().should("contains","https://ecommerce-playground.lambdatest.io/index.php?route=account/logout")
 })




  it('should add an item to the cart', () => {
    cy.visit("/");
    cy.get("#widget-navbar-217834 > .navbar-nav > :nth-child(1) > .icon-left > .info > .title").click()
    cy.get("#widget-navbar-217834 > ul > li:nth-child(1) > a > div > span").click()
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

  it('login', () => {
    cy.visit("/index.php?route=account/login");
    Cypress.Commands.add('login', (email, password) => {
      cy.get('#email').type('AdePeace@gmail.com')
      
      cy.get('#password').type('ADEola123')
      cy.get('#submit').click()
      cy.url().should("contain","https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
    })
       
      
       
   });



})
