===================================================================
===================================================================

<!--shortDescription-->
Collapses a group or a master row with a specific key.
<!--/shortDescription-->

<!--paramName1-->key<!--/paramName1-->
<!--paramType1-->any<!--/paramType1-->
<!--paramDescription1-->
The key of the group or the master row.
<!--/paramDescription1-->

<!--returnType-->Promise<void><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the row is collapsed. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
To collapse a group row, call this method with an array each member of which is a grouping value. To collapse a [master row](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail/), pass its key to this method.

#####See Also#####
#include common-link-callmethods
- [Expand and Collapse Groups - API](/Documentation/Guide/Widgets/DataGrid/Grouping/#API/Expand_and_Collapse_Groups)
- [Master-Detail Interface - API](/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/#API)
<!--/fullDescription-->