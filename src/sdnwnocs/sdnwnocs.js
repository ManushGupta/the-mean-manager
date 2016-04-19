import _ from 'lodash';	
import moment from 'moment';

export default function($scope, sdnwnocFactory, $filter){

    let params = {
        createHasInput: false
        //isChecked: false
        
    };	
    //console.log(sdnwnocFactory.createTask);

	//$scope.sdnwnocs = [
	//	{
	//		task : 'do dishes',
	//		isCompleted : false,
	//		isEditing : false
	//	},
	//	{
	//		task: 'walk the dog',
	//		isCompleted :  true, 
	//		isEditing : false
	//	}
	//];
	//sdnwnocFactory2.logs();

	$scope.Range = function(start, end) {
    var result = [];
    for (var i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
	};

	$scope.load = function () {
        alert("load event detected!");
    }

	$filter('sdnwnocFilter')();


	$scope.toTimeStamp = function(date) {
	if(date == undefined){return 0;}
	else {
	    var dateSplitted = String(date).split('-'); // date must be in DD-MM-YYYY format
	    var formattedDate = dateSplitted[1]+'/'+ String(dateSplitted[2]).split('T')[0] +'/'+dateSplitted[0];
	    return new Date(formattedDate).getTime();
		}
 	};

	sdnwnocFactory.getTasks($scope);

	$scope.onCompletedClick = sdnwnoc => {
		sdnwnoc.isCompleted=!sdnwnoc.isCompleted;
	};

	
	$scope.onEditClick = sdnwnoc => {
		sdnwnoc.isEditing = true;
		sdnwnoc.updatedTask1 = sdnwnoc.nccm_details;
		sdnwnoc.updatedTask2 = sdnwnoc.nccm_type;
		sdnwnoc.updatedTask3 =	sdnwnoc.city;
		sdnwnoc.updatedTask4 = sdnwnoc.nsa_prepared;
		sdnwnoc.updatedTask5 = sdnwnoc.nsa_prepared_by_0;
		sdnwnoc.updatedTask6 = sdnwnoc.nsa_prepared_by_2;
		sdnwnoc.updatedTask7 = sdnwnoc.no_of_vc_12;
		sdnwnoc.updatedTask8 =	sdnwnoc.no_of_vc_3;	
		sdnwnoc.updatedTask9 = sdnwnoc.no_of_vc_4;
		sdnwnoc.updatedTask10 = sdnwnoc.nsa_plan_revision;
		sdnwnoc.updatedTask11 = sdnwnoc.nsa_plan_revision_reason;
		sdnwnoc.updatedTask12 = sdnwnoc.nccm_schedule;
		sdnwnoc.updatedTask13 = sdnwnoc.nccm_execution;
		sdnwnoc.updatedTask14 = sdnwnoc.executed_by;
		sdnwnoc.updatedTask15 = sdnwnoc.execution_plan_revision;
		sdnwnoc.updatedTask16 = sdnwnoc.execution_plan_revision_reason;
		sdnwnoc.updatedTask17 = sdnwnoc.hanging_deletion;
		sdnwnoc.updatedTask18 = sdnwnoc.hanging_deleted_by;
		sdnwnoc.updatedTask19 = sdnwnoc.remarks;
		sdnwnoc.updatedTask20 = sdnwnoc.nccm_status;
		sdnwnoc.updatedTask21 = sdnwnoc.nccm_id;
		sdnwnoc.updatedTask22 = sdnwnoc.eor_id;
		sdnwnoc.updatedTask23 = sdnwnoc.eor_type;
		sdnwnoc.updatedTask24 = sdnwnoc.node_name;
		sdnwnoc.updatedTask25 = sdnwnoc.node_ip;
		sdnwnoc.updatedTask26 = sdnwnoc.node_type;
		sdnwnoc.updatedTask27 = sdnwnoc.node_bw;
		sdnwnoc.updatedTask28 = sdnwnoc.nw_integration;
		sdnwnoc.updatedTask29 = sdnwnoc.nw_integration_by;
		sdnwnoc.updatedTask30 = sdnwnoc.ems_upload;
		sdnwnoc.updatedTask31 = sdnwnoc.ems_upload_by;
		sdnwnoc.updatedTask32 = sdnwnoc.cramer_upload;
		sdnwnoc.updatedTask33 = sdnwnoc.cramer_upload_by;
		sdnwnoc.updatedTask34 = sdnwnoc.netp_upload;
		sdnwnoc.updatedTask35 = sdnwnoc.netp_upload_by;
		sdnwnoc.updatedTask36 = sdnwnoc.eor_released;
		sdnwnoc.updatedTask37 = sdnwnoc.ems_deletion;
		sdnwnoc.updatedTask38 = sdnwnoc.ems_deletion_by;
		sdnwnoc.updatedTask39 = sdnwnoc.netp_deletion;
		sdnwnoc.updatedTask40 = sdnwnoc.netp_deletion_by;
		sdnwnoc.updatedTask41 = sdnwnoc.dependency;
		sdnwnoc.updatedTask42 = sdnwnoc.dependency_found;
		sdnwnoc.updatedTask43 = sdnwnoc.dependency_cleared;
		sdnwnoc.updatedTask44 = sdnwnoc.eor_status;
		
	};

	$scope.onCancelClick = sdnwnoc => {
		sdnwnoc.isEditing = false;
	};

	const { createTask, updateTask, deleteTask, watchCreateTaskInput} = sdnwnocFactory;



	$scope.createTask = _.partial(createTask, $scope , params);

	$scope.updateTask = _.partial(updateTask, $scope); 

	$scope.deleteTask = _.partial(deleteTask, $scope);

	$scope.$watch('createTaskInput', _.partial(watchCreateTaskInput, params, $scope));

	$scope.isBPM_EORChecked = true;
	$scope.isBPM_NCCMChecked = true;	

	var truth = [$scope.isBPM_EORChecked, $scope.isBPM_NCCMChecked];
	
	var value = ["",""]
	
	//$scope.search = { eor_id: value[0] , nccm_id : value[1]};

    


    $scope.onBPM_EORClick = () => {
		
		$scope.isBPM_EORChecked = !$scope.isBPM_EORChecked;


		if($scope.isBPM_EORChecked == true && $scope.isBPM_NCCMChecked == false){
			$scope.search = { process_type : "EOREQUIPTX"};
		}
		else if($scope.isBPM_EORChecked == false && $scope.isBPM_NCCMChecked == true){
			$scope.search = { process_type : "BTNCCM"};
		}

		
	};


    $scope.onBPM_NCCMClick = () => {
		
		$scope.isBPM_NCCMChecked = !$scope.isBPM_NCCMChecked;
		
		if($scope.isBPM_EORChecked == true && $scope.isBPM_NCCMChecked == false){
			$scope.search = { process_type : "EOREQUIPTX"};
		}
		else if($scope.isBPM_EORChecked == false && $scope.isBPM_NCCMChecked == true){
			$scope.search = { process_type : "BTNCCM"};
		}
		else{
			$scope.search = {};
		}



		
	};


	$scope.onGenReport = sdnwnoc => {


	 	if($scope.isBPM_NCCMChecked == true){

	 		var date1 = 0;
		 	var date2 = 0;

		 	if(sdnwnoc.nccm_execution != "NA"){
		 		date2 = $scope.toTimeStamp(sdnwnoc.nccm_execution);
		 	}
		 	if(sdnwnoc.nccm_schedule != "NA"){
		 		
				date1 = $scope.toTimeStamp(sdnwnoc.nccm_schedule);
		 	}

		 	if(date1!= 0 && date2 != 0){

		 		console.log(date1);

		 		sdnwnoc.TAT_wo_dep = (date2-date1)/86400000;
		 	
		 	}
		 	else{
		 		sdnwnoc.TAT_wo_dep = "NA";
		 	}

		 	if(sdnwnoc.TAT <= 1){
		 		sdnwnoc.TAT_status_wo_dep = "Within TAT";
		 	}
		 	else{
		 		sdnwnoc.TAT_status_wo_dep = "Outside TAT";
		 	}
	
	 	}
	 	
	

		if($scope.isBPM_EORChecked == true){
			if(sdnwnoc.eor_type == "ADD"){
				$scope.isAddType = true;
			}
			else if(sdnwnoc.eor_type == "DEL"){
				$scope.isAddType = false;
			}
		}


		if($scope.isBPM_EORChecked == true && $scope.isAddType ==true){


	 		var date1 = 0;
		 	var date4 = 0;
		 	var date2 = 0;
		 	var date3 = 0;

		 	if(sdnwnoc.netp_upload != "NA"){
		 		date4 = $scope.toTimeStamp(sdnwnoc.netp_upload);
		 	}
		 	if(sdnwnoc.dependency_cleared != "NA"){
		 		date3 = $scope.toTimeStamp(sdnwnoc.dependency_cleared);
		 	}

		 	if(sdnwnoc.dependency_found != "NA"){
		 		
				date2 = $scope.toTimeStamp(sdnwnoc.dependency_found);
		 	}

		 	if(sdnwnoc.nw_integration != "NA"){
		 		
				date1 = $scope.toTimeStamp(sdnwnoc.nw_integration);
		 	}

		 	if(date1!= 0 && date4 != 0){

		 		//console.log(date1);

		 		sdnwnoc.TAT_w_dep = (date4-date1)/86400000;
		 		if(date2!=0 && date3!=0){
		 			sdnwnoc.TAT_wo_dep = (date4-(date3-date2)-date1)/86400000;
		 		}
		 		else{
		 			sdnwnoc.TAT_wo_dep = "NA";
		 		}

		 	
		 	}


		 	else{
		 		sdnwnoc.TAT_w_dep = "NA";
		 	}

		 	if(sdnwnoc.TAT_w_dep <= 1){
		 		sdnwnoc.TAT_status_w_dep = "Within TAT";
		 	}
		 	else{
		 		sdnwnoc.TAT_status_w_dep = "Outside TAT";
		 	}

		 	if(sdnwnoc.TAT_wo_dep <= 1){
		 		sdnwnoc.TAT_status_wo_dep = "Within TAT";
		 	}
		 	else{
		 		sdnwnoc.TAT_status_wo_Dep = "Outside TAT";
		 	}
		
		}

		if($scope.isBPM_EORChecked == true && $scope.isAddType ==false){


	 		var date1 = 0;
		 	var date4 = 0;
		 	var date2 = 0;
		 	var date3 = 0;

		 	if(sdnwnoc.netp_deletion != "NA"){
		 		date4 = $scope.toTimeStamp(sdnwnoc.netp_deletion);
		 	}
		 	if(sdnwnoc.dependency_cleared != "NA"){
		 		date3 = $scope.toTimeStamp(sdnwnoc.dependency_cleared);
		 	}

		 	if(sdnwnoc.dependency_found != "NA"){
		 		
				date2 = $scope.toTimeStamp(sdnwnoc.dependency_found);
		 	}

		 	if(sdnwnoc.eor_released != "NA"){
		 		
				date1 = $scope.toTimeStamp(sdnwnoc.eor_released);
		 	}

		 	if(date1!= 0 && date4 != 0){

		 		//console.log(date1);

		 		sdnwnoc.TAT_w_dep = (date4-date1)/86400000;
		 		if(date2!=0 && date3!=0){
		 			sdnwnoc.TAT_wo_dep = (date4-(date3-date2)-date1)/86400000;
		 		}
		 		else{
		 			sdnwnoc.TAT_wo_dep = "NA";
		 		}

		 	
		 	}


		 	else{
		 		sdnwnoc.TAT_w_dep = "NA";
		 	}

		 	if(sdnwnoc.TAT_w_dep <= 1){
		 		sdnwnoc.TAT_status_w_dep = "Within TAT";
		 	}
		 	else{
		 		sdnwnoc.TAT_status_w_dep = "Outside TAT";
		 	}

		 	if(sdnwnoc.TAT_wo_dep <= 1){
		 		sdnwnoc.TAT_status_wo_dep = "Within TAT";
		 	}
		 	else{
		 		sdnwnoc.TAT_status_wo_Dep = "Outside TAT";
		 	}
		
		}


	 	
	}





}