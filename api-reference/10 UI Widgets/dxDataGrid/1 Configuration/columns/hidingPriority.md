<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->The order of columns hiding<!--/d-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->number<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the order according to which grid columns must be concealed when the widget adapts to the screen or container size.
<!--/shortDescription-->

<!--fullDescription-->
If column hiding is [enabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#columnHidingEnabled), the widget will hide columns when adapting to the screen or container size. Columns have a different hiding priority. It is designated by the index assigned to the **hidingPriority** option. The lesser the index, the higher the probability that this column will be hidden.

By default, indexes ascend from right to left beginning with 0. It means that the rightmost column will most likely be hidden when the widget adapts, while the leftmost column will stay.

#####See Also#####
- [columnHidingEnabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#columnHidingEnabled) - enables column hiding.
- [onAdaptiveDetailRowPreparing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowGrouping) - allows you to customize the adaptive detail rows that contain information from hidden columns.

<a href="https://www.youtube.com/watch?v=JHUSz3S0cWw&index=2&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>
<!--/fullDescription-->