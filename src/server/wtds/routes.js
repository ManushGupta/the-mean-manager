var mongoose = require('mongoose'); 
var Wtd = require('server/db/db_wtds').Wtd;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    Wtd.find(function(err, results) {
        if (err) { console.log(err); }

        res.send({ wtds: results });
    });
});

router.post('/', function(req, res) {
    var wtd = new Wtd(req.body);
    wtd.save(function(err) {
        if (err) { console.log(err); }

        res.send('wtd saved');
    });
});

router.put('/:id', function (req,res) {
	var id = req.params.id;
	Wtd.update( {_id : mongoose.Types.ObjectId(id)}, {
        $set: { tiger_id: req.body.tiger_id, viznetm6id: req.body.viznetm6id, gam_id : req.body.gam_id , mrc_converted : req.body.mrc_converted, nrc_converted : req.body.nrc_converted, sales_region : req.body.sales_region, customer_name : req.body.customer_name, program_manager : req.body.program_manager, provisioner_name : req.body.provisioner_name, inbasket_date : req.body.inbasket_date, wtd_owner_name : req.body.wtd_owner_name, service_type : req.body.service_type, e2e_testing_date : req.body.e2e_testing_date, turn_up_date : req.body.turn_up_date, activation_date : req.body.activation_date, activity_progress_log : req.body.activity_progress_log, current_dependency : req.body.current_dependency, program_manager_input : req.body.program_manager_input, tiger_status : req.body.tiger_status, viznetm6status : req.body.viznetm6status, team_status : req.body.team_status}
    }, function (err) {
        if (err) { console.log(err); }

        res.send('wtd updated');
    });
});

router.delete('/:id', function (req,res) {
	var id = req.params.id;
	Wtd.remove({ _id : mongoose.Types.ObjectId(id)}, function (err) {
		if(err){
			console.log(err);
		}
		res.send('wtd Deleted');
	})
})

module.exports = router;