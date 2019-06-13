===========================================================================
<!--handmade--><!--/handmade-->
<!--merge--><!--/merge-->
===========================================================================

<!--fullDescription-->
The **cellInfo** object has the following fields:

- **data**: <font size="-1">Object</font>        
The data of the row to which the cell belongs.
- **component**: <font size="-1">Object</font>  
The widget's instance.
- **value**: <font size="-1">Any</font>        
The cell's raw value.
- **oldValue**: <font size="-1">Any</font>        
The cell's previous raw value.
- **displayValue**: <font size="-1">Any</font>        
The cell's display value. Differs from the **value** field only when the column uses [lookup](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/lookup/) or [calculateDisplayValue](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#calculateDisplayValue).
- **text**: <font size="-1">String</font>        
**displayValue** after applying [format](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#format) and [customizeText](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#customizeText).
- **columnIndex**: <font size="-1">Number</font>        
The index of the cell's column.
- **rowIndex**: <font size="-1">Number</font>        
The index of the cell's row. Begins with 0 on each page. Refer to [Column and Row Indexes](/Documentation/Guide/Widgets/TreeList/Columns/Column_and_Row_Indexes/) for more information.
- **column**: <font size="-1">Object</font>        
The column's properties.
- **watch**: <font size="-1">Function</font>        
Allows tracking a variable and performing actions when it changes. Applies when [repaintChangesOnly](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#repaintChangesOnly) is **true**.       
This function has the following parameters:     

    - **getter(data)**: <font size="-1">Function</font>        
    A function that returns the variable that should be tracked.

    - **handler(newValue)**: <font size="-1">Function</font>        
    A function called when this variable changes.

[note]If you implement two-way data binding in your template, make sure that you have switched off the built-in implementation of this feature by setting the [twoWayBindingEnabled]({basewidgetpath}/Configuration/#twoWayBindingEnabled) option to **false**.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/TreeList/Overview/jQuery/Light/"
}

#####See Also#####
- [Customize Cells Appearance](/Documentation/Guide/Widgets/TreeList/Columns/Customize_Cells/#Customize_the_Appearance)
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
- [onCellPrepared]({basewidgetpath}/Configuration/#onCellPrepared)
<!--/fullDescription-->