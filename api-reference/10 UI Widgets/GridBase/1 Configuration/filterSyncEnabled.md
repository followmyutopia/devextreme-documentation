---
id: GridBase.Options.filterSyncEnabled
type: Boolean
---
---
##### shortDescription
Specifies whether to synchronize the [filter row](/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Filter_Row), [header filter](/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Header_Filter), and [filter builder](/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Filter_Panel_with_Filter_Builder). The synchronized filter expression is stored in the [filterValue](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterValue.md '{basewidgetpath}/Configuration/#filterValue') option.

---
Synchronization is enabled if the [filter panel](/Documentation/ApiReference/UI_Widgets/dx{WidgetName}/Configuration/filterPanel/) is visible. When it is enabled, check that each column that allows filtering has the [dataField](/api-reference/_hidden/GridBaseColumn/dataField.md '{basewidgetpath}/Configuration/columns/#dataField') or [name](/api-reference/_hidden/GridBaseColumn/name.md '{basewidgetpath}/Configuration/columns/#name') option specified.