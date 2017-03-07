You can configure the scheduler area so that all appointments are grouped by their resources. For this purpose, specify the widget's [groups](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#groups) option. This option takes on an array to allow you to define grouping with several levels. This is appropriate when appointment use several kinds of resources.

    <!--JavaScript-->var appointments = [
        { 
            room: 1,
            person: 5,
            text: "Meeting",
            //...
        },
        //...
    ];
    var resources = [
        { field: 'room', dataSource: roomsDataSource },
        { field: 'person', dataSource: teachersDataSource }
    ];
    var schedulerOptions = {
        dataSource: appointments,
        resources: resources,
        groups: ['room','person'],
        //...
    }

![Scheduler Grouping by Resources](/Content/images/doc/16_1/UiWidgets/Scheduler_ResourceGroups.png)

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposeschedulerschedulergroupedappointments" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>