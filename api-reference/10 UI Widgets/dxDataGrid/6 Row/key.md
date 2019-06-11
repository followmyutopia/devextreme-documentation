<!--id-->dxDataGridRowObject.key<!--/id-->
===========================================================================
<!--type-->any<!--/type-->
===========================================================================

<!--shortDescription-->
The key of the data object represented by the row.
<!--/shortDescription-->

<!--fullDescription-->
The contents of this object depend on the value of the [rowType](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#rowType) property. The following list illustrates this dependency.

- **rowType** is *"data"* &rArr; **key** contains the key of the data object represented by the row
- **rowType** is *"detail"* &rArr; **key** contains the key of the data object represented by the master row in the [master-detail interface](/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/)
- **rowType** is *"group"* or *"groupFooter"* &rArr; **key** contains the grouping value         
- **rowType** is *"header"*, *"filter"* or *"totalFooter"* &rArr; **key** is **undefined**

[note]If a field providing keys is not specified in the [data source](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource), the whole data object is considered the key.
<!--/fullDescription-->