===========================================================================
<!--default-->false<!--/default-->
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether the focused row feature is enabled.
<!--/shortDescription-->

<!--fullDescription-->
When this option is set to **true**, the following applies:

- Rows are initially sorted by keys.
- The row with [focusedRowIndex]({basewidgetpath}/Configuration/#focusedRowIndex) or [focusedRowKey]({basewidgetpath}/Configuration/#focusedRowKey) is highlighted.
- When the data row area is focused, this row is focused and the area is scrolled down to it.
- The [onFocusedRowChanging]({basewidgetpath}/Configuration/#onFocusedRowChanging) and [onFocusedRowChanged]({basewidgetpath}/Configuration/#onFocusedRowChanged) functions become active.

[note] Specify the widget's [keyExpr]({basewidgetpath}/Configuration/#keyExpr) or the [Store's](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores) **key** option to ensure that the focused row feature works properly.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/DataGrid/FocusedRow/jQuery/Light/"
}

#####See Also#####
- [navigateToRow(key)]({basewidgetpath}/Methods/#navigateToRowkey)
- [focusedColumnIndex]({basewidgetpath}/Configuration/#focusedColumnIndex)
- **key** in [ArrayStore](/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key) | [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key) | [LocalStore](/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#key) | [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#key)
<!--/fullDescription-->