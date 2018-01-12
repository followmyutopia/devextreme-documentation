===========================================================================
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom template for column cells.
<!--/shortDescription-->

<!--fullDescription-->
The **cellInfo** object has the following fields:

- **data**: <font size="-1">Object</font>        
The data of the row to which the cell belongs.
- **component**: <font size="-1">jQuery</font>  
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

[note]If you implement two-way data binding in your template, make sure that you have switched off the built-in implementation of this feature by setting the [twoWayBindingEnabled]({basewidgetpath}/Configuration/#twoWayBindingEnabled) option to **false**.

<a href="/Demos/WidgetsGallery/Demo/Data_Grid/ColumnTemplate/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 5px;" target="_blank">View Function Template Demo</a>
<a href="/Demos/WidgetsGallery/Demo/Data_Grid/Column3RdPartyEngineTemplate/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Underscore Template Demo</a>

#####See Also#####
- [Customize Cells Appearance](/Documentation/Guide/Widgets/DataGrid/Columns/Customize_Cells/#Customize_the_Appearance)
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
- [onCellPrepared]({basewidgetpath}/Configuration/#onCellPrepared)
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
