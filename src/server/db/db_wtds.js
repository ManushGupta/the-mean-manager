var mongoose = require('mongoose');

var db3 = mongoose.createConnection('mongodb://localhost/wtds');

	

var Wtd = db3.model('Todo',{
	
	tiger_id: {type : Number, default: 0},
	viznetm6id: {type : String, default: "NA"},
	gam_id : {type : String, default: "NA"}
	mrc_converted: {type : Number, default: 0},
	nrc_converted: {type : Number, default: 0}
	evolve_status: { type: String, default: "NA"},
	sales_region: {type: String, default:"NA"},
	customer_name: {type: String, default: "NA"},
	program_manager: {type : String, default: "NA"},
	provisioner_name: {type : String, default: "NA"},
	sales_region: {type : String, default: "NA"},
	wtd_owner_name: {type: String, default: "NA"},
	service_type: {type : String, default: "NA"}
	inbasket_date: Date,
	e2e_testing_date: Date,
	turn_up_date: Date,
	activation_date: Date,
	activity_progress_log:{type: String , default: "NA"},
	current_dependency: {type : String, default: "NA"},
	program_manager_input: {type:String, default:"NA"},
	tiger_status : {type: String, default: "NA"},
	viznetm6status: {type: String, default:"Na"},
	team_status: {type: String, default: "NA"},	
	isCompleted: Boolean,
	isEditing: Boolean


	
});


module.exports.Wtd = Wtd;