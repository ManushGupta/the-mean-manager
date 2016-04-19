var mongoose = require('mongoose');

var db1 = mongoose.createConnection('mongodb://localhost/todos');

	

var Todo = db1.model('Todo',{
	SrNo: {type : Number, default: 0},
	nims_id: {type : String, default: "NA"},
	
	tiger_id: {type : String, default: 0},
	viznet_id: {type : String, default: "NA"},
	m6viznet_service_id: {type : String, default: "NA"},
	m6_copf_id : {type : String, default: "NA"},
	nccm_id: {type : String, default: "NA"}, 
	ior_id: {type : String, default: "NA"},
	customer_name: {type : String, default: "NA"},
	service_type : {type : String, default: "NA"},

	bandwidth: {type : String, default: "NA"},
	crfs_date: {type : Date, default: "11/11/1111" },
	provisioner_name: {type : String, default: "NA"},
	circuit_action_type : {type : String, default: "NA"},
	site_A: {type : String, default: "NA"},
	site_B: {type : String, default: "NA"},
	m6_work_queue: {type : String, default: "NA"},
	ior_order_type: {type : String, default: "NA"},
	
	order_issued_date: Date,
	

	dependency_owner: {type : String, default: "NA"},
	startDepDate: {type : String, default: "NA"},
	endDepDate: {type : String, default: "NA"},
	remarks: {type : String, default: "NA"},
	
	assigned: {type : String, default: "NA"},
	
	order_status: {type : String, default: "NA"},
	vp_approval: {type : String, default: "NA"},
	configCompDate: {type : String, default: "NA"},
	testCompDate: {type : String, default: "NA"},
	hanging_deletion: {type : String, default: "NA"},
	
	isCompleted: Boolean,
	isEditing: Boolean


	
});


module.exports.Todo = Todo;