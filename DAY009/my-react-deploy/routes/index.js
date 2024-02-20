var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("*", function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send(path.join(__dirname, "public/build/index.html"));
});

module.exports = router;
