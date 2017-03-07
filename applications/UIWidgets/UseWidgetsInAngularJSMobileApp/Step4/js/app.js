'use strict';


// Declare app level module which depends on filters, and services
angular.module('demoApp', [
        'ngRoute',
        'demoApp.services',
        'demoApp.controllers',
	    'dx'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/week', {
                templateUrl: 'partials/week.html',
                controller: 'WeekCtrl',
                controllerAs: 'week'
            })
            .when('/about', {
                templateUrl: 'partials/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
			//highlight			
            .when('/day/:dayId', {
                templateUrl: 'partials/day.html',
                controller: 'DayCtrl',
                controllerAs: 'day'
            })
			//highlight			
            .otherwise({ redirectTo: '/week' });
    }]);
