const { expect } = require("chai");
const {
  formatDates,
  makeRefObj,
  formatComments
} = require("../db/utils/utils.js");

// empty array
// array of one obj
// array of multiple obj
//check for mutations
describe("formatDates", () => {
  it("returns an empty array when passed an empty array", () => {
    const list = [];
    const actual = formatDates(list);
    const expected = [];
    expect(actual).to.eql(expected);
  });
});

describe("makeRefObj", () => {});

describe("formatComments", () => {});
