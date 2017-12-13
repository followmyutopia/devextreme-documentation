===================================================================
===================================================================

<!--shortDescription-->
Add the appointment defined by the object passed as a parameter to the data associated with the widget.
<!--/shortDescription-->

<!--paramName1-->appointment<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
An appointment object to be added.
<!--/paramDescription1-->

<!--fullDescription-->
The structure of the added appointment should the same as it is used in the widget's [dataSource](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#dataSource) array or as it comes from the source connected to the widget by the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) object.

Consider handling the [appointmentAdding](/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentAdding) and [appointmentAdded](/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentAdded) events to perform custom actions before and after adding an appointment to the widget's data source.

#####See Also#####
#include common-link-callmethods
<!--/fullDescription-->