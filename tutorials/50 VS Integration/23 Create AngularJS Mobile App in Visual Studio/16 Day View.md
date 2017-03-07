<article data-show="/Content/Applications/16_1/UIWidgets/UseWidgetsInAngularJSMobileApp/Step4/index.html" data-show-first="day.html">

Add the "Day" controller to the *controllers.js* file. This controller will provide a schedule on the currently displayed day for the "Day" view. The index of the currently displayed day is passed as a navigation parameter in the uri navigating to the "Day" view. Get this index by using the AngularJS [$routeParams](https://docs.angularjs.org/api/ngRoute/service/$routeParams) service within the "Day" controller.

    <!--JavaScript-->angular.module('Application1.controllers', [])
    //...
    .controller('DayCtrl', ['$routeParams', 'scheduleData', function($routeParams, scheduleData) {
        this.schedule = scheduleData[$routeParams.dayId];
    }]);

Add the *day.html* file to the **partials** folder to define the "Day" view's HTML template. Add a toolbar and a field set to the view.

- **Toolbar**  
Use the **dx-toolbar** directive to add the [Toolbar](/Documentation/ApiReference/UI_Widgets/dxToolbar/) widget. To define toolbar items, use the [dataSource](/Documentation/ApiReference/UI_Widgets/dxToolbar/Configuration/#dataSource) configuration option. Assign an array of two items. One of these items is a configuration object for displaying a toolbar button, the other - for displaying a view title on the toolbar.

        <!--HTML--><div dx-toolbar="{ items: [ {
                location: 'before',
                widget: 'dxButton',
                options: {
                    text: 'Week',
                    type: 'back',
                    onClick: day.getBackToWeek
                },
            },
            {
                location: 'center',
                text: day.schedule.dayOfWeek
            } ] }">
        </div>

- **Field Set**  
    Use the [field-set](/Documentation/ApiReference/UI_Widgets/CSS_Classes/#dx-fieldset) DevExtreme CSS class to display the schedule of the currently displayed day.

        <!--HTML--><div class="dx-fieldset">
            <table class="schedule">
                <tr>
                    <td></td>
                    <td>Times</td>
                    <td>Classes</td>
                </tr>
                <tr ng-repeat="class in day.schedule.classes">
                    <td>{{$index + 1}}.</td>
                    <td class="time-field">{{class.startTime}} - {{class.endTime}}</td>
                    <td>{{class.classTitle}}</td>
                </tr>
            </table>
        </div>
  
    In addition, you will need to define a pare of CSS classes within the **css**/*app.css* file.
    
        <!--CSS-->.schedule td { 
            padding: 10px;
        }
        .time-field {
            width: 40%;
        }
        .about-text {
            padding: 5px 10px;
        }
  
Configure the */day/:dayId* route within the application module configuration (in the **js**/*app.js* file) to navigate by the 'partials/day.html' URL and display the "Day" view managed by the "Day" controller.

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
                .when('/day/:dayId', {
                    templateUrl: 'partials/day.html',
                    controller: 'DayCtrl',
                    controllerAs: 'day'
                })		
                .otherwise({ redirectTo: '/week' });
        }]);

</article>