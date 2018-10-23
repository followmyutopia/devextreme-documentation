===========================================================================
<!--default-->-1<!--/default-->
<!--type-->Number<!--/type-->
<!--firedEvents-->focusedRowChanged<!--/firedEvents-->
===========================================================================

<!--shortDescription-->
Specifies the initially or currently focused grid row's index. Use it when [focusedRowEnabled]({basewidgetpath}/Configuration/#focusedRowEnabled) is **true**.
<!--/shortDescription-->

<!--fullDescription-->
The index is reset on each page in standard [scrolling](/Documentation/Guide/Widgets/{WidgetName}/Scrolling/) mode but preserved with other scrolling modes.

The default index, *-1*, means that no row is focused.

The [focusedRowKey]({basewidgetpath}/Configuration/#focusedRowKey) takes precedence over the **focusedRowIndex** when both are specified.  

#####See Also#####
- [onFocusedRowChanging]({basewidgetpath}/Configuration/#onFocusedRowChanging) | [onFocusedRowChanged]({basewidgetpath}/Configuration/#onFocusedRowChanged)
- [focusedColumnIndex]({basewidgetpath}/Configuration/#focusedColumnIndex)
<!--/fullDescription-->