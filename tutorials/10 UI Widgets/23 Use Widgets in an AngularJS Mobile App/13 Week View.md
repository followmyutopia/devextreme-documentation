<article data-show="/Content/Applications/16_1/UIWidgets/UseWidgetsInAngularJSMobileApp/Step3/index.html" data-show-first="week.html">

The "Week" view is the root application view. So it should be accessible from the slide-out menu. Use the "Home" view as a template for the "Week" view. Rename the "Home" view to "Week" in the following places.

- Rename the **partials**/*home.html* file to **partials**/*week.html*.

- In the **js**/*controllers.js* file, rename the "HomeCtrl" controller to "WeekCtrl".

        <!--JavaScript-->angular.module('Application1.controllers', [])
            //...
            .controller('WeekCtrl', function() {
            })
            //...

- In the **js**/*services.js* file, modify a configuration of the "Home" navigation item - set the **title** option to *'Week'*, **text** - to *'Week'* and uri - to *'/week'*.

        <!--JavaScript-->angular.module('Application1.services', [])
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
            //...

- In the **js**/*app.js* file, modify a configuration of the route to the "Home" view - set the **templateUrl** option to *'partials/week.html'*, **controller** - to *'WeekCtrl'* and **controllerAs** - to *'week'*.

        <!--JavaScript-->angular.module('Application1', [
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
                    .otherwise({ redirectTo: '/week' });
            }]);

Open the **partials**/*week.html* file. Implement the "Week" view markup. Leave the [Toolbar](/Documentation/ApiReference/UI_Widgets/dxToolbar/) widget in this view, but replace the remaining content with the [List](/Documentation/ApiReference/UI_Widgets/dxList/) widget. Use the **dx-list** directive to add this widget.

    <!--HTML--><div ng-include="'partials/toolbar.html'"></div>
    <div class="view-content" dx-list="week.listOptions"></div>

Define the widget's configuration object within the "Week" controller in the following manner.

- **List Data Source**  
    To make this example simple, define data for the "Week" view's list widget locally. Add the "scheduleData" service to the application module.

        <!--JavaScript-->angular.module('Application1.services', [])
            //...
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
                //...
            ]);
    
    Then, add the "scheduleData" service to the "Week" controller's dependencies and specify the list's [dataSource](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#dataSource) option using this service.

        <!--JavaScript-->angular.module('Application1.controllers', [])
            //...
            .controller('WeekCtrl', ['$location', 'scheduleData', function($location, scheduleData) {
                var items = $.map(scheduleData, function(item, index) {
                    return {
                        index: index,
                        text: item.dayOfWeek
                    }
                });
                this.listOptions = {
                    items: items
                };	
            }])
            //...

- **List Item Click**  
Use the [onItemClick](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onItemClick) configuration option to specify a function that navigates to the "Day" view (it will be added further). Add the AngularJS [$location](https://docs.angularjs.org/api/ng/service/$location) service to the "Week" controller's dependencies and use it within the function to navigate to the  "Day" view. Pass the index of the chosen day as a navigation parameter so that data on the chosen day is available within the "Day" view's controller.

        <!--JavaScript-->angular.module('Application1.controllers', [])
            //...
            .controller('WeekCtrl', ['$location', 'scheduleData', function($location, scheduleData) {
                var items = $.map(scheduleData, function(item, index) {
                    return {
                        index: index,
                        text: item.dayOfWeek
                    }
                });
                this.listOptions = {
                    items: items,
                        onItemClick: function(e) {
                        $location.path('/day/' + e.itemData.index);
                    }
                };	
            }])
            //...

</article>