<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Selects [grid rows](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Rows) by indexes.
<!--/shortDescription-->

<!--paramName1-->indexes<!--/paramName1-->
<!--paramType1-->array<!--/paramType1-->
<!--paramDescription1-->
The indexes of rows to be selected.
<!--/paramDescription1-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise of the jQuery.Deferred object resolved after the grid has selected the specified rows.
<!--/returnDescription-->

<!--fullDescription-->
An array that is passed to this method as an argument must contain row indexes. When calculating them, data and group rows are counted, though only data rows can be selected.

Note that if the pager is used for navigating through pages, selection applied by the **selectRowsByIndexes(indexes)** method will be cleared once the user moves to a different page. Therefore, to preserve the selection, call this method within the [onContentReady]({basewidgetpath}/Configuration/#onContentReady) callback function.

If the virtual scrolling mode is used, row indexes are rendered only for pages that have been visible. So, it is impossible to select a row on a page, that has not been visible using this method. 

[note] Calling the **selectRowsByIndexes(indexes)** method deselects all previously selected rows.
<!--/fullDescription-->