describe("page", () => {
  it("works", () => {
    expect(Cypress.env("username")).to.equal("foo");
    expect(Cypress.env("username")).to.equal("bar");
  });
});
