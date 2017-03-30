<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Clears selection of all grid rows on the current page only or on all pages.
<!--/shortDescription-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise of the jQuery.Deferred object resolved after the grid has cleared selection of rows.
<!--/returnDescription-->

<!--fullDescription-->
Depending on the value of the [selectAllMode]({basewidgetpath}/Configuration/selection/#selectAllMode) option, this method clears selection of all rows on all pages or on the currently rendered pages only. If any filter is also applied, this method clears selection of only those rows that meet the filtering conditions.

If you need to clear selection of all grid rows regardless of the value of the **selectAllMode** option, use the [clearSelection()]({basewidgetpath}/Methods/#clearSelection) method.
<!--/fullDescription-->