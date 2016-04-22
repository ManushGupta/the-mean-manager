import angular from 'angular';

const wtdFactory = angular.module('app.wtdFactory',[])

.factory('wtdFactory', ($http) => {


	function getTasks ($scope) {

		$http.get('/wtds').success(response => {
			$scope.wtds = response.wtds;
			console.log($scope.wtds);
		});
	}

	//$scope.getArray = getTasks($scope);


	function createTask ($scope , params) {
        if (!$scope.createTaskInput) { return; }

        $http.post('/wtds', {
            SrNo: $scope.createTaskInput,
            isCompleted: false,
            isEditing: false
        }).success(response => {
            getTasks($scope);
            $scope.createTaskInput = '';
        });

        // params.createHasInput = false;
        // $scope.createTaskInput = '';
    }

	function updateTask ($scope, wtd){
		//wtd.task = wtd.updatedTask;
		//wtd.isEditing = false;

		$http.put(`/wtds/${wtd._id}`, { tiger_id: wtd.updatedTask1, viznetm6id: wtd.updatedTask2, gam_id : wtd.updatedTask3, mrc_converted : wtd.updatedTask4, nrc_converted : wtd.updatedTask5, sales_region : wtd.updatedTask6, customer_name : wtd.updatedTask7, program_manager : wtd.updatedTask8, provisioner_name : wtd.updatedTask9, inbasket_date : wtd.updatedTask10, wtd_owner_name : wtd.updatedTask11, service_type : wtd.updatedTask12, e2e_testing_date : wtd.updatedTask13, turn_up_date : wtd.updatedTask14, activation_date : wtd.updatedTask15, activity_progress_log : wtd.updatedTask16, current_dependency : wtd.updatedTask17, program_manager_input : wtd.updatedTask18, tiger_status : wtd.updatedTask19, viznetm6status : wtd.updatedTask20, team_status : wtd.updatedTask21}).success(
			response => {
				getTasks($scope);
				wtd.isEditing = false;
			});
	}

	function deleteTask($scope, wtdToDelete){
		//_.remove($scope.wtds, wtd => wtd.task === wtdToDelete.task);
		$http.delete(`/wtds/${wtdToDelete._id}`).success(
			response => {
				getTasks($scope);
			});

	}

	function watchCreateTaskInput(params, $scope, val) {
		const createHasInput = params.createHasInput;
		if(!val && createHasInput){
			$scope.wtds.pop();
			params.createHasInput = false;
		}

		if(val&& !createHasInput){
			$scope.wtds.push({task: val , isCompleted: false});
			params.createHasInput = true;

		}else if(val && createHasInput){
			$scope.wtds[$scope.wtds.length -1].SrNo = val;
		}
	}
	return {
		getTasks,
		createTask,
		updateTask,
		deleteTask,
		watchCreateTaskInput
	};
})

export default wtdFactory;