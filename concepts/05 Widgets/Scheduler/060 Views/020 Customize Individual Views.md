To customize individual views, assign an array of configuration objects to the **views** option. Each object contains the [type](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/#type) option that defines what view is customized. For the full list of options, refer to the [API Reference](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/).

The following code defines three views: the first is not customized, the second has specific cell duration and the third is grouped by resources.

    <!--JavaScript-->
    var data = [{
        text: "Google AdWords Strategy",
        ownerId: [2],
        startDate: new Date(2016, 1, 1, 9, 0),
        endDate: new Date(2016, 1, 1, 10, 30)
    }, {
        text: "New Brochures",
        ownerId: [1],
        startDate: new Date(2016, 1, 1, 11, 30),
        endDate: new Date(2016, 1, 1, 14, 15)
    }, 
    // ...
    ];

    var resources = [{
        text: "Samantha Bright",
        id: 1,
        color: "#cb6bb2"
    }, {
        text: "John Heart",
        id: 2,
        color: "#56ca85"
    }];

    $(function(){
        $("#schedulerContainer").dxScheduler({
            dataSource: data,
            currentDate: new Date(2016, 1, 1),
            views: ["month", {
                type: "day",
                cellDuration: 60
            }, {
                type: "workWeek",
                groups: ["ownerId"]
            }],
            resources: [{
                fieldExpr: "ownerId",
                dataSource: resources
            }]
        });
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CustomizeIndividualViews/jQuery/Light/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>

#####See Also#####
- [Scheduler - View Types](/Documentation/Guide/Widgets/Scheduler/Views/View_Types/)
- [Scheduler - Customize Appointment](/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment/)
- [Scheduler - Customize Timetable](/Documentation/Guide/Widgets/Scheduler/Timetable/)
- [Scheduler Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview/jQuery/Light/)
- [Scheduler API Reference](/Documentation/ApiReference/UI_Widgets/dxScheduler/)

[tags]scheduler, customize individual view
