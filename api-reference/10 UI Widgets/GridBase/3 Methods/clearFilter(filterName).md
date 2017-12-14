===================================================================
===================================================================

<!--shortDescription-->
Clears all row filters of a specific type.
<!--/shortDescription-->

<!--paramName1-->filterName<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
The type of the filter to be cleared.
<!--/paramDescription1-->

<!--fullDescription-->
The method's parameter specifies what type of filter should be cleared. The parameter can have one of the following values:

* 'dataSource' - clears the [dataSource filter](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter) (defined in the configuration or applied by the [filter(filterExpr)]({basewidgetpath}/Methods/#filterfilterExpr) method);
* 'search' - clears the [search panel]({basewidgetpath}/Configuration/searchPanel/);
* 'header' - clears the [column header filter]({basewidgetpath}/Configuration/headerFilter/);
* 'row' - clears the [filter row]({basewidgetpath}/Configuration/filterRow/).

#####See Also#####
#include common-link-callmethods
<!--/fullDescription-->