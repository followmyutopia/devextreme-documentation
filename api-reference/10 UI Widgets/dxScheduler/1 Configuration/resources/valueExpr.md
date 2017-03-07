<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Defines an expression returning value from selected item (for a plain object item the expression could be field name).<!--/d-->
===========================================================================
<!--default-->'id'<!--/default-->
<!--type-->string | function<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the [resource object](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#dataSource) field that is used as a value of the Resource editor in the Appointment popup window.
<!--/shortDescription-->

<!--fullDescription-->
To allow end users to choose a required resource for an appointment, there is a field in the Appointment popup window. This field's label is specified by the [label](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#label) field of the resource kind object. The editor that is used to select a resource depends on the value of the [allowMultiple](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#allowMultiple) field. The **TagBox** widget is used when multiple selection is possible. The **SelectBox** widget is used when a single resource can be selected only. Both these widgets have the **displayExpr** and **valueExpr** options for specifying the displayed text and actual value of the selected item. These options are set to the [displayExpr](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#displayExpr) and **valueExpr** field values of the resource kind object, respectively.


<!--/fullDescription-->