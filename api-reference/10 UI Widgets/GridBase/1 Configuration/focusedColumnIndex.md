===========================================================================
<!--default-->-1<!--/default-->
<!--type-->Number<!--/type-->
<!--firedEvents-->focusedCellChanged<!--/firedEvents-->
===========================================================================

<!--shortDescription-->
Specifies the index of the column focused initially or currently in the data row area.
<!--/shortDescription-->

<!--fullDescription-->
This index depends on the column's location and can change dynamically (for example, when columns are [reordered](/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_Reordering/)). The following image illustrates the indexing system. Note that [command columns](/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_Types/Command_Columns/) have indexes but cannot be focused.

![DevExtreme HTML5 JavaScript {WidgetName} Column Index](/Content/images/doc/18_2/{WidgetName}/visual_elements/columnIndexes.png)

The default index, *-1*, means that no column is focused.

#####See Also#####
- [onFocusedCellChanging]({basewidgetpath}/Configuration/#onFocusedCellChanging) | [onFocusedCellChanged]({basewidgetpath}/Configuration/#onFocusedCellChanged)
- [focusedRowIndex]({basewidgetpath}/Configuration/#focusedRowIndex) | [focusedRowKey]({basewidgetpath}/Configuration/#focusedRowKey)
<!--/fullDescription-->