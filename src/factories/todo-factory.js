import angular from 'angular';

const todoFactory = angular.module('app.todoFactory',[])

.factory('todoFactory', ($http) => {


	function getTasks ($scope) {

		$http.get('/todos').success(response => {
			$scope.todos = response.todos;
		});
	}

	//$scope.getArray = getTasks($scope);


	function createTask ($scope , params) {
        if (!$scope.createTaskInput) { return; }

        $http.post('/todos', {
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

	function updateTask ($scope, todo){
		//todo.task = todo.updatedTask;
		//todo.isEditing = false;

		$http.put(`/todos/${todo._id}`, { dependency_owner: todo.updatedTask1, startDepDate: todo.updatedTask2, endDepDate : todo.updatedTask3, remarks : todo.updatedTask4, assigned : todo.updatedTask5, order_status : todo.updatedTask6, vp_approval : todo.updatedTask7, configCompDate : todo.updatedTask8, testCompDate : todo.updatedTask9, hanging_deletion : todo.updatedTask10}).success(
			response => {
				getTasks($scope);
				todo.isEditing = false;
			});
	}

	function deleteTask($scope, todoToDelete){
		//_.remove($scope.todos, todo => todo.task === todoToDelete.task);
		$http.delete(`/todos/${todoToDelete._id}`).success(
			response => {
				getTasks($scope);
			});

	}

	function watchCreateTaskInput(params, $scope, val) {
		const createHasInput = params.createHasInput;
		if(!val && createHasInput){
			$scope.todos.pop();
			params.createHasInput = false;
		}

		if(val&& !createHasInput){
			$scope.todos.push({task: val , isCompleted: false});
			params.createHasInput = true;

		}else if(val && createHasInput){
			$scope.todos[$scope.todos.length -1].SrNo = val;
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

export default todoFactory;