===========================================================================
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom template for column cells in the editing state.
<!--/shortDescription-->

<!--fullDescription-->
The **cellInfo** object has the following fields:

- **data**: <font size="-1">Object</font>        
The data of the row to which the cell belongs.
- **component**: <font size="-1">Object</font>  
The widget's instance.
- **value**: <font size="-1">Any</font>        
The value of the cell as it is specified in the data source.
- **displayValue**: <font size="-1">Any</font>        
The display value of the cell. Differs from the **value** field only when the column uses [lookup]({basewidgetpath}/Configuration/columns/lookup/) or [calculateDisplayValue]({basewidgetpath}/Configuration/columns/#calculateDisplayValue).
- **text**: <font size="-1">String</font>        
**displayValue** after applying [format]({basewidgetpath}/Configuration/columns/#format) and [customizeText]({basewidgetpath}/Configuration/columns/#customizeText).
- **columnIndex**: <font size="-1">Number</font>        
The index of the column to which the cell belongs. For more information on how this index is calculated, refer to the [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) topic.
- **rowIndex**: <font size="-1">Number</font>        
The index of the row to which the cell belongs. Begins with 0 on each page. Group rows are included. For details on row indexes, see the [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) topic.
- **column**: <font size="-1">Object</font>        
The settings of the column to which the cell belongs.
- **rowType**: <font size="-1">String</font>        
The type of the row to which the cell belongs. Equals *"data"* for ordinary rows or *"group"* for group rows.
- **setValue(newValue)**: <font size="-1">Method</font>        
Saves the edited value. After this method is called, the editing process ends.

    [note] A call of this method tells the widget that the value has been changed. Because of this, in *batch* [edit mode]({basewidgetpath}/Configuration/editing/#mode), an edited cell can be highlighted even if its value was not actually changed, for example, if a user switched this cell into the editing state and then immediately switched it back without changing the value. To prevent this behavior, check that the value has actually been changed before calling the **setValue(newValue)** method.


[note]If you implement two-way data binding in your template, make sure that you have switched off the built-in implementation of this feature by setting the [twoWayBindingEnabled]({basewidgetpath}/Configuration/#twoWayBindingEnabled) option to **false**.

#####See Also#####
- [Customize Editors](/Documentation/Guide/Widgets/DataGrid/Editing/#Customize_Editors)
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
<!--/fullDescription-->
<!--typeFunctionParamName1-->cellElement<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->dxElement<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The current cell's container.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->cellInfo<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->Object<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The cell's properties.
<!--/typeFunctionParamDescription2-->
