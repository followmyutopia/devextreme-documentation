===========================================================================
<!--default-->[]<!--/default-->
<!--type-->Array<any><!--/type-->
<!--readonly--><!--/readonly-->
===========================================================================

<!--shortDescription-->
Currently selected cells' data.
<!--/shortDescription-->

<!--fullDescription-->
This array contains objects with the following structure:

    {
        startDate: Date,
        endDate: Date,
        allDay: Boolean, 
        groups: { // present if grouping is enabled
            resourceKind: "resourceValue" // for example, room: "101"
        }     
    }

#####See Also#####
- [Group Appointments by Resources](/Documentation/Guide/Widgets/Scheduler/Resources/Group_Appointments_by_Resources/)
- [showAllDayPanel](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#showAllDayPanel)
<!--/fullDescription-->