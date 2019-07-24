const request = require("supertest");
const app = require("../index.js");

describe("GET /", function() {
  it("correct response on Index", function(done) {
    request(app)
      .get("/")
      .expect("Test with CI/CD", done);
  });
});
