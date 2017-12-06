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
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Calling_Methods)
<!--/fullDescription-->