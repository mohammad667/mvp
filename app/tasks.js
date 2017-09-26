var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose
//Get All Tasks

router.get('/tasks', function(req, res, next) {
	db.tasks.find(function(err, tasks) {
		if(err) {
			res.send(err);
		}
		res.json(tasks);
	});

});

//   Get One Task

router.get('/tasks/:id', function(req, res, next) {
	db.tasks.findOne({_id: mongoose.ObjectId(req.params.id)},function(err, task) {
		if(err) {
			res.send(err);
		}
		res.json(task);
	});
	}) 

// 	 Save Task

	router.post('/task',function(req,res,next) {
		var task = req.body;
		if(!task.title){
			res.status(400);
			res.json("error")
		}
		});
		
	


module.exports = router;