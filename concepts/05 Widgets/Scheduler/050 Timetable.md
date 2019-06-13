The **Scheduler** widget allows you to customize its timetable. You can specify the time period and a single cell's duration via the [startDayHour](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#startDayHour), [endDayHour](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#endDayHour), and [cellDuration](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#cellDuration) options. Using the [firstDayOfWeek](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#firstDayOfWeek) option, you can define the weekday that is shown first.

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
    import { DxSchedulerModule } from "devextreme-angular";
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

You can also adjust cells' size in the table and around it using the DevExtreme CSS classes. For example, the `.dx-scheduler-cell-sizes-horizontal` and `.dx-scheduler-cell-sizes-vertical` classes specify the cells' width and height, respectively. These classes apply if the [crossScrollingEnabled](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#crossScrollingEnabled) option is set to **true**.

    <!--CSS-->
    #yourSchedulerID .dx-scheduler-cell-sizes-horizontal {
        width: 200px;
    }
    #yourSchedulerID .dx-scheduler-cell-sizes-vertical {
        height: 200px;
    }

For a more detailed customization, define custom templates for cells, time scales, and date scales. DevExtreme provides a markup component called [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/) for Angular, AngularJS and Knockout apps. The following code shows how you can use **dxTemplate** to define templates for timetable parts:

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
    import { DxSchedulerModule } from "devextreme-angular";
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

If you use jQuery alone, combine the HTML markup for cells, time scales and date scales manually with jQuery <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a>. To apply this markup, use the [timeCellTemplate](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#timeCellTemplate), [dateCellTemplate](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#dateCellTemplate) and [dataCellTemplate](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#dataCellTemplate) callback functions as shown in the following code:

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

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Scheduler/CellTemplates/jQuery/Light/"
}

You can also use a 3rd-party template engine to customize widget appearance. See the [3rd-Party Template Engines](/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines) article for more information.

#####See Also#####
- [Scheduler - Customize Appointment](/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment/)
- [Scheduler - Customize Resource Headers](/Documentation/Guide/Widgets/Scheduler/Resources/Customize_Resource_Headers/)
- [Scheduler Demos](/Demos/WidgetsGallery/Demo/Scheduler/Overview/jQuery/Light/)
- [Scheduler API Reference](/Documentation/ApiReference/UI_Widgets/dxScheduler/)

[tags]scheduler, timetable, template, start hour, end hour, cell duration, timeCellTemplate, dateCellTemplate, dataCellTemplate
