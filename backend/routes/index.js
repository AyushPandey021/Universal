var express = require('express');
var router = express.Router();
var dbConnection = require('../config/Db')
dbConnection()
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signup')
});
router.get('/login', function(req, res, next) {
  res.render('login')
});

module.exports = router;
