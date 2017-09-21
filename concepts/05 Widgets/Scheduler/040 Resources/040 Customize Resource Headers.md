For AngularJS and Knockout apps, DevExtreme provides a markup component called [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/). The following code shows how you can use **dxTemplate** to define custom templates for resource headers.

---

#####Angular

    <!--HTML-->
    <dx-scheduler 
        [dataSource]="schedulerData"
        [currentDate]="currentDate"
        [groups]="['roomId']"
        resourceCellTemplate="headerTemplate">
        <dxi-resource
            fieldExpr="roomId"
            [dataSource]="rooms" >
        </dxi-resource>
        <div *dxTemplate="let appointment of 'headerTemplate'">
            <i style="color: blue">{{appointment.text}}</i>
        </div>
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule, DxTemplateModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        schedulerData = [{ 
            text: "Meeting",
            startDate: new Date(2016, 4, 24, 9, 10),
            endDate: new Date(2016, 4, 24, 11, 20),
            roomId: 1
        }, 
        // ...
        ];
        rooms = [
            { id: 1, text: 'Room101', color: 'green' },
            { id: 2, text: 'Room102', color: 'red' },
            // ...
        ];
        currentDate = new Date(2016, 4, 24);
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule,
            DxTemplateModule
        ],
        // ...
    })

#####**AngularJS**

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-scheduler="{
            dataSource: schedulerData,
            currentDate: currentDate,
            resources: [ roomResource ],
            groups: [ 'roomId' ],
            resourceCellTemplate: 'header'
        }" dx-item-alias="item">
            <div data-options="dxTemplate: { name: 'header' }">
                <i style="color: blue">{{item.text}}</i>
            </div>
        </div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.schedulerData = [{
                text: "Meeting",
                startDate: new Date(2016, 4, 24, 9, 10),
                endDate: new Date(2016, 4, 24, 11, 20),
                roomId: 1
            }, 
            // ...
            ];
            $scope.roomResource = { 
                fieldExpr: 'roomId', 
                dataSource: [
                    { id: 1, text: 'Room101', color: 'green' },
                    { id: 2, text: 'Room102', color: 'red' },
                    // ...
                ] 
            };
            $scope.currentDate = new Date(2016, 4, 24); 
        });

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####**Knockout**

    <!--HTML--><div data-bind="dxScheduler: {
        dataSource: schedulerData,
        currentDate: currentDate,
        resources: [ roomResource ],
        groups: [ 'roomId' ],
        resourceCellTemplate: 'header'
    }">
        <div data-options="dxTemplate: { name: 'header' }">
            <i style="color: blue" data-bind="text: text"></i>
        </div>
    </div>
    
    <!--JavaScript-->var viewModel= {
        schedulerData: [{
            text: "Meeting",
            startDate: new Date(2016, 4, 24, 9, 10),
            endDate: new Date(2016, 4, 24, 11, 20),
            roomId: 1
        }, 
        // ...
        ],
        roomResource: { 
            fieldExpr: 'roomId', 
            dataSource: [
                { id: 1, text: 'Room101', color: 'green' },
                { id: 2, text: 'Room102', color: 'red' },
                // ...
            ] 
        },
        currentDate: new Date(2016, 4, 24)
    };

    ko.applyBindings(viewModel);

---

If you use jQuery alone, combine the HTML markup for resource headers manually with jQuery [DOM manipulation methods](http://api.jquery.com/category/manipulation/). To apply this markup, use the [resourceCellTemplate](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#resourceCellTemplate) callback function as shown in the following code.

    <!--JavaScript-->var schedulerData = [{
        text: "Meeting",
        startDate: new Date(2016, 4, 24, 9, 10),
        endDate: new Date(2016, 4, 24, 11, 20),
        roomId: 1
    }, 
    // ...
    ];
    var roomResource = { 
        fieldExpr: 'roomId', 
        dataSource: [
            { id: 1, text: 'Room101', color: 'green' },
            { id: 2, text: 'Room102', color: 'red' },
            // ...
        ] 
    };

    $(function () {
        $("#schedulerContainer").dxScheduler({
            dataSource: schedulerData,
            currentDate: new Date(2016, 4, 24),
            resources: [ roomResource ],
            groups: [ 'roomId' ],
            resourceCellTemplate: function (data, index, element) {
                element.append("<i style='color: blue'>" + data.text + "</i>");
            }
        });
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CellTemplates/jQuery/Light/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [Use an Alternative Template Engine](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Use_an_Alternative_Template_Engine) article.

#####See Also#####
- [Scheduler - Customize Appointment](/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment/)
- [Scheduler - Customize Timetable](/Documentation/Guide/Widgets/Scheduler/Timetable/)
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Customize_Widget_Element_Appearance)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)
- [Scheduler API Reference](/Documentation/ApiReference/UI_Widgets/dxScheduler/)

[tags]scheduler, tooltip appearance, customize, templates