<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Returns the total filter that combines all the filters applied.
<!--/shortDescription-->

<!--returnType-->any<!--/returnType-->
<!--returnDescription-->
A <a href="/Documentation/17_1/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering">filter expression</a>.
<!--/returnDescription-->

<!--fullDescription-->
Use this method to get the total filter, which combines filters applied using the [filter(filterExpr)]({basewidgetpath}/Methods/#filterfilterExpr) method, [filter row]({basewidgetpath}/Configuration/filterRow/), [header filter]({basewidgetpath}/Configuration/headerFilter/) and the [search panel]({basewidgetpath}/Configuration/searchPanel/). Note that the total filter contains [getters](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters). To get the total filter with data fields, call the [getCombinedFilter(returnDataField)]({basewidgetpath}/Methods/#getCombinedFilterreturnDataField) method.
<!--/fullDescription-->