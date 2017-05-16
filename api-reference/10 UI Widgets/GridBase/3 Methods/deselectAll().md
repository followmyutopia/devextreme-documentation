<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Clears the selection of all rows on all pages or the currently rendered page only.
<!--/shortDescription-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise of the jQuery.Deferred object resolved after the selection is cleared.
<!--/returnDescription-->

<!--fullDescription-->
Depending on the value of the [selectAllMode]({basewidgetpath}/Configuration/selection/#selectAllMode) option, this method clears selection of all rows on all pages or on the currently rendered pages only. The selection is cleared of only those rows that meet filtering conditions if a filter is applied. To clear selection regardless of the **selectAllMode** option's value or applied filters, call the [clearSelection()]({basewidgetpath}/Methods/#clearSelection) method.
<!--/fullDescription-->