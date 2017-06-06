<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\selectionChanged.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the **selectionChanged** event. Executed after selecting a row or clearing its selection. 
<!--/shortDescription-->

<!--fullDescription-->
This handler has the following specifics:

- If a field providing key values is not specified in the data source, the whole data object is considered the key. In this case, all arrays passed to the handler contain data objects instead of keys.
- When selection is [deferred]({basewidgetpath}/Configuration/selection/#deferred), this handler does not provide access to keys and data.

Call the [byKey(key)]({basewidgetpath}/Methods/#byKeykey) method to retrieve data.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/RowSelection/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->jQuery<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->currentSelectedRowKeys<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->array<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The keys of the rows that have been selected.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->currentDeselectedRowKeys<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->array<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The keys of the rows whose selection has been cleared.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->selectedRowKeys<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->array<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The keys of all selected rows.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->selectedRowsData<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->array<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The data of all selected rows. </br>
Does not include <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue">calculated values</a>.
<!--/typeFunctionParamDescription1_field7-->
