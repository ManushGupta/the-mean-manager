var mongoose = require('mongoose'); 
var Todo = require('server/db/db').Todo;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    Todo.find(function(err, results) {
        if (err) { console.log(err); }

        res.send({ todos: results });
    });
});

router.post('/', function(req, res) {
    var todo = new Todo(req.body);
    todo.save(function(err) {
        if (err) { console.log(err); }

        res.send('ToDo saved');
    });
});

router.put('/:id', function (req,res) {
	var id = req.params.id;
	Todo.update( {_id : mongoose.Types.ObjectId(id)}, {
        $set: { dependency_owner: req.body.dependency_owner , startDepDate: req.body.startDepDate , endDepDate: req.body.endDepDate , remarks: req.body.remarks , assigned: req.body.assigned , order_status: req.body.order_status , vp_approval: req.body.vp_approval, configCompDate: req.body.configCompDate, testCompDate: req.body.testCompDate, hanging_deletion: req.body.hanging_deletion}
    }, function (err) {
        if (err) { console.log(err); }

        res.send('ToDo updated');
    });
});

router.delete('/:id', function (req,res) {
	var id = req.params.id;
	Todo.remove({ _id : mongoose.Types.ObjectId(id)}, function (err) {
		if(err){
			console.log(err);
		}
		res.send('Todo Deleted');
	})
})

module.exports = router;