<!--id-->GridBase.selectRows(keys, preserve)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Selects rows with specific keys.
<!--/shortDescription-->

<!--paramName1-->keys<!--/paramName1-->
<!--paramType1-->Array<any><!--/paramType1-->
<!--paramDescription1-->
The row keys.
<!--/paramDescription1-->

<!--paramName2-->preserve<!--/paramName2-->
<!--paramType2-->Boolean<!--/paramType2-->
<!--paramDescription2-->
Specifies whether previously selected rows should stay selected.
<!--/paramDescription2-->

<!--returnType-->Promise<any><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the rows are selected. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
By default, this method call clears selection of previously selected rows. To keep these rows selected, call this method with **true** as the second argument.

    <!--JavaScript-->widgetInstance.selectRows([5, 10, 12], true);

#####See Also#####
#include common-link-callmethods
- [Initial and Runtime Selection](/Documentation/Guide/Widgets/{WidgetName}/Selection/#API/Initial_and_Runtime_Selection)
- [selectRowsByIndexes(indexes)]({basewidgetpath}/Methods/#selectRowsByIndexesindexes)
<!--/fullDescription-->