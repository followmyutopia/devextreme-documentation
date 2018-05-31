The **Scheduler** shows all available resource kinds in the appointment details form. By default, the widget allows a user to assign only a single resource of one kind. 

![Scheduler Appointment Resources](/Content/images/doc/18_2/UiWidgets/Scheduler_Resources_SelectBox.png)

To allow multiple resources, assign **true** to the [allowMultiple](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#allowMultiple) option of the corresponding resource kind. 

    <!--JavaScript-->
    var resources = [
        { fieldExpr: 'roomId', dataSource: roomsDataSource },
        { fieldExpr: 'teacherId', dataSource: teachersDataSource, allowMultiple: true }
    ];

![Scheduler Appointment Resources](/Content/images/doc/18_2/UiWidgets/Scheduler_Resources_Details.png)

#####See Also#####
- [Scheduler - Group Appointments by Resources](/Documentation/Guide/Widgets/Scheduler/Resources/Group_Appointments_by_Resources/)
- [Scheduler - Customize Resource Headers](/Documentation/Guide/Widgets/Scheduler/Resources/Customize_Resource_Headers/)
- [Scheduler Demos](/Demos/WidgetsGallery/Demo/Scheduler/Overview/jQuery/Light/)
- [Scheduler API Reference](/Documentation/ApiReference/UI_Widgets/dxScheduler/)