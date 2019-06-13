<!--id-->GridBase.selectRowsByIndexes(indexes)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Selects rows with specific indexes.
<!--/shortDescription-->

<!--paramName1-->indexes<!--/paramName1-->
<!--paramType1-->Array<Number><!--/paramType1-->
<!--paramDescription1-->
The row indexes.
<!--/paramDescription1-->

<!--returnType-->Promise<any><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the rows are selected. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
This method has the following specifics:

- This method call clears selection of all previously selected rows.
- When calculating row indexes, the widget counts data and group rows. Nevertheless, only data rows can be selected.
- If the [pager]({basewidgetpath}/Configuration/pager/) is used, selection is cleared once a user moves to a different page. To preserve it, call this method within the [onContentReady]({basewidgetpath}/Configuration/#onContentReady) handler.

#####See Also#####
#include common-link-callmethods
- [Initial and Runtime Selection](/Documentation/Guide/Widgets/DataGrid/Selection/#API/Initial_and_Runtime_Selection)
<!--/fullDescription-->