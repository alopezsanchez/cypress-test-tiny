const cypress = require("cypress");

jest.setTimeout(100000);

describe("Cypress.open error", () => {
  it("should open cypress with environment vars", () => {
    return cypress.open({
      env: {
        username: "foo",
        password: "bar"
      }
    });
  });
});
