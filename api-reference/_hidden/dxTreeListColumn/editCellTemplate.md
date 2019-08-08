<!--id-->dxTreeListColumn.editCellTemplate<!--/id-->
===========================================================================
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->

<!--/shortDescription-->

<!--fullDescription-->
The **cellInfo** object has the following fields:

- **setValue(newValue, newText)**: <font size="-1">Method</font>        
A method that you should call to change the cell value and, optionally, the displayed value after the editor's value is changed. 

    [note] In batch [editing mode](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#mode), check that the value changed before calling this method. This ensures the cells are highlighted correctly.

- **data**: <font size="-1">Object</font>        
The data of the row the cell belongs to.
- **component**: <font size="-1">Object</font>  
The widget's instance.
- **value**: <font size="-1">Any</font>        
The cell value as it is specified in the data source.
- **displayValue**: <font size="-1">Any</font>        
The displayed cell value. Differs from the **value** field only when the column uses [lookup](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/lookup/) or [calculateDisplayValue](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#calculateDisplayValue).
- **text**: <font size="-1">String</font>        
**displayValue** after applying [format](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#format) and [customizeText](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#customizeText).
- **columnIndex**: <font size="-1">Number</font>        
The index of the column the cell belongs to.
- **rowIndex**: <font size="-1">Number</font>        
The index of the row the cell belongs to. Begins with 0 on each page. Refer to [Column and Row Indexes](/Documentation/Guide/Widgets/TreeList/Columns/Column_and_Row_Indexes/) for more information.
- **column**: <font size="-1">Object</font>        
The settings of the column the cell belongs to.

[note]If you implement two-way data binding in your template, make sure that you have switched off this feature's built-in implementation by setting the [twoWayBindingEnabled](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#twoWayBindingEnabled) option to **false**.

#####See Also#####
- [Customize Editors](/Documentation/Guide/Widgets/TreeList/Editing/#Customize_Editors)
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
<!--/fullDescription-->
<!--typeFunctionParamName1-->cellElement<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->dxElement<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->

<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->cellInfo<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->Object<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->

<!--/typeFunctionParamDescription2-->
<!--typeFunctionParamName2_field1-->setValue(newValue, newText)<!--/typeFunctionParamName2_field1-->
<!--typeFunctionParamType2_field1-->any<!--/typeFunctionParamType2_field1-->
<!--typeFunctionParamDescription2_field1-->

<!--/typeFunctionParamDescription2_field1-->
<!--typeFunctionParamName2_field2-->data<!--/typeFunctionParamName2_field2-->
<!--typeFunctionParamType2_field2-->Object<!--/typeFunctionParamType2_field2-->
<!--typeFunctionParamDescription2_field2-->

<!--/typeFunctionParamDescription2_field2-->
<!--typeFunctionParamName2_field3-->component<!--/typeFunctionParamName2_field3-->
<!--typeFunctionParamType2_field3-->dxTreeList<!--/typeFunctionParamType2_field3-->
<!--typeFunctionParamDescription2_field3-->

<!--/typeFunctionParamDescription2_field3-->
<!--typeFunctionParamName2_field4-->value<!--/typeFunctionParamName2_field4-->
<!--typeFunctionParamType2_field4-->any<!--/typeFunctionParamType2_field4-->
<!--typeFunctionParamDescription2_field4-->

<!--/typeFunctionParamDescription2_field4-->
<!--typeFunctionParamName2_field5-->displayValue<!--/typeFunctionParamName2_field5-->
<!--typeFunctionParamType2_field5-->any<!--/typeFunctionParamType2_field5-->
<!--typeFunctionParamDescription2_field5-->

<!--/typeFunctionParamDescription2_field5-->
<!--typeFunctionParamName2_field6-->text<!--/typeFunctionParamName2_field6-->
<!--typeFunctionParamType2_field6-->String<!--/typeFunctionParamType2_field6-->
<!--typeFunctionParamDescription2_field6-->

<!--/typeFunctionParamDescription2_field6-->
<!--typeFunctionParamName2_field7-->columnIndex<!--/typeFunctionParamName2_field7-->
<!--typeFunctionParamType2_field7-->Number<!--/typeFunctionParamType2_field7-->
<!--typeFunctionParamDescription2_field7-->

<!--/typeFunctionParamDescription2_field7-->
<!--typeFunctionParamName2_field8-->rowIndex<!--/typeFunctionParamName2_field8-->
<!--typeFunctionParamType2_field8-->Number<!--/typeFunctionParamType2_field8-->
<!--typeFunctionParamDescription2_field8-->

<!--/typeFunctionParamDescription2_field8-->
<!--typeFunctionParamName2_field9-->column<!--/typeFunctionParamName2_field9-->
<!--typeFunctionParamType2_field9-->dxTreeListColumn<!--/typeFunctionParamType2_field9-->
<!--typeFunctionParamDescription2_field9-->

<!--/typeFunctionParamDescription2_field9-->
<!--typeFunctionParamName2_field10-->row<!--/typeFunctionParamName2_field10-->
<!--typeFunctionParamType2_field10-->dxTreeListRowObject<!--/typeFunctionParamType2_field10-->
<!--typeFunctionParamDescription2_field10-->

<!--/typeFunctionParamDescription2_field10-->
<!--typeFunctionParamName2_field11-->rowType<!--/typeFunctionParamName2_field11-->
<!--typeFunctionParamType2_field11-->String<!--/typeFunctionParamType2_field11-->
<!--typeFunctionParamDescription2_field11-->

<!--/typeFunctionParamDescription2_field11-->
<!--typeFunctionParamName2_field12-->watch<!--/typeFunctionParamName2_field12-->
<!--typeFunctionParamType2_field12-->function()<!--/typeFunctionParamType2_field12-->
<!--typeFunctionParamDescription2_field12-->

<!--/typeFunctionParamDescription2_field12-->
