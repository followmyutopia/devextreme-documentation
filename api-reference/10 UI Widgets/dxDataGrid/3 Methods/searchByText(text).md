<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->

Searches grid records by a search string.

<!--/shortDescription-->

<!--paramName1-->text<!--/paramName1-->
<!--paramType1-->string<!--/paramType1-->
<!--paramDescription1-->

A search string.

<!--/paramDescription1-->

<!--fullDescription-->

This method searches grid records by a search string. This string is searched in those grid columns that have the [allowFiltering](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowFiltering) option set to *true*. To clear search results, call the **searchByText(text)** method with an empty string as the argument.

Additionally, a user might be able to search records using a [search panel](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Search_Panel). The panel is hidden by default. To make it visible, assign *true* to the **searchPanel** | [visible](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/#visible) property.

<!--/fullDescription-->