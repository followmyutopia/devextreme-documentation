'use strict';


// Declare app level module which depends on filters, and services
angular.module('Application1', [
        'ngRoute',
        'Application1.services',
        'Application1.controllers',
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
            .when('/day/:dayId', {
                templateUrl: 'partials/day.html',
                controller: 'DayCtrl',
                controllerAs: 'day'
            })
            .otherwise({ redirectTo: '/week' });
    }]);
