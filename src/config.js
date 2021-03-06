import angular from 'angular';
import uiRouter from 'angular-ui-router';
import todoFactory from 'factories/todo-factory';
import todosController from 'todos/todos';
import todoFilter from 'factories/todo-filter';

import sdnwnocFactory from 'factories/sdnwnoc-factory';
import sdnwnocsController from 'sdnwnocs/sdnwnocs';
import sdnwnocFilter from 'factories/sdnwnoc-filter';

import wtdFactory from 'factories/wtd-factory';
import wtdsController from 'wtds/wtds';
import wtdFilter from 'factories/wtd-filter';

const app = angular.module('app', [uiRouter, todoFactory.name, todoFilter.name, sdnwnocFactory.name, sdnwnocFilter.name, wtdFactory.name, wtdFilter.name]);

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('wtd', {
            url: '/wtd',
            template: require('wtds/wtds.html'),
            controller: wtdsController
            
        })
        .state('sdnwnoc', {
            url: '/sdnwnoc',
            template: require('sdnwnocs/sdnwnocs.html'),
            controller: sdnwnocsController
        })
        .state('sdcnoc', {
            url: '/sdcnoc',
            template: require('todos/todos.html'),
            controller: todosController
        })
        .state('main', {
            url: '/',
            template: require('about/about.html')
        });

    $locationProvider.html5Mode(true);
});

export default app;
