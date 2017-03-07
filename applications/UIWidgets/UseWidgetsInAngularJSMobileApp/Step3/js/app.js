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
			//highlight
            .when('/week', {
                templateUrl: 'partials/week.html',
                controller: 'WeekCtrl',
                controllerAs: 'week'
            })
			//highlight
            .when('/about', {
                templateUrl: 'partials/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .otherwise({ redirectTo: '/week' });
    }]);
