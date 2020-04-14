const { expect } = require("chai");
const Sort = require("../src/Sort");

describe("Quick Sort", () => {
  it("should be a function", () => {
    expect(Sort).to.be.a("function");
  });
  it("should have a sort method", () => {
    expect(Sort.prototype.sort).to.be.a("function");
  });

  it("should Divide and Conquer", () => {
    let arr = [3, 4, 2, 1, 5];
    const actual = [1, 2, 3, 4, 5];
    let quickSorted = new Sort(arr);
    const result = quickSorted.sort();
    expect(result).to.deep.equal(actual);
  });
});
