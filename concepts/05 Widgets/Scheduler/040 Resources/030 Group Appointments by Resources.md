To group appointments by resources, assign an array to the [groups](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#groups) option. Each element of this array is **fieldExpr** of a resource kind. Note that the order of resource headers depends on the order of resources in the [resources](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/) array. 

---

##### jQuery

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

##### Angular

    <!--HTML-->
    <dx-scheduler 
        [dataSource]="appointments"
        [groups]="['roomId', 'teacherId']"> <!-- Groups appointments by rooms and by teachers -->
        <dxi-resource
            fieldExpr="roomId"
            [dataSource]="roomResources">
        </dxi-resource>
        <dxi-resource
            fieldExpr="teacherId"
            [dataSource]="teacherResources">
        </dxi-resource>
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from 'devextreme-angular';
    // ...
    export class AppComponent  { 
        // ...
        appointments = [{ 
            roomId: 1,   
            teacherId: 2,    
            text: "Meeting",
            // ...
        }, 
        // ...
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

---


![Scheduler Grouping by Resources](/Content/images/doc/18_1/UiWidgets/Scheduler_ResourceGroups.png)

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Scheduler/GroupedAppointments/jQuery/Light/"
}

#####See Also#####
- [Scheduler - Assign Appointments to Resources](/Documentation/Guide/Widgets/Scheduler/Resources/Assign_Appointments_to_Resources/)
- [Scheduler - Customize Resource Headers](/Documentation/Guide/Widgets/Scheduler/Resources/Customize_Resource_Headers/)
- [Scheduler API Reference](/Documentation/ApiReference/UI_Widgets/dxScheduler/)

[tags]scheduler, resources, group by resources
