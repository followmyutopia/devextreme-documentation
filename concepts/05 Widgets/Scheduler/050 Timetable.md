The **Scheduler** widget allows you to customize its timetable: to specify the time period for it and the duration of a single cell. For this purpose, use the [startDayHour](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#startDayHour), [endDayHour](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#endDayHour) and [cellDuration](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#cellDuration) options. Using the [firstDayOfWeek](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#firstDayOfWeek) option, you can define the day of the week that will be shown first.

---

#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#schedulerContainer").dxScheduler({
            dataSource: [{
                text: "Website Re-Design Plan",
                startDate: new Date(2016, 4, 25, 9, 30),
                endDate: new Date(2016, 4, 25, 11, 30)
            }, {
                text: "Book Flights to San Fran for Sales Trip",
                startDate: new Date(2016, 4, 25, 12, 0),
                endDate: new Date(2016, 4, 25, 13, 0)
            }, 
            // ...
            ],
            currentDate: new Date(2016, 4, 25),
            startDayHour: 8,
            endDayHour: 19,
            cellDuration: 60,
            firstDayOfWeek: 1
        });
    });

#####Angular

    <!--HTML-->
    <dx-scheduler
        [dataSource]="schedulerData"
        [currentDate]="currentDate"
        [startDayHour]="8"
        [endDayHour]="19"
        [cellDuration]="60"
        [firstDayOfWeek]="1">
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from 'devextreme-angular';
    // ...
    export class AppComponent  {
        schedulerData = [{
            text: "Website Re-Design Plan",
            startDate: new Date(2016, 4, 25, 9, 30),
            endDate: new Date(2016, 4, 25, 11, 30)
        }, {
            text: "Book Flights to San Fran for Sales Trip",
            startDate: new Date(2016, 4, 25, 12, 0),
            endDate: new Date(2016, 4, 25, 13, 0)
        }, 
        // ...
        ];
        currentDate = new Date(2016, 4, 25);
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

---

In addition, you can define custom templates for cells, time scales and date scales. For Angular, AngularJS and Knockout apps, DevExtreme provides a markup component called [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/). The following code shows how you can use **dxTemplate** to define templates for timetable parts.

---

#####Angular

    <!--HTML-->
    <dx-scheduler
        [dataSource]="schedulerData"
        [currentDate]="currentDate"
        [showAllDayPanel]="false"
        currentView="week"
        dataCellTemplate="dataCellTemplate"
        dateCellTemplate="dateCellTemplate"
        timeCellTemplate="timeCellTemplate">
        <div *dxTemplate="let data of 'dataCellTemplate'">
            <div style="width: 100%; height: 40px; background-color: rgba(86, 202, 133, 0.1);"></div>
        </div>
        <div *dxTemplate="let date of 'dateCellTemplate'">
            <b style="color: green">{{date.text}}</b>
        </div>
        <div *dxTemplate="let time of 'timeCellTemplate'">
            <i style="color: green">{{time.text}}</i>
        </div>
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from 'devextreme-angular';
    // ...
    export class AppComponent  {
        schedulerData = [{
            text: "His Girl Friday",
            startDate: new Date(2016, 4, 24, 9, 10),
            endDate: new Date(2016, 4, 24, 11, 20)
        }, {
            text: "Royal Wedding",
            startDate: new Date(2016, 4, 24, 10, 5),
            endDate: new Date(2016, 4, 24, 11, 30)
        }, 
        // ...
        ];
        currentDate = new Date(2016, 4, 24);
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

#####**AngularJS**

    <!--HTML--><div ng-controller="DemoController">
        <div dx-scheduler="{
            dataSource: schedulerData,
            currentDate: currentDate,
            showAllDayPanel: false,
            currentView: 'week',
            dataCellTemplate: 'dataCellTemplate',
            dateCellTemplate: 'dateCellTemplate',
            timeCellTemplate: 'timeCellTemplate'
        }" dx-item-alias="item">
            <div data-options="dxTemplate: { name: 'dataCellTemplate' }">
                <div style="width: 100%; height: 40px; background-color: rgba(86, 202, 133, 0.1);"></div>
            </div>
            <div data-options="dxTemplate: { name: 'dateCellTemplate' }">
                <b style="color: green">{{item.text}}</b>
            </div>
            <div data-options="dxTemplate: { name: 'timeCellTemplate' }">
                <i style="color: green">{{item.text}}</i>
            </div>
        </div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.schedulerData = [{
                text: "His Girl Friday",
                startDate: new Date(2016, 4, 24, 9, 10),
                endDate: new Date(2016, 4, 24, 11, 20)
            }, {
                text: "Royal Wedding",
                startDate: new Date(2016, 4, 24, 10, 05),
                endDate: new Date(2016, 4, 24, 11, 30)
            }, 
            // ...
            ];
            $scope.currentDate = new Date(2016, 4, 24); 
        });

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####**Knockout**

    <!--HTML--><div data-bind="dxScheduler: {
        dataSource: schedulerData,
        currentDate: currentDate,
        showAllDayPanel: false,
        currentView: 'week',
        dataCellTemplate: 'dataCellTemplate',
        dateCellTemplate: 'dateCellTemplate',
        timeCellTemplate: 'timeCellTemplate'
    }">
        <div data-options="dxTemplate: { name: 'dataCellTemplate' }">
            <div style="width: 100%; height: 40px; background-color: rgba(86, 202, 133, 0.1);"></div>
        </div>
        <div data-options="dxTemplate: { name: 'dateCellTemplate' }">
            <b style="color: green" data-bind="text: text"></b>
        </div>
        <div data-options="dxTemplate: { name: 'timeCellTemplate' }">
            <i style="color: green" data-bind="text: text"></i>
        </div>
    </div>

    <!--JavaScript-->var viewModel= {
        schedulerData: [{
            movie: "His Girl Friday",
            price: 5,
            startDate: new Date(2016, 4, 24, 9, 10),
            endDate: new Date(2016, 4, 24, 11, 20)
        }, {
            movie: "Royal Wedding",
            price: 10,
            startDate: new Date(2016, 4, 24, 10, 05),
            endDate: new Date(2016, 4, 24, 11, 30)
        }, 
        // ...
        ],
        currentDate: new Date(2016, 4, 24)
    };

    ko.applyBindings(viewModel);

