<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->[]<!--/default-->
<!--type-->Array<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the [resource kinds](/Documentation/Guide/Widgets/Scheduler/Resources/Assign_Appointments_to_Resources/) by which the scheduler's appointments are grouped in a timetable.
<!--/shortDescription-->

<!--fullDescription-->
The array elements should be strings specifying the **field** field of the resource kind objects.

---

#####jQuery

    <!--JavaScript-->var resources = [
        { field: 'room', dataSource: roomsDataSource },
        { field: 'teacher', dataSource: teachersDataSource }
    ];
    var schedulerOptions = {
        dataSource: appointments,
        resources: resources,
        groups: ['room', 'teacher']
        //...
    }

#####Angular

    <!--HTML-->
    <dx-scheduler
        [dataSource]="appointments"
        [resources]="resources"
        [groups]="['room', 'teacher']">
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from 'devextreme-angular';
    // ...
    export class AppComponent  {
        // ...
        resources = [
            { field: 'room', dataSource: this.roomsDataSource },
            { field: 'teacher', dataSource: this.teachersDataSource }
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

To group appointments by resources of one kind, for instance to group appointments that use particular rooms in an office, assign an array with a single element to the **groups** option. To group appointments by several resource kinds, assign an array of elements. Each element will represent a resource by which appointments will be grouped. Each resource will be nested to the resource represented by the previous element in the **groups** array.



<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposeschedulerschedulergroupedappointments" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

<!--/fullDescription-->