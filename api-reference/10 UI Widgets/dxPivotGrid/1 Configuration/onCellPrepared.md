<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\cellPrepared.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the [cellPrepared](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Events/#cellPrepared) event.
<!--/shortDescription-->

<!--fullDescription-->
The **cellPrepared** event fires after a cell has been rendered. When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data relating to the prepared cell.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget [instance](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Methods/#instance).
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Data that is available for binding against the element. Available only in the Knockout approach.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->area<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->string<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The [area](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area) to which the prepared cell belongs.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->cellElement<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->dxElement<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The container of the prepared cell.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->cell<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->dxPivotGridPivotGridCell<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The cell object.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->rowIndex<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->number<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The position of a cell's row.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->columnIndex<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->number<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The position of a cell's column.
<!--/typeFunctionParamDescription1_field8-->
