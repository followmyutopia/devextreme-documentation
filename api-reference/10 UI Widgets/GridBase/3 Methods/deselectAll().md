<!--id-->GridBase.deselectAll()<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Clears the selection of all rows on all pages or the currently rendered page only.
<!--/shortDescription-->

<!--returnType-->Promise<void><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the selection is cleared. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
Depending on the value of the [selectAllMode]({basewidgetpath}/Configuration/selection/#selectAllMode) option, this method clears selection of all rows on all pages or on the currently rendered pages only. The selection is cleared of only those rows that meet filtering conditions if a filter is applied. To clear selection regardless of the **selectAllMode** option's value or applied filters, call the [clearSelection()]({basewidgetpath}/Methods/#clearSelection) method.

#####See Also#####
#include common-link-callmethods
<!--/fullDescription-->