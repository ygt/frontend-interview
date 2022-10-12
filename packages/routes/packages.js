var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET packages listing. */
router.get('/', function(req, res, next) {

  fs.readFile("public/packages.json", "utf8", function(err, data){
    res.json(JSON.parse(data));
  });
});

router.get('/prices', function(req, res, next) {

  fs.readFile("public/prices.json", "utf8", function(err, data){
    res.json(JSON.parse(data));
  });
});

module.exports = router;
