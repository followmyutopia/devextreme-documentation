<!--id-->dxDataGrid.Options.remoteOperations.groupPaging<!--/id-->
===========================================================================
<!--default-->false<!--/default-->
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether paging by groups should be performed on the server side.
<!--/shortDescription-->

<!--fullDescription-->
Remote group paging allows you to load groups from a remote source in portions. This feature speeds up grouping because the **DataGrid** transmits less data. However, requests are more frequent because the **DataGrid** sends several requests each time a user expands a group or sorts/filters data.

Remote group paging has the following specificities:

- All other operations (filtering, paging, grouping, sorting, and summaries calculation) should also be remote.

- Remote group paging does not apply if you set the **grouping**.[autoExpandAll](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#autoExpandAll) option to **true** or call the [expandAll(groupIndex)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#expandAllgroupIndex) method.
<!--/fullDescription-->
