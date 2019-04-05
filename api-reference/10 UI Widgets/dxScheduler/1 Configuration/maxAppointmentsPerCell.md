===========================================================================
<!--default-->'auto'<!--/default-->
<!--acceptValues-->'auto' | 'unlimited'<!--/acceptValues-->
<!--type-->Number | String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the limit of full-sized appointments displayed per cell. Applies to all views except *"agenda"*.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts the following values: 

- *"unlimited"*      
The widget resizes the appointments without a limit to fit them into a cell.
- *"auto"*      
The widget narrows the appointments down to 20 pixels in height. If they still do not fit into the cell, the widget aggregates them in an appointment collector.
- **Number**    
The number of appointments allowed in a single cell. Appointments are aggregated in an appointment collector when this number is exceeded.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Scheduler/LimitAppointmentCountPerCell/jQuery/Light/"
}
<!--/fullDescription-->