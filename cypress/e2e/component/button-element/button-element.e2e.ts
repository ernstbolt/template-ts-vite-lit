// Tests the button element of the dev server homepage.
describe("Button Element Testing", () => {
  const buttonElement = () =>
    cy.get("app-element").shadow().find("button-element").should("exist");

  beforeEach(() => {
    cy.visit("/");
  });

  it("renders a button", () => {
    buttonElement().should("exist");
  });

  it("increments the button text on click", () => {
    buttonElement()
      .click()
      .click()
      .click()
      .shadow()
      .find("button")
      .then(button => {
        expect(button.text().trim()).to.equal(
          "Welcome to Vite with Lit & Husky & Linting (x3)"
        );
      });
  });
});
