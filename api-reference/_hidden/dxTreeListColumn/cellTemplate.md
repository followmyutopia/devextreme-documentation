<!--id-->dxTreeListColumn.cellTemplate<!--/id-->
===========================================================================
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom template for data cells.
<!--/shortDescription-->

<!--fullDescription-->
[note]If you implement two-way data binding in your template, make sure that you have switched off the built-in implementation of this feature by setting the [twoWayBindingEnabled]({basewidgetpath}/Configuration/#twoWayBindingEnabled) option to **false**.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/TreeList/Overview/jQuery/Light/"
}

#####See Also#####
- [Customize Cells Appearance](/Documentation/Guide/Widgets/TreeList/Columns/Customize_Cells/#Customize_the_Appearance)
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
<!--typeFunctionParamName2_field1-->data<!--/typeFunctionParamName2_field1-->
<!--typeFunctionParamType2_field1-->Object<!--/typeFunctionParamType2_field1-->
<!--typeFunctionParamDescription2_field1-->
The data of the row to which the cell belongs.
<!--/typeFunctionParamDescription2_field1-->
<!--typeFunctionParamName2_field2-->component<!--/typeFunctionParamName2_field2-->
<!--typeFunctionParamType2_field2-->dxTreeList<!--/typeFunctionParamType2_field2-->
<!--typeFunctionParamDescription2_field2-->
The widget's instance.
<!--/typeFunctionParamDescription2_field2-->
<!--typeFunctionParamName2_field3-->value<!--/typeFunctionParamName2_field3-->
<!--typeFunctionParamType2_field3-->any<!--/typeFunctionParamType2_field3-->
<!--typeFunctionParamDescription2_field3-->
The cell's raw value.
<!--/typeFunctionParamDescription2_field3-->
<!--typeFunctionParamName2_field4-->oldValue<!--/typeFunctionParamName2_field4-->
<!--typeFunctionParamType2_field4-->any<!--/typeFunctionParamType2_field4-->
<!--typeFunctionParamDescription2_field4-->
The cell's previous raw value.
<!--/typeFunctionParamDescription2_field4-->
<!--typeFunctionParamName2_field5-->displayValue<!--/typeFunctionParamName2_field5-->
<!--typeFunctionParamType2_field5-->any<!--/typeFunctionParamType2_field5-->
<!--typeFunctionParamDescription2_field5-->
The cell's display value. Differs from the **value** field only when the column uses [lookup](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/lookup/) or [calculateDisplayValue](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#calculateDisplayValue).
<!--/typeFunctionParamDescription2_field5-->
<!--typeFunctionParamName2_field6-->text<!--/typeFunctionParamName2_field6-->
<!--typeFunctionParamType2_field6-->String<!--/typeFunctionParamType2_field6-->
<!--typeFunctionParamDescription2_field6-->
**displayValue** after applying [format](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#format) and [customizeText](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#customizeText).
<!--/typeFunctionParamDescription2_field6-->
<!--typeFunctionParamName2_field7-->columnIndex<!--/typeFunctionParamName2_field7-->
<!--typeFunctionParamType2_field7-->Number<!--/typeFunctionParamType2_field7-->
<!--typeFunctionParamDescription2_field7-->
The index of the cell's column.
<!--/typeFunctionParamDescription2_field7-->
<!--typeFunctionParamName2_field8-->rowIndex<!--/typeFunctionParamName2_field8-->
<!--typeFunctionParamType2_field8-->Number<!--/typeFunctionParamType2_field8-->
<!--typeFunctionParamDescription2_field8-->
The index of the cell's row. Begins with 0 on each page.        
Refer to [Column and Row Indexes](/Documentation/Guide/Widgets/TreeList/Columns/Column_and_Row_Indexes/) for more information.
<!--/typeFunctionParamDescription2_field8-->
<!--typeFunctionParamName2_field9-->column<!--/typeFunctionParamName2_field9-->
<!--typeFunctionParamType2_field9-->dxTreeListColumn<!--/typeFunctionParamType2_field9-->
<!--typeFunctionParamDescription2_field9-->
The column's properties.
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
Allows tracking a variable and performing actions when it changes. Applies when [repaintChangesOnly](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#repaintChangesOnly) is **true**.       
This function has the following parameters:     

- **getter(data)**: <font size="-1">Function</font>        
A function that returns the variable that should be tracked.

- **handler(newValue)**: <font size="-1">Function</font>        
A function called when this variable changes.
<!--/typeFunctionParamDescription2_field12-->
