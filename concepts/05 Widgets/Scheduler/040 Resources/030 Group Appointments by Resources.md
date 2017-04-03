To group appointments by resources, assign an array to the [groups](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#groups) option. Each element of this array is **fieldExpr** of a resource kind. Note that the order of resource headers depends on the order of resources in the [resources](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/) array. 

    <!--JavaScript-->
    var appointments = [{ 
        roomId: 1,   
        teacherId: 2,    
        text: "Meeting",
        // ...
    },
    // ...
    ];

    var resources = [
        { fieldExpr: 'roomId', dataSource: roomsDataSource },
        { fieldExpr: 'teacherId', dataSource: teachersDataSource }
    ];

    $(function(){
        $("#schedulerContainer").dxScheduler({
            dataSource: appointments,
            resources: resources,
            // Groups appointments by rooms and by teachers
            groups: ['roomId', 'teacherId']
            //...
        });
    });

![Scheduler Grouping by Resources](/Content/images/doc/17_1/UiWidgets/Scheduler_ResourceGroups.png)

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/GroupedAppointments/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [Scheduler - Assign Appointments to Resources](/Documentation/Guide/Widgets/Scheduler/Resources/Assign_Appointments_to_Resources/)
- [Scheduler - Customize Resource Headers](/Documentation/Guide/Widgets/Scheduler/Resources/Customize_Resource_Headers/)
- [Scheduler API Reference](/Documentation/ApiReference/UI_Widgets/dxScheduler/)

[tags]scheduler, resources, group by resources
