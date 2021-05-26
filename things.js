var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ToursList", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
console.log("connect success!");

const TourModel = mongoose.model("tour", {
  tourID: String,
  tourName: String,
  price: String,
  nights: String,
  days: String,
});
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", function (req, res) {
  TourModel.find({}, function (err, response) {
    if (err) console.log("error");
    {
      res.json(response);
      console.log(response);
    }
  });
});

router.get("/:tourName", function (req, res) {
  TourModel.findOne(
    { tourName: req.params.tourName },
    function (err, response) {
      if (err) console.log("error");
      else res.json(response);
      console.log("Data GET",response);
    }
  );
});
router.post("/p", function (req, res) {
  if (
    !req.body.tourID ||
    !req.body.tourName ||
    !req.body.price ||
    !req.body.nights ||
    !req.body.days
  ) {
    res.send("vui long dien day du thong tin");
  } else {
    var newTour = new TourModel({
      tourID: req.body.tourID,
      tourName: req.body.tourName,
      price: req.body.price,
      nights: req.body.nights,
      days: req.body.days,
    });

    newTour.save(function (err, _Person) {
      if (err) res.end("Err");
      else res.json(req.body);
    });
  }
});

module.exports = router;
