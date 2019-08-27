---
id: GridBase.getCombinedFilter(returnDataField)
---
---
##### shortDescription
Gets the total filter that combines all the filters applied.

##### return: any
A [filter expression](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering).

##### param(returnDataField): Boolean
Specifies whether the total filter should contain data fields instead of [getters](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters).

---
Use this method to get the total filter. This filter combines filters applied using [filtering UI elements](/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/) and the [filter(filterExpr)]({basewidgetpath}/Methods/#filterfilterExpr) method.

#####See Also#####
#include common-link-callmethods
- [getCombinedFilter()]({basewidgetpath}/Methods/#getCombinedFilter)