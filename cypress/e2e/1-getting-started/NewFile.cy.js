// cypress/integration/ecommerce.spec.js

/*describe('E-commerce Site Tests', () => {
    before(() => {
      // Runs once before all tests in the block
      cy.log('Starting E-commerce tests');
    });
  
    beforeEach(() => {
      // Runs before each test in the block
      cy.visit('https://your-ecommerce-site.com');
    });
  
    after(() => {
      // Runs once after all tests in the block
      cy.log('Completed E-commerce tests');
    });
  
    afterEach(() => {
      // Runs after each test in the block
      cy.log('Test completed');
    });
  
    it('should register a new user', () => {
      cy.contains('').click();
      cy.get('input[name="username"]').type('newuser');
      cy.get('input[name="email"]').type('newuser@example.com');
      cy.get('input[name="password"]').type('password123');
      cy.get('button[type="submit"]').click();
      cy.contains('Registration successful').should('be.visible');
    });
  
    it('should log in an existing user', () => {
      cy.get('a[href="/login"]').click();
      cy.get('input[name="email"]').type('existinguser@example.com');
      cy.get('input[name="password"]').type('password123');
      cy.get('button[type="submit"]').click();
      cy.contains('Welcome back').should('be.visible');
    });
  
    it('should add an item to the cart', () => {
      cy.get('a[href="/login"]').click();
      cy.get('input[name="email"]').type('existinguser@example.com');
      cy.get('input[name="password"]').type('password123');
      cy.get('button[type="submit"]').click();
      cy.contains('Welcome back').should('be.visible');
      cy.get('a[href="/products"]').click();
      cy.get('button[data-product-id="1"]').click();
      cy.contains('Item added to cart').should('be.visible');
    });
  });

  // cypress/support/commands.js

Cypress.Commands.add('login', (email, password) => {
    cy.visit('/login');
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.contains('Welcome back').should('be.visible');
  });*/
  