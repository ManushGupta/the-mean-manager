import angular from 'angular';

const sdnwnocFactory = angular.module('app.sdnwnocFactory',[])

.factory('sdnwnocFactory', ($http) => {


	function getTasks ($scope) {

		$http.get('/sdnwnocs').success(response => {
			$scope.sdnwnocs = response.sdnwnocs;
		});
	}

	//$scope.getArray = getTasks($scope);


	function createTask ($scope , params) {
        if (!$scope.createTaskInput) { return; }

        $http.post('/sdnwnocs', {
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

	function updateTask ($scope, sdnwnoc){
		//sdnwnoc.task = sdnwnoc.updatedTask;
		//sdnwnoc.isEditing = false;

		$http.put(`/sdnwnocs/${sdnwnoc._id}`, { nccm_details : sdnwnoc.updatedTask1, nccm_type: sdnwnoc.updatedTask2 , city: sdnwnoc.updatedTask3, nsa_prepared: sdnwnoc.updatedTask4, nsa_prepared_by_1: sdnwnoc.updatedTask5, nsa_prepared_by_2: sdnwnoc.updatedTask6, no_of_vc_12: sdnwnoc.updatedTask7, no_of_vc_3: sdnwnoc.updatedTask8, no_of_vc_4: sdnwnoc.updatedTask9, nsa_plan_revision: sdnwnoc.updatedTask10, nsa_plan_revision_reason: sdnwnoc.updatedTask11, nccm_schedule: sdnwnoc.updatedTask12, nccm_execution: sdnwnoc.updatedTask13, executed_by: sdnwnoc.updatedTask14, execution_plan_revision: sdnwnoc.updatedTask15, execution_plan_revision_reason: sdnwnoc.updatedTask16, hanging_deletion: sdnwnoc.updatedTask17, hanging_deleted_by: sdnwnoc.updatedTask18, remarks: sdnwnoc.updatedTask19, nccm_status: sdnwnoc.updatedTask20, nccm_id: sdnwnoc.updatedTask21, eor_id: sdnwnoc.updatedTask22, eor_type: sdnwnoc.updatedTask23, node_name: sdnwnoc.updatedTask24, node_ip: sdnwnoc.updatedTask25, node_type: sdnwnoc.updatedTask26, node_bw: sdnwnoc.updatedTask27, nw_integration: sdnwnoc.updatedTask28, nw_integration_by: sdnwnoc.updatedTask29, ems_upload: sdnwnoc.updatedTask30, ems_upload_by: sdnwnoc.updatedTask31, cramer_upload: sdnwnoc.updatedTask32, cramer_upload_by: sdnwnoc.updatedTask33, netp_upload: sdnwnoc.updatedTask34, netp_upload_by: sdnwnoc.updatedTask35, eor_released: sdnwnoc.updatedTask36, ems_deletion: sdnwnoc.updatedTask37, ems_deletion_by: sdnwnoc.updatedTask38, netp_deletion: sdnwnoc.updatedTask39, netp_deletion_by: sdnwnoc.updatedTask40, dependency: sdnwnoc.updatedTask41, dependency_found: sdnwnoc.updatedTask42, dependency_cleared: sdnwnoc.updatedTask43, eor_status: sdnwnoc.updatedTask44}).success(
			response => {
				getTasks($scope);
				sdnwnoc.isEditing = false;
			});
	}

	function deleteTask($scope, sdnwnocToDelete){
		//_.remove($scope.sdnwnocs, sdnwnoc => sdnwnoc.task === sdnwnocToDelete.task);
		$http.delete(`/sdnwnocs/${sdnwnocToDelete._id}`).success(
			response => {
				getTasks($scope);
			});

	}

	function watchCreateTaskInput(params, $scope, val) {
		const createHasInput = params.createHasInput;
		if(!val && createHasInput){
			$scope.sdnwnocs.pop();
			params.createHasInput = false;
		}

		if(val&& !createHasInput){
			$scope.sdnwnocs.push({task: val , isCompleted: false});
			params.createHasInput = true;

		}else if(val && createHasInput){
			$scope.sdnwnocs[$scope.sdnwnocs.length -1].SrNo = val;
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

export default sdnwnocFactory;