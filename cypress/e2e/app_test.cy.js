/* eslint-disable no-undef */
describe("React App Button Click Test", () => {
  it("displays the default welcome text", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Welcome to Cypress Testing!");
  });

  it("changes the text when the button is clicked", () => {
    cy.visit("http://localhost:3000");
    cy.get("button").click();
    cy.contains("You clicked the button!");
  });
});
