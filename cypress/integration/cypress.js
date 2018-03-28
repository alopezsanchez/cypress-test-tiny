describe("page", () => {
  it("works", () => {
    console.log(Cypress.env("username"));
    console.log(Cypress.env("password"));
  });
});
