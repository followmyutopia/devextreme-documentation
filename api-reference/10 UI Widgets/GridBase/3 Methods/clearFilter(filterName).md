===================================================================
===================================================================

<!--shortDescription-->
Clears all row filters of a specific type.
<!--/shortDescription-->

<!--paramName1-->filterName<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
The filter type.
<!--/paramDescription1-->

<!--fullDescription-->
The method's parameter specifies what type of filter should be cleared. This parameter can have one of the following values:

- *"row"*       
Clears the [filter row](/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Filter_Row).
- *"header"*        
Clears the [header filter](/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Header_Filter).
- *"filterValue"*       
Clears the [filter builder](/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Filter_Panel_with_Filter_Builder) and the [synchronized filtering UI elements]({basewidgetpath}/Configuration/#filterSyncEnabled).
- *"search"*        
Clears the [search panel](/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Search_Panel).
- *"dataSource"*        
Clears the data source filter defined [in the configuration](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter) or applied by the [filter(filterExpr)]({basewidgetpath}/Methods/#filterfilterExpr) method.

#####See Also#####
#include common-link-callmethods
- [clearFilter()]({basewidgetpath}/Methods/#clearFilter)
<!--/fullDescription-->