var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:3000");

// UNIT test begin

describe("SAMPLE unit test", function() {

    // #1 should return home page

    it("Hiển thị tất cả các tour", function(done) {

        // calling home page api
        server
            .get("/things")
            .expect("Content-type", /json/)
            .expect(200) // THis is HTTP response
            .end(function(err, res) {
                // HTTP status should be 200
                res.status.should.equal(200);
                // Error key should be false.
                done();
            });

    });

    it("tra ve thong tin vua post", function(done) {
        server
            .post("/things/p")
            .send({tourID: "4",tourName: "Tours 5",price: "1000",nights: "2",days: "3"})
            .expect("Content-type", /json/)
            .expect(200)
            .end(function(err, res) {
                res.body.tourID.should.equal("4");
                res.body.tourName.should.equal("Tours 5");
                res.body.price.should.equal("1000");
                res.body.nights.should.equal("2");
                res.body.days.should.equal("3");

                done();
            });
    });

});

[{
    "_id": {
      "$oid": "608949c790fbc45a84e43a9b"
    },
    "tourID": "1",
    "tourName": "Tours1",
    "price": "1000",
    "nights": "2",
    "days": "3"
  },{
    "_id": {
      "$oid": "60894a238349b320e5b2f29f"
    },
    "tourID": "2",
    "tourName": "Tours 2",
    "price": "2000",
    "nights": "2",
    "days": "4"
  },{
    "_id": {
      "$oid": "609bca3db12b5572a47dac37"
    },
    "tourID": "4",
    "tourName": "Tours 5",
    "price": "1000",
    "nights": "2",
    "days": "3",
    "__v": 0
  },{
    "_id": {
      "$oid": "609bcaa2b12b5572a47dac38"
    },
    "tourID": "4",
    "tourName": "Tours 5",
    "price": "1000",
    "nights": "2",
    "days": "3",
    "__v": 0
  },{
    "_id": {
      "$oid": "609bcaaf9437df72cfba6ccc"
    },
    "tourID": "4",
    "tourName": "Tours 5",
    "price": "1000",
    "nights": "2",
    "days": "3",
    "__v": 0
  },{
    "_id": {
      "$oid": "609bcaf0b515da72d40cec66"
    },
    "tourID": "4",
    "tourName": "Tours 5",
    "price": "1000",
    "nights": "2",
    "days": "3",
    "__v": 0
  },{
    "_id": {
      "$oid": "609bcb8d0223e872f1bd1c8f"
    },
    "tourID": "4",
    "tourName": "Tours 5",
    "price": "1000",
    "nights": "2",
    "days": "3",
    "__v": 0
  },{
    "_id": {
      "$oid": "609bcbda132ecb73018d273d"
    },
    "tourID": "4",
    "tourName": "Tours 5",
    "price": "1000",
    "nights": "2",
    "days": "3",
    "__v": 0
  },{
    "_id": {
      "$oid": "609bcc00132ecb73018d273e"
    },
    "tourID": "4",
    "tourName": "Tours 5",
    "price": "1000",
    "nights": "2",
    "days": "3",
    "__v": 0
  },{
    "_id": {
      "$oid": "609bcc14132ecb73018d273f"
    },
    "tourID": "4",
    "tourName": "Tours 5",
    "price": "1000",
    "nights": "2",
    "days": "3",
    "__v": 0
  },{
    "_id": {
      "$oid": "60ae1f50e2dce348f93494bb"
    },
    "tourID": "4",
    "tourName": "Tours 5",
    "price": "1000",
    "nights": "2",
    "days": "3",
    "__v": 0
  },{
    "_id": {
      "$oid": "60ae2034070b094988662c80"
    },
    "tourID": "4",
    "tourName": "Tours 5",
    "price": "1000",
    "nights": "2",
    "days": "3",
    "__v": 0
  },{
    "_id": {
      "$oid": "60ae2052070b094988662c81"
    },
    "tourID": "4",
    "tourName": "Tours 5",
    "price": "1000",
    "nights": "2",
    "days": "3",
    "__v": 0
  },{
    "_id": {
      "$oid": "60ae20a4070b094988662c82"
    },
    "tourID": "4",
    "tourName": "Tours 5",
    "price": "1000",
    "nights": "2",
    "days": "3",
    "__v": 0
  },{
    "_id": {
      "$oid": "60ae20bf070b094988662c83"
    },
    "tourID": "4",
    "tourName": "Tours 5",
    "price": "1000",
    "nights": "2",
    "days": "3",
    "__v": 0
  },{
    "_id": {
      "$oid": "60ae20dc070b094988662c84"
    },
    "tourID": "4",
    "tourName": "Tours 5",
    "price": "1000",
    "nights": "2",
    "days": "3",
    "__v": 0
  },{
    "_id": {
      "$oid": "60ae2181070b094988662c85"
    },
    "tourID": "4",
    "tourName": "Tours 5",
    "price": "1000",
    "nights": "2",
    "days": "3",
    "__v": 0
  },{
    "_id": {
      "$oid": "60ae22c13be2a94b1f2e362d"
    },
    "tourID": "4",
    "tourName": "Tours 5",
    "price": "1000",
    "nights": "2",
    "days": "3",
    "__v": 0
  },{
    "_id": {
      "$oid": "60ae232c3be2a94b1f2e362e"
    },
    "tourID": "4",
    "tourName": "Tours 5",
    "price": "1000",
    "nights": "2",
    "days": "3",
    "__v": 0
  },{
    "_id": {
      "$oid": "60ae235497808b4b3f54f0d2"
    },
    "tourID": "4",
    "tourName": "Tours 5",
    "price": "1000",
    "nights": "2",
    "days": "3",
    "__v": 0
  },{
    "_id": {
      "$oid": "60ae23af97808b4b3f54f0d3"
    },
    "tourID": "4",
    "tourName": "Tours 5",
    "price": "1000",
    "nights": "2",
    "days": "3",
    "__v": 0
  },{
    "_id": {
      "$oid": "60ae23be97808b4b3f54f0d4"
    },
    "tourID": "4",
    "tourName": "Tours 5",
    "price": "1000",
    "nights": "2",
    "days": "3",
    "__v": 0
  },{
    "_id": {
      "$oid": "60ae240b97808b4b3f54f0d5"
    },
    "tourID": "4",
    "tourName": "Tours 5",
    "price": "1000",
    "nights": "2",
    "days": "3",
    "__v": 0
  },{
    "_id": {
      "$oid": "60ae24261c75f54b5d3e7052"
    },
    "tourID": "4",
    "tourName": "Tours 5",
    "price": "1000",
    "nights": "2",
    "days": "3",
    "__v": 0
  },{
    "_id": {
      "$oid": "60ae27e3c0807d4bb8ca7880"
    },
    "tourID": "4",
    "tourName": "Tours 5",
    "price": "1000",
    "nights": "2",
    "days": "3",
    "__v": 0
  },{
    "_id": {
      "$oid": "60ae2a0f475ad24bfa1a5795"
    },
    "tourID": "4",
    "tourName": "Tours 5",
    "price": "1000",
    "nights": "2",
    "days": "3",
    "__v": 0
  }]