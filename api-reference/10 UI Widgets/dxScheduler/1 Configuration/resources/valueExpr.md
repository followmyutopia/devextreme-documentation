===========================================================================
<!--default-->'id'<!--/default-->
<!--type-->String | function()<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the [resource object](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#dataSource) field that is used as a value of the Resource editor in the Appointment popup window.
<!--/shortDescription-->

<!--fullDescription-->
End users can use a field in the Appointment pop-up window to choose a resource for the appointment. The [label](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#label) field of the resource kind object specifies this field's label. The editor that is used to select a resource depends on the value of the [allowMultiple](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#allowMultiple) field. The **TagBox** widget is used when multiple selection is possible, and the **SelectBox** widget is used when only a single resource can be selected. These widgets have the **displayExpr** and **valueExpr** options to specify the displayed text and the selected item's actual value. These options are set to the [displayExpr](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#displayExpr) and **valueExpr** field values of the resource kind object.

#include uiwidgets-ref-valueExpr-functionnote
<!--/fullDescription-->
