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
  it('returns a converted "created_at" time stamp when passed one array object', () => {
    const list = [
      {
        body: "I hate streaming noses",
        belongs_to: "Living in the shadow of a great man",
        created_by: "icellusedkars",
        votes: 0,
        created_at: 1385210163389
      }
    ];
    const actual = formatDates(list);
    const expected = [
      {
        body: "I hate streaming noses",
        belongs_to: "Living in the shadow of a great man",
        created_by: "icellusedkars",
        votes: 0,
        created_at: new Date(1385210163389)
      }
    ];
    expect(actual).to.eql(expected);
    expect(actual[0].created_at).to.eql(new Date(1385210163389));
  });
  it('returns converted "created_at" time stamps when passed an array of multiple objects', () => {
    const list = [
      {
        body: "Lobster pot",
        belongs_to: "Living in the shadow of a great man",
        created_by: "icellusedkars",
        votes: 0,
        created_at: 1322138163389
      },
      {
        body: "Delicious crackerbreads",
        belongs_to: "Living in the shadow of a great man",
        created_by: "icellusedkars",
        votes: 0,
        created_at: 1290602163389
      },
      {
        body: "Superficially charming",
        belongs_to: "Living in the shadow of a great man",
        created_by: "icellusedkars",
        votes: 0,
        created_at: 1259066163389
      }
    ];
    const actual = formatDates(list);
    const expected = [
      {
        body: "Lobster pot",
        belongs_to: "Living in the shadow of a great man",
        created_by: "icellusedkars",
        votes: 0,
        created_at: new Date(1322138163389)
      },
      {
        body: "Delicious crackerbreads",
        belongs_to: "Living in the shadow of a great man",
        created_by: "icellusedkars",
        votes: 0,
        created_at: new Date(1290602163389)
      },
      {
        body: "Superficially charming",
        belongs_to: "Living in the shadow of a great man",
        created_by: "icellusedkars",
        votes: 0,
        created_at: new Date(1259066163389)
      }
    ];
    expect(actual).to.eql(expected);
  });
  it("checks the return array is not a mutation of the original input array", () => {
    const list = [];
    expect(formatDates(list)).to.not.equal(list);
  });
});

describe("makeRefObj", () => {});

describe("formatComments", () => {});
