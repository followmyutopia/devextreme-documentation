<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\editingStart.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the [editingStart](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#editingStart) event.
<!--/shortDescription-->

<!--fullDescription-->
The **editingStart** event fires before a row (in [row edit mode](/Documentation/Guide/Widgets/DataGrid/Editing/#User_Interaction/Row_Mode)) or a cell (in [batch edit mode](/Documentation/Guide/Widgets/DataGrid/Editing/#User_Interaction/Batch_Mode)) switches into the editing state. When implementing a handler for this event, use the object passed to it as its argument. Among the fields of this object, you can find parameters of the about-to-be-edited row.

If you need to prevent a specific row or cell from switching into the editing state, assign **true** to the **cancel** field of the object passed to the handler as the argument.

You can also distinguish rows that exist in the data source from rows that have not yet been transmitted to the data source. For this purpose, use the **key** field of the object with the row parameters. Not-yet-transmitted rows have this field **undefined**.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgrideditingrow/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->DOMComponent<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if Knockout is used.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->data<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The data of a row to be edited.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->key<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->any<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The row's key. The key of an added but not yet saved row is **undefined**.     
If a field providing keys is not specified in the [data source](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource), the whole data object is considered the key. 
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->cancel<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->boolean<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
Allows you to cancel row editing.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->column<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->object<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The [configuration](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) of the column whose cell is switching to the editing state. Available in the *'batch'* [editing mode](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#mode).
<!--/typeFunctionParamDescription1_field7-->
