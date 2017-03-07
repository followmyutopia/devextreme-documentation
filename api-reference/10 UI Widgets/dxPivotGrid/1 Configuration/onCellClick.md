<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\cellClick.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the [cellClick](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Events/#cellClick) event.
<!--/shortDescription-->

<!--fullDescription-->
The **cellClick** event fires when a user clicks a pivot grid cell. When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data relating to the clicked cell.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxPivotGrid/Methods/#instance">instance</a>.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->jQuery<!--/typeFunctionParamType1_field2-->
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
The <a href="/Documentation/16_2/ApiReference/Data_Library/PivotGridDataSource/Configuration/fields/#area">area</a> to which the clicked cell belongs.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->cellElement<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->jQuery<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The cell's container.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->cell<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->PivotGridCell<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The cell object.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->rowIndex<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->number<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The index of the row to which the clicked cell belongs.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->columnIndex<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->number<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The index of the column to which the clicked cell belongs.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->columnFields<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->Array<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
Fields of the <i>column</i> area.
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->rowFields<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->Array<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
Fields of the <i>row</i> area.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->dataFields<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->Array<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
Fields of the <i>data</i> area.
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->jQueryEvent<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->jQueryEvent<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
The jQuery event.
<!--/typeFunctionParamDescription1_field12-->
<!--typeFunctionParamName1_field13-->cancel<!--/typeFunctionParamName1_field13-->
<!--typeFunctionParamType1_field13-->boolean<!--/typeFunctionParamType1_field13-->
<!--typeFunctionParamDescription1_field13-->
Set this field to <i>true</i> if you need to prevent the clicked field from expansion.
<!--/typeFunctionParamDescription1_field13-->
