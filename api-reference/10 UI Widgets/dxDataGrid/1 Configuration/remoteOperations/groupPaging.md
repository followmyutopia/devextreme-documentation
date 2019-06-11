<!--id-->dxDataGrid.Options.remoteOperations.groupPaging<!--/id-->
===========================================================================
<!--default-->false<!--/default-->
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether paging by groups should be performed on the server side.
<!--/shortDescription-->

<!--fullDescription-->
Remote group paging allows you to load groups from a remote source in portions. This feature speeds up grouping because the **DataGrid** transmits less data. However, requests become more frequent because the **DataGrid** sends several requests each time a user expands a group or sorts/filters data.

Remote group paging has the following restrictions:

- Filtering, paging, grouping, and sorting should be performed on the server.
- All groups should be collapsed initially by setting the **grouping**.[autoExpandAll](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#autoExpandAll) option to **false**.
- The [expandAll(groupIndex)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#expandAllgroupIndex) method should not be called. Otherwise, the widget ignores remote group paging.
 
[note] When **groupPaging** is enabled, all other operations (filtering, sorting, paging, grouping and summaries calculation) become remote. 
<!--/fullDescription-->