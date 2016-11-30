var express = require('express');
var router = express.Router();
var mngFile = require('../public/javascripts/manageFile')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
