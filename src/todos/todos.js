import _ from 'lodash';	
import moment from 'moment';

export default function($scope, todoFactory, $filter){

    let params = {
        createHasInput: false,
        fromDate : false,
        toDate : false
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

	$filter('todoFilter')();

	todoFactory.getTasks($scope);

	$scope.onCompletedClick = todo => {
		todo.isCompleted=!todo.isCompleted;
	};

	$scope.onEditClick = todo => {
		todo.isEditing = true;
		todo.updatedTask1 = todo.pending_with;
		todo.updatedTask2 = todo.Assigned;
		todo.updatedTask3 = todo.Pending;
		todo.updatedTask4 = todo.reason_of_pending;
	};

	$scope.onCancelClick = todo => {
		todo.isEditing = false;
	};

	const { createTask, updateTask, deleteTask, watchCreateTaskInput} = todoFactory;



	$scope.createTask = _.partial(createTask, $scope , params);

	$scope.updateTask = _.partial(updateTask, $scope); 

	$scope.deleteTask = _.partial(deleteTask, $scope);

	$scope.$watch('createTaskInput', _.partial(watchCreateTaskInput, params, $scope));

	todoFilter.dateFilter;


}