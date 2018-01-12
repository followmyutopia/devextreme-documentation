===========================================================================
<!--handmade--><!--/handmade-->
<!--merge--><!--/merge-->
===========================================================================

<!--fullDescription-->
The **cellInfo** object has the following fields:

- **data**: <font size="-1">Object</font>        
Data of the row to which the cell belongs.
- **component**: <font size="-1">jQuery</font>  
The widget's instance.
- **value**: <font size="-1">Any</font>        
The value of the cell as it is specified in the data source.
- **displayValue**: <font size="-1">Any</font>        
The display value of the cell. Differs from the **value** field only when the column uses [lookup]({basewidgetpath}/Configuration/columns/lookup/) or [calculateDisplayValue]({basewidgetpath}/Configuration/columns/#calculateDisplayValue).
- **text**: <font size="-1">String</font>        
**displayValue** after applying [format]({basewidgetpath}/Configuration/columns/#format) and [customizeText]({basewidgetpath}/Configuration/columns/#customizeText).
- **columnIndex**: <font size="-1">Number</font>        
The index of the column to which the cell belongs.
- **rowIndex**: <font size="-1">Number</font>        
The index of the row to which the cell belongs. Begins with 0 on each page.
- **column**: <font size="-1">Object</font>        
The settings of the column to which the cell belongs.

[note]If you implement two-way data binding in your template, make sure that you have switched off the built-in implementation of this feature by setting the [twoWayBindingEnabled]({basewidgetpath}/Configuration/#twoWayBindingEnabled) option to **false**.

#####See Also#####
- [Customize Cells Appearance](/Documentation/Guide/Widgets/TreeList/Columns/Customize_Cells/#Customize_the_Appearance)
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
- [onCellPrepared]({basewidgetpath}/Configuration/#onCellPrepared)
<!--/fullDescription-->