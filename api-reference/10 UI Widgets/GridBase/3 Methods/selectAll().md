<!--id-->GridBase.selectAll()<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Selects all rows. 
<!--/shortDescription-->

<!--returnType-->Promise<void><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after all rows are selected. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
Depending on the value of the [selectAllMode]({basewidgetpath}/Configuration/selection/#selectAllMode) option, this method selects all rows on all pages or on the currently rendered pages only. If a filter is applied, this method selects only those rows that meet the filtering conditions.

#####See Also#####
#include common-link-callmethods
- [Initial and Runtime Selection](/Documentation/Guide/Widgets/DataGrid/Selection/#API/Initial_and_Runtime_Selection)
- [selectRows(keys, preserve)]({basewidgetpath}/Methods/#selectRowskeys_preserve) 
- [selection]({basewidgetpath}/Configuration/selection/)
<!--/fullDescription-->