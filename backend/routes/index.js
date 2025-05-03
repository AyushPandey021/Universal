var express = require('express');
var router = express.Router();
var dbConnection = require('../config/Db')
dbConnection()
const dbCreation = require('../config/DbCreation')
const controllers = require('../controllers/User')


/* GET home page. */  


router.post("/profile", dbCreation.signup);
router.get("/signup", controllers.signup);
router.get("/login", controllers.login);
module.exports = router;
