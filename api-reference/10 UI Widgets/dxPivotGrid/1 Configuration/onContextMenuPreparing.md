<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\contextMenuPreparing.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the **contextMenuPreparing** event.
<!--/shortDescription-->

<!--fullDescription-->
Assign a function to perform a custom action before a context menu is displayed in the grid. For instance, you can change the set of items in the menu.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxPivotGrid/Methods/#instance">instance</a>.
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
<!--typeFunctionParamName1_field4-->items<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->array<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
An array of items to be displayed by the context menu. The item objects must have the fields that are used by the <b>ContextMenu</b> <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxContextMenu/Default_Item_Template">default item template</a>.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->area<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->string<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The clicked <a href="/Documentation/17_2/ApiReference/Data_Library/PivotGridDataSource/Configuration/fields/#area">area</a> type.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->cell<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->PivotGridCell<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The cell that has been clicked to invoke the context menu.<br />
<b>NOTE: </b>Unavailable for fields in the <a href="/Documentation/17_2/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel">field panel</a>.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->cellElement<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->jQuery<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The clicked cell's container.<br />
<b>NOTE: </b>Unavailable for fields in the <a href="/Documentation/17_2/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel">field panel</a>.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->columnIndex<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->number<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The index of the column to which the clicked cell belongs.<br />
<b>NOTE: </b>Unavailable for fields in the <a href="/Documentation/17_2/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel">field panel</a>.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->rowIndex<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->number<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
The index of the row to which the clicked cell belongs.<br />
<b>NOTE: </b>Unavailable for fields in the <a href="/Documentation/17_2/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel">field panel</a>.
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->dataFields<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->array<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
Fields in the 'data' area.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->rowFields<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->array<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
Fields in the 'row' area.
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->columnFields<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->array<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
Fields in the 'column' area.
<!--/typeFunctionParamDescription1_field12-->
<!--typeFunctionParamName1_field13-->field<!--/typeFunctionParamName1_field13-->
<!--typeFunctionParamType1_field13-->object<!--/typeFunctionParamType1_field13-->
<!--typeFunctionParamDescription1_field13-->
Options of the clicked field.<br />
<b>NOTE: </b>Available for fields in the <a href="/Documentation/17_2/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel">field panel</a> only.
<!--/typeFunctionParamDescription1_field13-->
