import angular from 'angular';
import moment from 'moment';
const todoFilter = angular.module('app.todoFilter',[])
.filter('todoFilter', function() {
  return function() {
    return console.log("filter works")
  };
});

export default todoFilter;