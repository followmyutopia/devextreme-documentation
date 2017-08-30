<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
The type of the row.
<!--/shortDescription-->

<!--fullDescription-->
This field can have one of the following values.

- *"data"* - for rows representing data objects
- *"detail"* - for the row containing the detail section in the [master-detail interface](/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/)
- *"detailAdaptive" - for the row containing in the detail section of the [adaptive column](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Command_Columns/)
- *"group"* - for group rows
- *"groupFooter"* - for the row displayed in the [group footer](/Documentation/Guide/Widgets/DataGrid/Summaries/Group_Summary/#Alignment_and_Location)
- *"header"* - for the [header row](/Documentation/Guide/Widgets/DataGrid/Columns/Customize_Column_Headers/)
- *"filter"* - for the [filter row](/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#Filter_Row)
- *"totalFooter"* - for the row containing the [total summary](/Documentation/Guide/Widgets/DataGrid/Summaries/Total_Summary/)

[note]Available row properties depend on the row type. For example, the [data](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#data) and [key](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#key) properties are undefined for *header*, *filter* and *totalFooter* rows, but have values for the other row types. To get exhaustive information on the particular property, refer to its description.
<!--/fullDescription-->