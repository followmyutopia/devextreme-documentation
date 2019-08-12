<!--id-->dxDataGridColumn.editCellTemplate<!--/id-->
===========================================================================
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom template for data cells in editing state.
<!--/shortDescription-->

<!--fullDescription-->

<!--/fullDescription-->
<!--typeFunctionParamName1-->cellElement<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->dxElement<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
#include common-ref-elementparam with { element: "current cell" }
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->cellInfo<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->Object<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The cell's properties.
<!--/typeFunctionParamDescription2-->
<!--typeFunctionParamName2_field1-->setValue(newValue, newText)<!--/typeFunctionParamName2_field1-->
<!--typeFunctionParamType2_field1-->any<!--/typeFunctionParamType2_field1-->
<!--typeFunctionParamDescription2_field1-->
A method that you should call to change the cell value and, optionally, the displayed value after the editor's value is changed.        
See an example in the [Custom Editors](/Demos/WidgetsGallery/Demo/DataGrid/CustomEditors/jQuery/Light/) demo.

[note] In batch [editing mode]({basewidgetpath}/Configuration/editing/#mode), check that the value is actually changed before calling this method to ensure correct cell highlighting.
<!--/typeFunctionParamDescription2_field1-->
<!--typeFunctionParamName2_field2-->data<!--/typeFunctionParamName2_field2-->
<!--typeFunctionParamType2_field2-->Object<!--/typeFunctionParamType2_field2-->
<!--typeFunctionParamDescription2_field2-->
The data of the cell's row.
<!--/typeFunctionParamDescription2_field2-->
<!--typeFunctionParamName2_field3-->component<!--/typeFunctionParamName2_field3-->
<!--typeFunctionParamType2_field3-->dxDataGrid<!--/typeFunctionParamType2_field3-->
<!--typeFunctionParamDescription2_field3-->
The widget's instance.
<!--/typeFunctionParamDescription2_field3-->
<!--typeFunctionParamName2_field4-->value<!--/typeFunctionParamName2_field4-->
<!--typeFunctionParamType2_field4-->any<!--/typeFunctionParamType2_field4-->
<!--typeFunctionParamDescription2_field4-->
The cell value as it is specified in the data source.
<!--/typeFunctionParamDescription2_field4-->
<!--typeFunctionParamName2_field5-->displayValue<!--/typeFunctionParamName2_field5-->
<!--typeFunctionParamType2_field5-->any<!--/typeFunctionParamType2_field5-->
<!--typeFunctionParamDescription2_field5-->
The displayed cell value. Differs from the **value** field only when the column uses [lookup]({basewidgetpath}/Configuration/columns/lookup/) or [calculateDisplayValue]({basewidgetpath}/Configuration/columns/#calculateDisplayValue).
<!--/typeFunctionParamDescription2_field5-->
<!--typeFunctionParamName2_field6-->text<!--/typeFunctionParamName2_field6-->
<!--typeFunctionParamType2_field6-->String<!--/typeFunctionParamType2_field6-->
<!--typeFunctionParamDescription2_field6-->
**displayValue** after applying [format]({basewidgetpath}/Configuration/columns/#format) and [customizeText]({basewidgetpath}/Configuration/columns/#customizeText).
<!--/typeFunctionParamDescription2_field6-->
<!--typeFunctionParamName2_field7-->columnIndex<!--/typeFunctionParamName2_field7-->
<!--typeFunctionParamType2_field7-->Number<!--/typeFunctionParamType2_field7-->
<!--typeFunctionParamDescription2_field7-->
The index of the column the cell belongs to.        
Refer to the [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) topic for more information on how this index is calculated.
<!--/typeFunctionParamDescription2_field7-->
<!--typeFunctionParamName2_field8-->rowIndex<!--/typeFunctionParamName2_field8-->
<!--typeFunctionParamType2_field8-->Number<!--/typeFunctionParamType2_field8-->
<!--typeFunctionParamDescription2_field8-->
The index of the row the cell belongs to. Begins with 0 on each page. Group rows are included.      
Refer to the [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) topic for more information on row indexes.
<!--/typeFunctionParamDescription2_field8-->
<!--typeFunctionParamName2_field9-->column<!--/typeFunctionParamName2_field9-->
<!--typeFunctionParamType2_field9-->dxDataGridColumn<!--/typeFunctionParamType2_field9-->
<!--typeFunctionParamDescription2_field9-->
The settings of the column the cell belongs to.
<!--/typeFunctionParamDescription2_field9-->
<!--typeFunctionParamName2_field10-->row<!--/typeFunctionParamName2_field10-->
<!--typeFunctionParamType2_field10-->dxDataGridRowObject<!--/typeFunctionParamType2_field10-->
<!--typeFunctionParamDescription2_field10-->

<!--/typeFunctionParamDescription2_field10-->
<!--typeFunctionParamName2_field11-->rowType<!--/typeFunctionParamName2_field11-->
<!--typeFunctionParamType2_field11-->String<!--/typeFunctionParamType2_field11-->
<!--typeFunctionParamDescription2_field11-->
The row's [type]({basewidgetpath}/Row/#rowType).
<!--/typeFunctionParamDescription2_field11-->
<!--typeFunctionParamName2_field12-->watch<!--/typeFunctionParamName2_field12-->
<!--typeFunctionParamType2_field12-->function()<!--/typeFunctionParamType2_field12-->
<!--typeFunctionParamDescription2_field12-->

<!--/typeFunctionParamDescription2_field12-->
