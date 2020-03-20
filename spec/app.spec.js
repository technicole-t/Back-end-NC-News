process.env.NODE_ENV = "test";

const chai = require("chai");
const { expect } = chai;
const chaiSorted = require("chai-sorted");
chai.use(chaiSorted);

const request = require("supertest");
const app = require("../app");
const connection = require("../db/connection");

describe("/api", () => {
  beforeEach(() => connection.seed.run());
  after(() => connection.destroy());
});

describe("/api/topics", () => {
  it("GET request returns all topics from db/test-data", () => {
    return request(app)
      .get("/api/topics")
      .expect(200)
      .then(res => {
        expect(res.body.topics[0]).to.have.all.keys(["slug", "description"]);
        expect(res.body.topics.length).to.equal(3);
      });
  });
});
