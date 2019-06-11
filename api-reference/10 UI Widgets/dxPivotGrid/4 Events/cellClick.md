<!--id-->dxPivotGrid.cellClick<!--/id-->
===========================================================================
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Raised when a pivot grid cell is clicked or tapped.
<!--/shortDescription-->

<!--fullDescription-->
Main article: [onCellClick](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#onCellClick)

#####See Also#####
#include common-link-handleevents
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->{WidgetName}<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget [instance](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Methods/#instance).
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
#include common-ref-elementparam with { element: "widget" }
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if Knockout is used.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->area<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->String<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The [area](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area) to which the clicked cell belongs.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->cellElement<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->dxElement<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
#include common-ref-elementparam with { element: "cell" }
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->cell<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->dxPivotGridPivotGridCell<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The cell [properties](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Pivot_Grid_Cell/).
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->rowIndex<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->Number<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The index of the row to which the clicked cell belongs.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->columnIndex<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->Number<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The index of the column to which the clicked cell belongs.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->columnFields<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->Array<PivotGridDataSource_Options_fields><!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
The *column* area's fields.
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->rowFields<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->Array<PivotGridDataSource_Options_fields><!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
The *row* area's fields.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->dataFields<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->Array<PivotGridDataSource_Options_fields><!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
The *data* area's fields.
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->jQueryEvent<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->jQuery.Event<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.
<!--/typeFunctionParamDescription1_field12-->
<!--typeFunctionParamDeprecated1_field12-->Use 'event' instead.<!--/typeFunctionParamDeprecated1_field12-->
<!--typeFunctionParamName1_field13-->event<!--/typeFunctionParamName1_field13-->
<!--typeFunctionParamType1_field13-->event<!--/typeFunctionParamType1_field13-->
<!--typeFunctionParamDescription1_field13-->
#include common-ref-eventparam
<!--/typeFunctionParamDescription1_field13-->
<!--typeFunctionParamName1_field14-->cancel<!--/typeFunctionParamName1_field14-->
<!--typeFunctionParamType1_field14-->Boolean<!--/typeFunctionParamType1_field14-->
<!--typeFunctionParamDescription1_field14-->
Allows you to cancel field expansion.
<!--/typeFunctionParamDescription1_field14-->
