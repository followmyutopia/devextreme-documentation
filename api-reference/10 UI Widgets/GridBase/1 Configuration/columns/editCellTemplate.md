===========================================================================
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom template for column cells in the editing state.
<!--/shortDescription-->

<!--fullDescription-->
The **cellInfo** object has the following fields:

- **setValue(newValue, newText)**: <font size="-1">Method</font>        
A method that you should call to change the cell value and, optionally, the displayed value after the editor's value is changed.

 [note] In batch [editing mode]({basewidgetpath}/Configuration/editing/#mode), check that the value changed before calling this method to ensure correct cell highlighting.
 
- **data**: <font size="-1">Object</font>        
The data of the row the cell belongs to.
- **component**: <font size="-1">Object</font>  
The widget's instance.
- **value**: <font size="-1">Any</font>        
The cell value as it is specified in the data source.
- **displayValue**: <font size="-1">Any</font>        
The displayed cell value. Differs from the **value** field only when the column uses [lookup]({basewidgetpath}/Configuration/columns/lookup/) or [calculateDisplayValue]({basewidgetpath}/Configuration/columns/#calculateDisplayValue).
- **text**: <font size="-1">String</font>        
**displayValue** after applying [format]({basewidgetpath}/Configuration/columns/#format) and [customizeText]({basewidgetpath}/Configuration/columns/#customizeText).
- **columnIndex**: <font size="-1">Number</font>        
The index of the column the cell belongs to. Refer to the [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) topic for more information on how this index is calculated.
- **rowIndex**: <font size="-1">Number</font>        
The index of the row the cell belongs to. Begins with 0 on each page. Group rows are included. Refer to the [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) topic for more information on row indexes.
- **column**: <font size="-1">Object</font>        
The settings of the column the cell belong to.
- **rowType**: <font size="-1">String</font>        
The type of the row the cell belongs to. Equals *"data"* for ordinary rows or *"group"* for group rows.

[note]If you implement two-way data binding in your template, make sure that you switch off the built-in implementation of this feature by setting the [twoWayBindingEnabled]({basewidgetpath}/Configuration/#twoWayBindingEnabled) option to **false**.

#####See Also#####
- [Customize Editors](/Documentation/Guide/Widgets/DataGrid/Editing/#Customize_Editors)
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
<!--/fullDescription-->
<!--typeFunctionParamName1-->cellElement<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->dxElement<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The current cell's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->cellInfo<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->Object<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The cell's properties.
<!--/typeFunctionParamDescription2-->
