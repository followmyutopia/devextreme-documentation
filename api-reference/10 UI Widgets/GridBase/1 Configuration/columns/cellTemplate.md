<!--id-->GridBaseColumn.cellTemplate<!--/id-->
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
- **component**: <font size="-1">Object</font>  
The widget's instance.
- **value**: <font size="-1">Any</font>        
The cell's raw value.
- **oldValue**: <font size="-1">Any</font>        
The cell's previous raw value.
- **displayValue**: <font size="-1">Any</font>        
The cell's display value. Differs from the **value** field only when the column uses [lookup]({basewidgetpath}/Configuration/columns/lookup/) or [calculateDisplayValue]({basewidgetpath}/Configuration/columns/#calculateDisplayValue).
- **text**: <font size="-1">String</font>        
**displayValue** after applying [format]({basewidgetpath}/Configuration/columns/#format) and [customizeText]({basewidgetpath}/Configuration/columns/#customizeText).
- **columnIndex**: <font size="-1">Number</font>        
The index of the cell's column. For more information on how this index is calculated, refer to the [Column and Row Indexes](/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_and_Row_Indexes/) topic.
- **rowIndex**: <font size="-1">Number</font>        
The index of the cell's row. Begins with 0 on each page. Group rows are included. For details on row indexes, see the [Column and Row Indexes](/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_and_Row_Indexes/) topic.
- **column**: <font size="-1">Object</font>        
The column's properties.
- **rowType**: <font size="-1">String</font>        
The row's [type]({basewidgetpath}/Row/#rowType). 
- **watch**: <font size="-1">Function</font>        
Allows tracking a variable and performing actions when it changes. Applies when [repaintChangesOnly]({basewidgetpath}/Configuration/#repaintChangesOnly) is **true**.       
This function has the following parameters:     

    - **getter(data)**: <font size="-1">Function</font>        
    A function that returns the variable that should be tracked.

    - **handler(newValue)**: <font size="-1">Function</font>        
    A function called when this variable changes.

[note]If you implement two-way data binding in your template, make sure that you have switched off the built-in implementation of this feature by setting the [twoWayBindingEnabled]({basewidgetpath}/Configuration/#twoWayBindingEnabled) option to **false**.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/DataGrid/CellCustomization/jQuery/Light/"
}

[note] In [fixed columns]({basewidgetpath}/Configuration/columnFixing/), a **cellTemplate** is initialized and rendered twice for each cell.

#####See Also#####
- [Customize Cells Appearance](/Documentation/Guide/Widgets/DataGrid/Columns/Customize_Cells/#Customize_the_Appearance)
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
- [onCellPrepared]({basewidgetpath}/Configuration/#onCellPrepared)
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
