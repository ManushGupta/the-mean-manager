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
	$filter('todoFilter')();	

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