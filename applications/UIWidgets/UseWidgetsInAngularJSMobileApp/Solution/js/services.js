//highlight
//highlight
'use strict';

/* Services */

angular.module('demoApp.services', [])
    .value('navigationItems', [
        {
            title: 'Week',
            text: 'Week',
            uri: '/week'
        },
        {
            title: 'About',
            text: 'About',
            uri: '/about'
        }
    ])
    .factory('currentViewInfo', ['$rootScope', 'navigationItems', function($rootScope, navigationItems) {
        var selectedIndex,
            viewTitle;
        
        $rootScope.$on('$routeChangeStart', function(event, nextLoc, currentLoc) {
            if(nextLoc.$$route) {
                selectedIndex = $.inArray(nextLoc.$$route.originalPath, $.map(navigationItems, function(item) {
                    return item.uri;
                }));
                if(selectedIndex > -1) {
                    viewTitle = navigationItems[selectedIndex].title;
                } else {
                    viewTitle = undefined;
                }
            }
        });

        return {
            getSelectedIndex: function() {
                return selectedIndex;
            },
            getTitle: function() {
                return viewTitle;
            }
        }
    }])
    .factory('menu', function() {
        var isVisible = false;

        return {
            getVisibility: function() {
                return isVisible;
            },
            setVisibility: function(value) {
                isVisible = value;
            },
            toggle: function() {
                isVisible = !isVisible;
            }
        }
    })
	.value('scheduleData', [
        {
            dayOfWeek: 'Monday',
            classes: [
                {
                    startTime: '8:30',
                    endTime: '9:45',
                    classTitle: 'Tech Lab'
                },
                {
                    startTime: '10:00',
                    endTime: '11:15',
                    classTitle: 'Exploratory'
                },
                {
                    startTime: '11:20',
                    endTime: '12:25',
                    classTitle: 'Motor'
                },
                {
                    startTime: '12:30',
                    endTime: '1:25',
                    classTitle: 'Lunch & Recess'
                },
                {
                    startTime: '1:30',
                    endTime: '2:55',
                    classTitle: 'Language Arts / Social Studies'
                }
            ]
        },
        {
            dayOfWeek: 'Tuesday',
            classes: [
                {
                    startTime: '8:30',
                    endTime: '9:45',
                    classTitle: 'Math'
                },
                {
                    startTime: '10:00',
                    endTime: '11:15',
                    classTitle: 'Science'
                },
                {
                    startTime: '11:20',
                    endTime: '12:20',
                    classTitle: 'Language Arts / Grammar'
                },
                {
                    startTime: '12:25',
                    endTime: '1:00',
                    classTitle: 'Lunch & Recess'
                },
                {
                    startTime: '1:05',
                    endTime: '2:10',
                    classTitle: 'Art'
                },
                {
                    startTime: '2:15',
                    endTime: '2:55',
                    classTitle: 'Advisory'
                }
            ]
        },
        {
            dayOfWeek: 'Wednesday',
            classes: [
                {
                    startTime: '8:30',
                    endTime: '9:30',
                    classTitle: 'Exploratory Mixed'
                },
                {
                    startTime: '9:35',
                    endTime: '10:45',
                    classTitle: 'Language Arts / Social Studies'
                },
                {
                    startTime: '10:55',
                    endTime: '12:00',
                    classTitle: 'Science'
                },
                {
                    startTime: '12:05',
                    endTime: '12:40',
                    classTitle: 'Lunch & Recess'
                },
                {
                    startTime: '12:45',
                    endTime: '1:40',
                    classTitle: 'Art'
                },
                {
                    startTime: '1:45',
                    endTime: '2:55',
                    classTitle: 'Math'
                }
            ]
        },
        {
            dayOfWeek: 'Thursday',
            classes: [
                {
                    startTime: '8:30',
                    endTime: '9:45',
                    classTitle: 'Language Arts / Grammar'
                },
                {
                    startTime: '10:00',
                    endTime: '11:15',
                    classTitle: 'Science'
                },
                {
                    startTime: '11:20',
                    endTime: '12:25',
                    classTitle: 'Motor'
                },
                {
                    startTime: '12:30',
                    endTime: '1:25',
                    classTitle: 'Lunch & Recess'
                },
                {
                    startTime: '1:30',
                    endTime: '2:55',
                    classTitle: 'Math'
                }
            ]
        },
        {
            dayOfWeek: 'Friday',
            classes: [
                {
                    startTime: '8:30',
                    endTime: '9:45',
                    classTitle: 'Science'
                },
                {
                    startTime: '10:00',
                    endTime: '11:15',
                    classTitle: 'Math'
                },
                {
                    startTime: '11:20',
                    endTime: '12:20',
                    classTitle: 'Language Arts / Social Studies'
                },
                {
                    startTime: '12:25',
                    endTime: '1:00',
                    classTitle: 'Lunch & Recess'
                },
                {
                    startTime: '1:05',
                    endTime: '2:10',
                    classTitle: 'Chorus'
                },
                {
                    startTime: '2:15',
                    endTime: '2:55',
                    classTitle: 'Advisory'
                }
            ]
        }
    ]);