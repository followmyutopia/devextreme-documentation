---
id: GridBase.filter(filterExpr)
---
---
##### shortDescription
Applies a filter to the widget's [data source]({basewidgetpath}/Configuration/#dataSource).

##### param(filterExpr): any
A [filter expression](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering).

---
Pass an array with the following members to this method:

1. The data source field by which data items are filtered.
2. The comparison operator. The following operators are available: "=", "<>", ">", ">=", "<", "<=", "startswith", "endswith", "contains", "notcontains".
3. The value with which data source field values should be compared.

The filter passed to this method is not reflected in [any of the filtering UI elements](/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/) and is applied before these elements' filters. To clear all filters applied in code and the UI, call the [clearFilter()]({basewidgetpath}/Methods/#clearFilter) method.

#####See Also#####
#include common-link-callmethods
- [getCombinedFilter()]({basewidgetpath}/Methods/#getCombinedFilter)
- [filterValue]({basewidgetpath}/Configuration/#filterValue)