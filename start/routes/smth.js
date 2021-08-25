var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("smth", { title: "Smth", extra: { info: "just smth extra info" } });
});

module.exports = router;
