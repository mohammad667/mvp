var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose

router.get('/', function(req, res, next) {
	res.render('./index.html');
});


module.exports = router;


