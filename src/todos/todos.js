import _ from 'lodash';	
import moment from 'moment';

export default function($scope, todoFactory, $filter){

    let params = {
        createHasInput: false
        //isChecked: false
        
    };	
    //console.log(todoFactory.createTask);

	//$scope.todos = [
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
	//todoFactory2.logs();

	$scope.load = function () {
        alert("load event detected!");
    }

	$filter('todoFilter')();

    $scope.onGenReport = todo => {


		var date3 = $scope.toTimeStamp(todo.configCompDate);
		var date1 = $scope.toTimeStamp(todo.order_issued_date);
		var date2 = $scope.toTimeStamp(todo.crfs_date);


    	//CRAMMER REPORT
    	if(todo.nims_id!="NA"){

    		if((todo.startDepDate!="NA")&&(todo.endDepDate!="NA")){
    			todo.TAT = ([$scope.toTimeStamp(todo.configCompDate) - $scope.toTimeStamp(todo.order_issued_date)]-[$scope.toTimeStamp(todo.endDepDate) - $scope.toTimeStamp(todo.startDepDate)])/86400000;
    		}
    		else{
    			todo.TAT = ($scope.toTimeStamp(todo.configCompDate) - $scope.toTimeStamp(todo.order_issued_date))/86400000;

    		}


    		if(todo.order_type == 'Backbone'){
    			if(todo.TAT <= 5){
    				todo.TAT_status = "Within TAT";
    			}
    			else{
    				todo.TAT_status = "Outside TAT";
    			}
    		}
    		else{
    			if(todo.TAT<=1){
    				todo.TAT_status = "Within TAT";
    			}
    			else{
    				todo.TAT_status = "Outside TAT";
    			}
    			
    		}
    		if(todo.circuit_action_type == 'Cancel'){
    			todo.order_type = "Termination Order";
    		}
    		else{
    			if(todo.service_type == "*N/A*"){
    				todo.order_type = "Backbone";
    			}
    			else{
    				if((todo.service_type == "VTS")||(todo.service_type == "VTSPREM")||(todo.service_type == "ENTVTS")){

    					todo.order_type = "VOICE";
    				}
    				else{
    					if((todo.service_type == "GLOBETH")||(todo.service_type == "LOLA")){
    						todo.order_type = "DGE";
    					}
    					else{
    						todo.order_type = "IPLC";
    					}
    				}
    			}
    		}
    	}


    	//VIZNET REPORT

    	if(todo.viznet_id != "NA"){

    		//VIZNET TAT

    		if((todo.startDepDate!="NA")&&(todo.endDepDate!="NA")){
    			todo.TAT = ([$scope.toTimeStamp(todo.configCompDate) - $scope.toTimeStamp(todo.order_issued_date)]-[$scope.toTimeStamp(todo.endDepDate) - $scope.toTimeStamp(todo.startDepDate)])/86400000;
    		}
    		else{
    			todo.TAT = ($scope.toTimeStamp(todo.configCompDate) - $scope.toTimeStamp(todo.order_issued_date))/86400000;

    		}

    		//VIZNET TAT STATUS

			if(todo.TAT <= 1){
				todo.TAT_status = "Within TAT";
			}
			else{
				todo.TAT_status = "Outside TAT";
			}
		


    		if((todo.circuit_action_type == 'Change of BSO')||(todo.circuit_action_type == 'Media Route Change')||(todo.circuit_action_type == 'Shifting Of Local Loop')){
    			todo.ot_viznet = "Shifting Order";
    		}
    		else{
    			if(todo.circuit_action_type == 'Order Fullfillment'){
    				todo.order_type = "New Order";
    			}
    			else{
    				if((todo.circuit_action_type == 'Terminate Circuit')||(todo.circuit_action_type == 'Ceased')){
    					todo.order_type = "Termination Order";
    				}
    				else{
    					todo.order_type = "NA";
    				}
    			}
    		}

    		if((todo.service_type == 'Interswitch')||(todo.service_type == 'Singaling Link')||(todo.service_type == 'Voice National')||(todo.service_type == 'Voice International')){
    			todo.ent = "VOICE";
    		}
    		else{
    			if((todo.service_type == 'IPLC')||(todo.service_type  == 'IPLC For Call Centers Service')||(todo.service_type = 'ILL')||(todo.service_type = 'MMR/Cross Connect')||(todo.service_type = 'INSTACC')){
    				todo.ent = "IPLC";
    			}
    			else{
    				todo.ent = "DGE";
    			}
    		}

    	}


    	//M6 Report
    	if(todo.m6_copf_id != 'NA'){


    		
    		if(todo.circuit_action_type=='TERMINATE'){
    			todo.order_type = "Termination Order";
    		}
    		else{
    			if((todo.circuit_action_type=='BSO Change')||(todo.circuit_action_type=='LM Shifting')){

    				todo.order_type = "Shifting Order";

    			}
    			else{
    				todo.order_type = "New Order";
    			}
    		}

    		todo.ent = todo.service_type;

    		//m6 TAT with CRFS
    		if((todo.order_type=='New Order')||(todo.order_type=='Shifting Order')){
    			todo.TAT = (date3-date1)/86400000;
    		}
    		else{
    			if(todo.order_type=='Termination Order'){
    				if(date2>=date1){
    					todo.TAT = (date3-date2)/86400000 - 1;
    				}
    				else{
    					todo.TAT = (date3-date1-1)/86400000 -1;
    				}
    			}
    		}

    		if(todo.TAT < 0){
    			todo.TAT = 0;
    		}

    		//m6 TAT STATUS
    		if(todo.TAT <= 1){
				todo.TAT_status = "Within TAT";
			}
			else{
				todo.TAT_status = "Outside TAT";
			}

    	}////M6 end


    	//IOR REPORT

    	if(todo.ior_id!="NA"){

    		todo.order_type = 'IOR-IP/TX Order';

    		if((todo.startDepDate!="NA")&&(todo.endDepDate!="NA")){
    			todo.TAT = ([$scope.toTimeStamp(todo.configCompDate) - $scope.toTimeStamp(todo.order_issued_date)]-[$scope.toTimeStamp(todo.endDepDate) - $scope.toTimeStamp(todo.startDepDate)])/86400000;
    		}
    		else{
    			todo.TAT = ($scope.toTimeStamp(todo.configCompDate) - $scope.toTimeStamp(todo.order_issued_date))/86400000;

    		}

    		//IOR TAT STATUS

			if(todo.TAT <= 1){
				todo.TAT_status = "Within TAT";
			}
			else{
				todo.TAT_status = "Outside TAT";
			}


    	}

    	//nccm report

		if(todo.nccm_id!="NA"){

    		//todo.order_type = 'IOR-IP/TX Order';

    		if((todo.startDepDate!="NA")&&(todo.endDepDate!="NA")){
    			todo.TAT = ([$scope.toTimeStamp(todo.configCompDate) - $scope.toTimeStamp(todo.order_issued_date)]-[$scope.toTimeStamp(todo.endDepDate) - $scope.toTimeStamp(todo.startDepDate)])/86400000;
    		}
    		else{
    			todo.TAT = ($scope.toTimeStamp(todo.configCompDate) - $scope.toTimeStamp(todo.order_issued_date))/86400000;

    		}

    		//NCCM TAT STATUS

			if(todo.TAT <= 1){
				todo.TAT_status = "Within TAT";
			}
			else{
				todo.TAT_status = "Outside TAT";
			}


    	}

    	

    }

	
	$scope.toTimeStamp = function(date) {
	if(date == undefined){return 0;}
	else {
	    var dateSplitted = String(date).split('-'); // date must be in DD-MM-YYYY format
	    var formattedDate = dateSplitted[1]+'/'+ String(dateSplitted[2]).split('T')[0] +'/'+dateSplitted[0];
	    return new Date(formattedDate).getTime();
	}
  };

	todoFactory.getTasks($scope);

	$scope.onCompletedClick = todo => {
		todo.isCompleted=!todo.isCompleted;
	};

	
	$scope.onEditClick = todo => {
		todo.isEditing = true;
		todo.updatedTask1 = todo.dependency_owner;
		todo.updatedTask2 = todo.startDepDate;
		todo.updatedTask3 =	todo.endDepDate;
		todo.updatedTask4 = todo.remarks;
		todo.updatedTask5 = todo.assigned;
		todo.updatedTask6 = todo.order_status;
		todo.updatedTask7 =	todo.vp_approval
		todo.updatedTask8 = todo.configCompDate;
		todo.updatedTask9 = todo.testCompDate;
		todo.updatedTask10 = todo.hanging_deletion;
	};

	$scope.onCancelClick = todo => {
		todo.isEditing = false;
	};

	const { createTask, updateTask, deleteTask, watchCreateTaskInput} = todoFactory;



	$scope.createTask = _.partial(createTask, $scope , params);

	$scope.updateTask = _.partial(updateTask, $scope); 

	$scope.deleteTask = _.partial(deleteTask, $scope);

	$scope.$watch('createTaskInput', _.partial(watchCreateTaskInput, params, $scope));

	//todoFilter.dateFilter;
	$scope.isCrammerChecked = true;
	$scope.isViznetChecked = true;
	$scope.isM6Checked = true;
	$scope.isBPM_IORChecked = true;
	$scope.isBPM_NCCMChecked = true;

	var truth = [$scope.isCrammerChecked, $scope.isViznetChecked, $scope.isM6Checked, $scope.isBPM_IORChecked, $scope.isBPM_NCCMChecked];
	
	var value = ["","","","",""]
	
	$scope.search = { nims_id: value[0] , viznet_id : value[1] , m6_copf_id : value[2] , ior_id : value[3] , nccm_id : value[4]};

    $scope.onM6Click = () => {
		
		$scope.isM6Checked = !$scope.isM6Checked;
		truth = [$scope.isCrammerChecked, $scope.isViznetChecked, $scope.isM6Checked, $scope.isBPM_IORChecked, $scope.isBPM_NCCMChecked];

		for(var i=0;i<5;i++){

			if(truth[i] == true){
				value[i]="";
			}
			else{
				value[i]="NA";
			}

		}
		$scope.search = { nims_id: value[0] , viznet_id : value[1] , m6_copf_id : value[2] , ior_id : value[3] , nccm_id : value[4]};
		console.log($scope.search);
	};



    $scope.onCrammerClick = () => {
		
		$scope.isCrammerChecked = !$scope.isCrammerChecked;
		truth = [$scope.isCrammerChecked, $scope.isViznetChecked, $scope.isM6Checked, $scope.isBPM_IORChecked, $scope.isBPM_NCCMChecked];
			
		console.log($scope.isCrammerChecked);

		for(var i=0;i<5;i++){

			if(truth[i] == true){
				value[i]="";
			}
			else{
				value[i]="NA";
			}

		}
		$scope.search = { nims_id: value[0] , viznet_id : value[1] , m6_copf_id : value[2] , ior_id : value[3] , nccm_id : value[4]};
		console.log($scope.search);
	};


    $scope.onViznetClick = () => {
		
		$scope.isViznetChecked = !$scope.isViznetChecked;
		truth = [$scope.isCrammerChecked, $scope.isViznetChecked, $scope.isM6Checked, $scope.isBPM_IORChecked, $scope.isBPM_NCCMChecked];
		
		console.log($scope.isViznetChecked);

		for(var i=0;i<5;i++){

			if(truth[i] == true){
				value[i]="";
			}
			else{
				value[i]="NA";
			}

		}
		$scope.search = { nims_id: value[0] , viznet_id : value[1] , m6_copf_id : value[2] , ior_id : value[3] , nccm_id : value[4]};
		console.log($scope.search);
	};


    $scope.onBPM_IORClick = () => {
		
		$scope.isBPM_IORChecked = !$scope.isBPM_IORChecked;
		truth = [$scope.isCrammerChecked, $scope.isViznetChecked, $scope.isM6Checked, $scope.isBPM_IORChecked, $scope.isBPM_NCCMChecked];
		
		console.log($scope.isBPM_IORChecked);

		for(var i=0;i<5;i++){

			if(truth[i] == true){
				value[i]="";
			}
			else{
				value[i]="NA";
			}

		}
		$scope.search = { nims_id: value[0] , viznet_id : value[1] , m6_copf_id : value[2] , ior_id : value[3] , nccm_id : value[4]};
		console.log($scope.search);
	};


    $scope.onBPM_NCCMClick = () => {
		
		$scope.isBPM_NCCMChecked = !$scope.isBPM_NCCMChecked;
		truth = [$scope.isCrammerChecked, $scope.isViznetChecked, $scope.isM6Checked, $scope.isBPM_IORChecked, $scope.isBPM_NCCMChecked];
		
		console.log($scope.isBPM_NCCMChecked);

		for(var i=0;i<5;i++){

			if(truth[i] == true){
				value[i]="";
			}
			else{
				value[i]="NA";
			}

		}
		$scope.search = { nims_id: value[0] , viznet_id : value[1] , m6_copf_id : value[2] , ior_id : value[3] , nccm_id : value[4]};
		console.log($scope.search);
	};



}