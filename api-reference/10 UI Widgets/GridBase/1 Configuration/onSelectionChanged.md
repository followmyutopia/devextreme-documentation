<!--id-->GridBase.Options.onSelectionChanged<!--/id-->
<!--EventForAction-->..\4 Events\selectionChanged.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed after selecting a row or clearing its selection. 
<!--/shortDescription-->

<!--fullDescription-->
This function has the following specifics:

- If a field providing key values is not specified in the data source, the whole data object is considered the key. In this case, all arrays passed to the function contain data objects instead of keys.
- When selection is [deferred]({basewidgetpath}/Configuration/selection/#deferred), this function does not provide access to keys and data. Use the [getSelectedRowsData()]({basewidgetpath}/Methods/#getSelectedRowsData) or [getSelectedRowKeys()]({basewidgetpath}/Methods/#getSelectedRowKeys) method instead.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Data_Grid/RowSelection/jQuery/Light/"
}
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event that caused the function's execution.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->{WidgetName}<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
#include common-ref-elementparam with { element: "widget" }
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->currentSelectedRowKeys<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Array<any><!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The keys of the rows that have been selected.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->currentDeselectedRowKeys<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->Array<any><!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The keys of the rows whose selection has been cleared.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->selectedRowKeys<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->Array<any><!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The keys of all selected rows.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->selectedRowsData<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->Array<Object><!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The data of all selected rows.     
Does not include [calculated values]({basewidgetpath}/Configuration/columns/#calculateCellValue).
<!--/typeFunctionParamDescription1_field7-->
