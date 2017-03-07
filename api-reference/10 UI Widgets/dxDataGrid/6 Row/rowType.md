<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
The type of the row.
<!--/shortDescription-->

<!--fullDescription-->
This field can have one of the following values.

- *"data"* - for [rows representing data objects](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Rows)
- *"detail"* - for the row containing the detail section in the [master-detail interface](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Master-Detail_Interface)
- *"detailAdaptive" - for the row containing in the detail section of the [adaptive column](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Gid_Columns/Command_Columns)
- *"group"* - for [group rows](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Group_Rows)
- *"groupFooter"* - for the row displayed in the [group footer](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Group_Rows/Group_Summary)
- *"header"* - for the [header row](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Columns/Configuring_Column_Headers)
- *"filter"* - for the [filter row](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Filter_Row)
- *"totalFooter"* - for the row containing the [total summary](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Total_Summary)

[note]Available row properties depend on the row type. For example, the [data](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#data) and [key](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#key) properties are undefined for *header*, *filter* and *totalFooter* rows, but have values for the other row types. To get exhaustive information on the particular property, refer to its description.
<!--/fullDescription-->