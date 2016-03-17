var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todos');

var Todo = mongoose.model('Todo',{
	SrNo: Number,
	NIMS_ID: String,
	k: String,
	tigerid: Number,
	CIRCUIT_ISSUE_DATE: Date,
	pending_with: {type : String, default: "Not Assigned"},
	Pending: {type : String, default: "Not Assigned"},
	Assigned: {type : String, default: "Not Assigned"},
	reason_of_pending: {type : String, default: "Not Assigned"},
	isCompleted: Boolean,
	isEditing: Boolean,
	REPC_SERVICE_ABBR: String
});

module.exports.Todo = Todo;