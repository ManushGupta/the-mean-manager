var mongoose = require('mongoose');
var db2 = mongoose.connect('mongodb://localhost/sdnwnocs');

	

var Sdnwnoc = db2.model('Sdnwnoc',{

	nccm_id: {type : String, default: "NA"}, 
	order_issued_date: Date,
	plan_released_by: String,

	nccm_details : {type : String, default : "NA"},
	nccm_type : {type: String, default: "NA"},
	city: {type: String, default:"NA"},
	nsa_prepared: {type: String, default:"NA"},
	nsa_prepared_by_1: {type : String, default : "NA"},
	nsa_prepared_by_2: {type : String, default : "NA"},
	no_of_vc_12 : {type : String ,default : "NA"},
	no_of_vc_3 : {type : String ,default : "NA"},
	no_of_vc_4 : {type : String ,default : "NA"},
	nsa_plan_revision : {type: String, default: "NA"},
	nsa_plan_revision_reason: {type: String, default:"NA"},
	nccm_schedule: {type: String, default:"NA"},
	nccm_execution: {type: String, default:"NA"},
	executed_by:{ type: String, default: "NA"},
	execution_plan_revision: { type : String, default : "NA"},
	execution_plan_revision_reason: { type : String, default : "NA"},
	hanging_deletion : {type: String, default:"NA"},
	hanging_deleted_by : {type : String, default : "NA"},
	remarks : {type : String, default : "NA"},
	nccm_status : { type:String, default : "NA"},
	eor_id : {type: String, default : "NA"},
	eor_type: {type: String, default : "NA"},
	node_name: {type: String, default : "NA"},
	node_ip: {type: String, default : "NA"},
	node_type: {type: String, default : "NA"},
	node_bw: {type: String, default : "NA"},
	nw_integration: {type: String, default : "NA"},
	nw_integration_by: {type: String, default : "NA"},
	ems_upload: {type: String, default : "NA"},
	ems_upload_by: {type: String, default : "NA"},
	cramer_upload: {type: String, default : "NA"},
	cramer_upload_by: {type: String, default : "NA"},
	netp_upload:{type: String, default : "NA"},
	netp_upload_by: {type: String, default : "NA"},
	dependency : {type: String, default : "NA"},
	dependency_found: {type: String, default : "NA"},
	dependency_cleared: {type: String, default : "NA"},
	eor_status: {type: String, default : "NA"},
	eor_released: {type: String, default : "NA"}, 
	ems_deletion: {type: String, default : "NA"},
	ems_deletion_by: {type: String, default : "NA"},
	netp_deletion: {type: String, default : "NA"},
	netp_deletion_by: {type: String, default : "NA"},
	isCompleted: Boolean,
	isEditing: Boolean
	
});

module.exports.Sdnwnoc = Sdnwnoc;