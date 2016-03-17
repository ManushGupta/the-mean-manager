import angular from 'angular';
import moment from 'moment';
const todoFilter = angular.module('app.todoFilter',[])
.filter('todoFilter', () => {

	function dateFilter (){

		console.log("todo-filter is working");
	}

});

export default todoFilter;