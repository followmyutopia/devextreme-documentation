===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a pattern for the summary item text.
<!--/shortDescription-->

<!--fullDescription-->
When implementing the pattern, you can access the summary item value with applied [format](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#valueFormat) using position marker 0. If the summary item is placed in any other column rather than its [parent one](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#column), you can also access the [caption](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#caption) of the parent column using position marker 1. Place each of these position markers within curly brackets.

If your scenario requires more complex text customizations, utilize the [customizeText](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#customizeText) option.

#####See Also#####
- [Format Text and Value](/Documentation/Guide/Widgets/DataGrid/Summaries/Format_Text_and_Value/)
<!--/fullDescription-->