---

If you use jQuery alone, combine the HTML markup for cells, time scales and date scales manually with jQuery [DOM manipulation methods](http://api.jquery.com/category/manipulation/). To apply this markup, use the [timeCellTemplate](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#timeCellTemplate), [dateCellTemplate](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#dateCellTemplate) and [dataCellTemplate](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#dataCellTemplate) callback functions as shown in the following code.

    <!--JavaScript-->var schedulerData = [{
        text: "His Girl Friday",
        startDate: new Date(2016, 4, 24, 9, 10),
        endDate: new Date(2016, 4, 24, 11, 20)
    }, {
        text: "Royal Wedding",
        startDate: new Date(2016, 4, 24, 10, 05),
        endDate: new Date(2016, 4, 24, 11, 30)
    }, 
    // ...
    ];

    $(function () {
        $("#schedulerContainer").dxScheduler({
            dataSource: schedulerData,
            currentDate: new Date(2016, 4, 24),
            showAllDayPanel: false,
            currentView: 'week',
            dataCellTemplate: function(data, index, element) {
                return $("<div />")
                            .css('width', '100%')
                            .css('height', '40px')
                            .css('background-color', 'rgba(86, 202, 133, 0.1)');
            },
            dateCellTemplate: function(data, index, element) {
                element.text(data.text)
                        .css('color', 'green')
                        .css('font-weight', 'bold');
            },
            timeCellTemplate: function(data, index, element) {
                element.text(data.text)
                        .css('color', 'green')
                        .css('font-style', 'italic');
            }
        });
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CellTemplates/jQuery/Light/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [Use an Alternative Template Engine](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Use_an_Alternative_Template_Engine) article.

#####See Also#####
- [Scheduler - Customize Appointment](/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment/)
- [Scheduler - Customize Resource Headers](/Documentation/Guide/Widgets/Scheduler/Resources/Customize_Resource_Headers/)
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Customize_Widget_Element_Appearance)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)
- [Scheduler Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview/jQuery/Light/)
- [Scheduler API Reference](/Documentation/ApiReference/UI_Widgets/dxScheduler/)

[tags]scheduler, timetable, template, start hour, end hour, cell duration, timeCellTemplate, dateCellTemplate, dataCellTemplate
