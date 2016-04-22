var mongoose = require('mongoose'); 
var Sdnwnoc = require('server/db/db_sdnwnocs').Sdnwnoc;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    Sdnwnoc.find({ $and : [ {$or: [ {'process_type': 'BTNCCM'  }, { 'process_type':'EOREQUIPTX' } ]}, { $or: [{'task_name':'Eor_Equip_Tx_Provisioning_VerifyPhysicalAT'},{'task_name':'NCCM_BM_Tx_ConfigureTxServiceInPEWindow'},{'task_name':'EOR_Equip_Tx_Termination_DecomissionLogicalresources'}]}] },function(err, results) {

        if (err) { console.log(err); }

        res.send({ sdnwnocs: results });
    });
});

router.post('/', function(req, res) {
    var sdnwnoc = new Sdnwnoc(req.body);
    sdnwnoc.save(function(err) {
        if (err) { console.log(err); }

        res.send('sdnwnoc saved');
    });
});

router.put('/:id', function (req,res) {
	var id = req.params.id;
	Sdnwnoc.update( {_id : mongoose.Types.ObjectId(id)}, {
        $set: { nccm_details: req.body.nccm_details, nccm_type: req.body.nccm_type, city: req.body.city, nsa_prepared: req.body.nsa_prepared, nsa_prepared_by_1: req.body.nsa_prepared_by_1, nsa_prepared_by_2: req.body.nsa_prepared_by_2, no_of_vc_12: req.body.no_of_vc_12, no_of_vc_3: req.body.no_of_vc_3, no_of_vc_4: req.body.no_of_vc_4, nsa_plan_revision: req.body.nsa_plan_revision, nsa_plan_revision_reason: req.body.nsa_plan_revision_reason, nccm_schedule: req.body.nccm_schedule, nccm_execution: req.body.nccm_execution, executed_by: req.body.executed_by, execution_plan_revision: req.body.execution_plan_revision, execution_plan_revision_reason: req.body.execution_plan_revision_reason, hanging_deletion: req.body.hanging_deletion, hanging_deleted_by: req.body.hanging_deleted_by, remarks: req.body.remarks, nccm_status: req.body.nccm_status, nccm_id: req.body.nccm_id, eor_id: req.body.eor_id, eor_type: req.body.eor_type, node_name: req.body.name, node_ip: req.body.node_ip, node_type: req.body.node_type, node_bw: req.body.node_bw, nw_integration: req.body.nw_integration, nw_integration_by: req.body.nw_integration_by, ems_upload: req.body.ems_upload, ems_upload_by: req.body.ems_upload_by, cramer_upload: req.body.cramer_upload, cramer_upload_by: req.body.cramer_upload_by, netp_upload: req.body.netp_upload, netp_upload_by: req.body.netp_upload_by, eor_released: req.body.eor_released, ems_deletion: req.body.ems_deletion, ems_deletion_by: req.body.ems_deletion_by, netp_deletion: req.body.netp_deletion, netp_deletion_by: req.body.netp_deletion_by, dependency: req.body.dependency, dependency_found: req.body.dependency_found, dependency_cleared: req.body.dependency_cleared, eor_status: req.body.eor_status }
    }, function (err) {
        if (err) { console.log(err); }

        res.send('sdnwnoc updated');
    });
});

router.delete('/:id', function (req,res) {
	var id = req.params.id;
	Sdnwnoc.remove({ _id : mongoose.Types.ObjectId(id)}, function (err) {
		if(err){
			console.log(err);
		}
		res.send('sdnwnoc Deleted');
	})
})

module.exports = router;