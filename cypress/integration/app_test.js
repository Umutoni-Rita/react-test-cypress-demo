/* eslint-disable no-undef */
describe('React App Button Click Test', () => {
    it('displays the default welcome text', () => {
      // Visit the React app (make sure the app is running on localhost:3000)
      cy.visit('http://localhost:3000');
      
      // Check that the default text is displayed
      cy.contains('Welcome to Cypress Testing!');
    });
  
    it('changes the text when the button is clicked', () => {
      // Visit the React app
      cy.visit('http://localhost:3000');
      
      // Click the button
      cy.get('button').click();
      
      // Check that the text has changed after the button click
      cy.contains('You clicked the button!');
    });
  });
  