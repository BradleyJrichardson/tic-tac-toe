const expect = require("mocha").expect;
const server = require("../script");

describe("test", () => {
  it("should return a string", () => {
    expect("ci with travis").to.equal("ci with travis");
  });
});
