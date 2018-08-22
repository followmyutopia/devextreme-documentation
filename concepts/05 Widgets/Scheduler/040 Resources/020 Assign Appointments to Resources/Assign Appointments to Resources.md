The **Scheduler** widget allows you to assign appointments to a set of predefined resources. Consider the following example: in an educational center lectures are held in two rooms. In scheduling terms, a lecture is an appointment, a room is a resource instance, and all rooms are considered the resource kind. 

To define resource kinds, assign an array of objects specifying them to the [resources](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/) option. Each object must have at least the following fields.

- [dataSource](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#dataSource)  
    All available resource instances (for example, room101, room102). For information on different techniques that you can use to provide data for resources, see the [Data Binding](/Documentation/Guide/Widgets/Scheduler/Data_Binding/) topic.
- [fieldExpr](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#fieldExpr)  
    The data field that binds an appointment to a resource instance.

<!---->

---

##### jQuery

    <!--JavaScript-->
    var rooms = [
        // Resource instances
        { 
            id: 1,              // Resource identifier
            text: "Room101",    // Resource name
            color: "red"        // Color for indicating appointments that use this resource
        },
        { id: 2, text: "Room102", color: "green" },
        // ...
    ];
    var teachers = [
        // Resource instances
        { guid: "6F96", name: "John Heart", clr: "yellow" },
        { guid: "3F32", name: "Sandra Johnson", clr: "blue" },
        // ...
    ];

    $(function() {
        $("#schedulerContainer").dxScheduler({
            // ...
            resources: [ 
                // Definition of the first resource kind 
                {
                    dataSource: new DevExpress.data.DataSource({
                        store: {
                            type: "array",
                            data: rooms
                        },
                        paginate: false
                    }),
                    fieldExpr: "roomId",        // "roomId" is the data field in an appointment object that binds it to the resource
                    label: "Room"               // Label displayed for this resource kind in the appointment details form 
                },
                // Definition of the second resource kind 
                {
                    dataSource: new DevExpress.data.DataSource({
                        store: {
                            type: "array",
                            data: teachers
                        },
                        paginate: false
                    }),
                    fieldExpr: "teacherId",
                    valueExpr: "guid",          // Resource instance's field used instead of "id" 
                    colorExpr: "clr",           // Resource instance's field used instead of "color" 
                    displayExpr: "name",        // Resource instance's field used instead of "text" 
                    label: "Teacher"
                }
            ]
        });
    });


##### Angular

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent  {
        // ...
        rooms = [
            // Resource instances
            { 
                id: 1,              // Resource identifier
                text: "Room101",    // Resource name
                color: "red"        // Color for indicating appointments that use this resource
            },
            { id: 2, text: "Room102", color: "green" },
            // ...
        ];
        teachers = [
            // Resource instances
            { guid: "6F96", name: "John Heart", clr: "yellow" },
            { guid: "3F32", name: "Sandra Johnson", clr: "blue" },
            // ...
        ];
        resources = [ 
            // Definition of the first resource kind 
            {
                dataSource: new DataSource({
                    store: {
                        type: "array",
                        data: this.rooms
                    },
                    paginate: false
                }),
                fieldExpr: "roomId",        // "roomId" is the data field in an appointment object that binds it to the resource
                label: "Room"               // Label displayed for this resource kind in the appointment details form 
            },
            // Definition of the second resource kind 
            {
                dataSource: new DataSource({
                    store: {
                        type: "array",
                        data: this.teachers
                    },
                    paginate: false
                }),
                fieldExpr: "teacherId",
                valueExpr: "guid",          // Resource instance's field used instead of "id" 
                colorExpr: "clr",           // Resource instance's field used instead of "color" 
                displayExpr: "name",        // Resource instance's field used instead of "text" 
                label: "Teacher"
            }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-scheduler ...
        [resources]="resources">
    </dx-scheduler>

---

Note that every resource instance should have a special structure that includes *id*, *color* and *text* fields. If the structure of your resources differs, set the [valueExpr](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#valueExpr), [colorExpr](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#colorExpr) and [displayExpr](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#displayExpr) options as shown in the code above.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Scheduler/Resources/jQuery/Light/"
}

[tags]scheduler, appointment, resource, resource kind, resource structure, assign resource, fieldExpr
