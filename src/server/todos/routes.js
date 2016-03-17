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
        $set: { pending_with: req.body.pending_with , Assigned: req.body.Assigned , Pending: req.body.Pending , reason_of_pending: req.body.reason_of_pending }
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