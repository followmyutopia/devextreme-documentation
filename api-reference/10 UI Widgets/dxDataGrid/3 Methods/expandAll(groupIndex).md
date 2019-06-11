<!--id-->dxDataGrid.expandAll(groupIndex)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Expands master rows or groups of a specific level. Does not apply if data is remote. 
<!--/shortDescription-->

<!--paramName1-->groupIndex<!--/paramName1-->
<!--paramType1-->Number|undefined<!--/paramType1-->
<!--paramDescription1-->
The group's level. Pass **undefined** to expand all groups. Pass *-1* to expand all master rows.
<!--/paramDescription1-->

<!--fullDescription-->
[note] The [rowExpanded](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowExpanded) event is not raised when you call this method.

#####See Also#####
#include common-link-callmethods
- [Expand and Collapse Groups - API](/Documentation/Guide/Widgets/DataGrid/Grouping/#API/Expand_and_Collapse_Groups)
- [Master-Detail Interface - API](/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/#API)
<!--/fullDescription-->