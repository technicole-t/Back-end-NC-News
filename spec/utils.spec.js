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

describe("makeRefObj", () => {
  it("returns an empty object when passed an empty array", () => {
    const list = [];
    const actual = makeRefObj(list);
    const expected = {};
    expect(actual).to.eql(expected);
  });
  it("returns an object with the value of article as the key and value of title as the value of the key, when passed one object only", () => {
    const list = [{ article_id: 1, title: "A" }];
    const actual = makeRefObj(list);
    const expected = { A: 1 };
    expect(actual).to.eql(expected);
  });
  it("returns an object with the value of article as the key and value of title as the value of the key, when passed multiple objects", () => {
    const list = [
      { article_id: 1, title: "A" },
      { article_id: 2, title: "B" },
      { article_id: 3, title: "C" },
      { article_id: 4, title: "D" }
    ];
    const actual = makeRefObj(list);
    const expected = { A: 1, B: 2, C: 3, D: 4 };
    expect(actual).to.eql(expected);
  });
  it("ensures the return object is not a mutation of the original", () => {
    const list = [
      { article_id: 1, title: "A" },
      { article_id: 2, title: "B" }
    ];
    expect(list).to.not.equal([
      { article_id: 1, title: "A" },
      { article_id: 2, title: "B" }
    ]);
  });
});

describe("formatComments", () => {
  it("returns an empty array when passed an empty array", () => {
    const comments = [];
    const ref = {};
    const actual = formatComments(comments, ref);
    const expected = [];
    expect(actual).to.eql(expected);
  });
  it("returns array in the correct format when there is only one object in the array", () => {
    const comments = [
      {
        body: "This morning, I showered for nine minutes.",
        belongs_to: "A",
        created_by: "butter_bridge",
        votes: 16,
        created_at: 975242163389
      }
    ];
    const ref = { A: 1 };
    const actual = formatComments(comments, ref);
    const expected = [
      {
        body: "This morning, I showered for nine minutes.",
        article_id: 1,
        author: "butter_bridge",
        votes: 16,
        created_at: 975242163389
      }
    ];
    expect(actual).to.eql(expected);
  });
  it("returns array in the correct format when passed an array of more than one object", () => {
    const comments = [
      {
        body: "The owls are not what they seem.",
        belongs_to: "A",
        created_by: "icellusedkars",
        votes: 20,
        created_at: 1006778163389
      },
      {
        body: "This morning, I showered for nine minutes.",
        belongs_to: "B",
        created_by: "butter_bridge",
        votes: 16,
        created_at: 975242163389
      }
    ];
    const ref = { A: 1, B: 2 };
    const actual = formatComments(comments, ref);
    const expected = [
      {
        body: "The owls are not what they seem.",
        article_id: 1,
        author: "icellusedkars",
        votes: 20,
        created_at: 1006778163389
      },
      {
        body: "This morning, I showered for nine minutes.",
        article_id: 2,
        author: "butter_bridge",
        votes: 16,
        created_at: 975242163389
      }
    ];
    expect(actual).to.eql(expected);
  });
  it("returns a new array, original array is not mutated", () => {
    const comments = [
      {
        body: "This morning, I showered for nine minutes.",
        belongs_to: "A",
        created_by: "butter_bridge",
        votes: 16,
        created_at: 975242163389
      }
    ];
    const ref = { A: 1 };
    const actual = formatComments(comments, ref);
    expect(actual).to.be.an("array");
    expect(actual).to.not.equal(comments);
  });
});
