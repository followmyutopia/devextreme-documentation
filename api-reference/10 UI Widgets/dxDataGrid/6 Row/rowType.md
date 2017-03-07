<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->The type of the current row.<!--/d-->
===========================================================================
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
The type of the row.
<!--/shortDescription-->

<!--fullDescription-->
This field can have one of the following values.

- *"data"* - for [rows representing data objects](/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Grid_Rows)
- *"detail"* - for the row containing the detail section in the [master-detail interface](/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Master-Detail_Interface)
- *"group"* - for [group rows](/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Group_Rows)
- *"groupFooter"* - for the row displayed in the [group footer](/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Group_Rows/Group_Summary)
- *"header"* - for the [header row](/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Grid_Columns/Configuring_Column_Headers)
- *"filter"* - for the [filter row](/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Filter_Row)
- *"totalFooter"* - for the row containing the [total summary](/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Total_Summary)

[note]Available row properties depend on the row type. For example, the [data](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#data) and [key](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#key) properties are undefined for *header*, *filter* and *totalFooter* rows, but have values for the other row types. To get exhaustive information on the particular property, refer to its description.
<!--/fullDescription-->