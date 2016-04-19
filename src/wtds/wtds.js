import _ from 'lodash';	
import moment from 'moment';

export default function($scope, wtdFactory, $filter){

    let params = {
        createHasInput: false
        //isChecked: false
        
    };	
    //console.log(wtdFactory.createTask);

	//$scope.wtds = [
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
	//wtdFactory2.logs();

	$scope.load = function () {
        alert("load event detected!");
    }

	$filter('wtdFilter')();

    $scope.onGenReport = wtd => {


		var date3 = $scope.toTimeStamp(wtd.configCompDate);
		var date1 = $scope.toTimeStamp(wtd.order_issued_date);
		var date2 = $scope.toTimeStamp(wtd.crfs_date);


    	//CRAMMER REPORT
    	if(wtd.nims_id!="NA"){

    		if((wtd.startDepDate!="NA")&&(wtd.endDepDate!="NA")){
    			wtd.TAT = ([$scope.toTimeStamp(wtd.configCompDate) - $scope.toTimeStamp(wtd.order_issued_date)]-[$scope.toTimeStamp(wtd.endDepDate) - $scope.toTimeStamp(wtd.startDepDate)])/86400000;
    		}
    		else{
    			wtd.TAT = ($scope.toTimeStamp(wtd.configCompDate) - $scope.toTimeStamp(wtd.order_issued_date))/86400000;

    		}


    		if(wtd.order_type == 'Backbone'){
    			if(wtd.TAT <= 5){
    				wtd.TAT_status = "Within TAT";
    			}
    			else{
    				wtd.TAT_status = "Outside TAT";
    			}
    		}
    		else{
    			if(wtd.TAT<=1){
    				wtd.TAT_status = "Within TAT";
    			}
    			else{
    				wtd.TAT_status = "Outside TAT";
    			}
    			
    		}
    		if(wtd.circuit_action_type == 'Cancel'){
    			wtd.order_type = "Termination Order";
    		}
    		else{
    			if(wtd.service_type == "*N/A*"){
    				wtd.order_type = "Backbone";
    			}
    			else{
    				if((wtd.service_type == "VTS")||(wtd.service_type == "VTSPREM")||(wtd.service_type == "ENTVTS")){

    					wtd.order_type = "VOICE";
    				}
    				else{
    					if((wtd.service_type == "GLOBETH")||(wtd.service_type == "LOLA")){
    						wtd.order_type = "DGE";
    					}
    					else{
    						wtd.order_type = "IPLC";
    					}
    				}
    			}
    		}
    	}


    	//VIZNET REPORT

    	if(wtd.viznet_id != "NA"){

    		//VIZNET TAT

    		if((wtd.startDepDate!="NA")&&(wtd.endDepDate!="NA")){
    			wtd.TAT = ([$scope.toTimeStamp(wtd.configCompDate) - $scope.toTimeStamp(wtd.order_issued_date)]-[$scope.toTimeStamp(wtd.endDepDate) - $scope.toTimeStamp(wtd.startDepDate)])/86400000;
    		}
    		else{
    			wtd.TAT = ($scope.toTimeStamp(wtd.configCompDate) - $scope.toTimeStamp(wtd.order_issued_date))/86400000;

    		}

    		//VIZNET TAT STATUS

			if(wtd.TAT <= 1){
				wtd.TAT_status = "Within TAT";
			}
			else{
				wtd.TAT_status = "Outside TAT";
			}
		


    		if((wtd.circuit_action_type == 'Change of BSO')||(wtd.circuit_action_type == 'Media Route Change')||(wtd.circuit_action_type == 'Shifting Of Local Loop')){
    			wtd.ot_viznet = "Shifting Order";
    		}
    		else{
    			if(wtd.circuit_action_type == 'Order Fullfillment'){
    				wtd.order_type = "New Order";
    			}
    			else{
    				if((wtd.circuit_action_type == 'Terminate Circuit')||(wtd.circuit_action_type == 'Ceased')){
    					wtd.order_type = "Termination Order";
    				}
    				else{
    					wtd.order_type = "NA";
    				}
    			}
    		}

    		if((wtd.service_type == 'Interswitch')||(wtd.service_type == 'Singaling Link')||(wtd.service_type == 'Voice National')||(wtd.service_type == 'Voice International')){
    			wtd.ent = "VOICE";
    		}
    		else{
    			if((wtd.service_type == 'IPLC')||(wtd.service_type  == 'IPLC For Call Centers Service')||(wtd.service_type = 'ILL')||(wtd.service_type = 'MMR/Cross Connect')||(wtd.service_type = 'INSTACC')){
    				wtd.ent = "IPLC";
    			}
    			else{
    				wtd.ent = "DGE";
    			}
    		}

    	}


    	//M6 Report
    	if(wtd.m6_copf_id != 'NA'){


    		
    		if(wtd.circuit_action_type=='TERMINATE'){
    			wtd.order_type = "Termination Order";
    		}
    		else{
    			if((wtd.circuit_action_type=='BSO Change')||(wtd.circuit_action_type=='LM Shifting')){

    				wtd.order_type = "Shifting Order";

    			}
    			else{
    				wtd.order_type = "New Order";
    			}
    		}

    		wtd.ent = wtd.service_type;

    		//m6 TAT with CRFS
    		if((wtd.order_type=='New Order')||(wtd.order_type=='Shifting Order')){
    			wtd.TAT = (date3-date1)/86400000;
    		}
    		else{
    			if(wtd.order_type=='Termination Order'){
    				if(date2>=date1){
    					wtd.TAT = (date3-date2)/86400000 - 1;
    				}
    				else{
    					wtd.TAT = (date3-date1-1)/86400000 -1;
    				}
    			}
    		}

    		if(wtd.TAT < 0){
    			wtd.TAT = 0;
    		}

    		//m6 TAT STATUS
    		if(wtd.TAT <= 1){
				wtd.TAT_status = "Within TAT";
			}
			else{
				wtd.TAT_status = "Outside TAT";
			}

    	}////M6 end


    	//IOR REPORT

    	if(wtd.ior_id!="NA"){

    		wtd.order_type = 'IOR-IP/TX Order';

    		if((wtd.startDepDate!="NA")&&(wtd.endDepDate!="NA")){
    			wtd.TAT = ([$scope.toTimeStamp(wtd.configCompDate) - $scope.toTimeStamp(wtd.order_issued_date)]-[$scope.toTimeStamp(wtd.endDepDate) - $scope.toTimeStamp(wtd.startDepDate)])/86400000;
    		}
    		else{
    			wtd.TAT = ($scope.toTimeStamp(wtd.configCompDate) - $scope.toTimeStamp(wtd.order_issued_date))/86400000;

    		}

    		//IOR TAT STATUS

			if(wtd.TAT <= 1){
				wtd.TAT_status = "Within TAT";
			}
			else{
				wtd.TAT_status = "Outside TAT";
			}


    	}

    	//nccm report

		if(wtd.nccm_id!="NA"){

    		//wtd.order_type = 'IOR-IP/TX Order';

    		if((wtd.startDepDate!="NA")&&(wtd.endDepDate!="NA")){
    			wtd.TAT = ([$scope.toTimeStamp(wtd.configCompDate) - $scope.toTimeStamp(wtd.order_issued_date)]-[$scope.toTimeStamp(wtd.endDepDate) - $scope.toTimeStamp(wtd.startDepDate)])/86400000;
    		}
    		else{
    			wtd.TAT = ($scope.toTimeStamp(wtd.configCompDate) - $scope.toTimeStamp(wtd.order_issued_date))/86400000;

    		}

    		//NCCM TAT STATUS

			if(wtd.TAT <= 1){
				wtd.TAT_status = "Within TAT";
			}
			else{
				wtd.TAT_status = "Outside TAT";
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

	wtdFactory.getTasks($scope);

	$scope.onCompletedClick = wtd => {
		wtd.isCompleted=!wtd.isCompleted;
	};

	
	$scope.onEditClick = wtd => {
		wtd.isEditing = true;
		wtd.updatedTask1 = wtd.dependency_owner;
		wtd.updatedTask2 = wtd.startDepDate;
		wtd.updatedTask3 =	wtd.endDepDate;
		wtd.updatedTask4 = wtd.remarks;
		wtd.updatedTask5 = wtd.assigned;
		wtd.updatedTask6 = wtd.order_status;
		wtd.updatedTask7 =	wtd.vp_approval
		wtd.updatedTask8 = wtd.configCompDate;
		wtd.updatedTask9 = wtd.testCompDate;
		wtd.updatedTask10 = wtd.hanging_deletion;
	};

	$scope.onCancelClick = wtd => {
		wtd.isEditing = false;
	};

	const { createTask, updateTask, deleteTask, watchCreateTaskInput} = wtdFactory;



	$scope.createTask = _.partial(createTask, $scope , params);

	$scope.updateTask = _.partial(updateTask, $scope); 

	$scope.deleteTask = _.partial(deleteTask, $scope);

	$scope.$watch('createTaskInput', _.partial(watchCreateTaskInput, params, $scope));

	//wtdFilter.dateFilter;
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