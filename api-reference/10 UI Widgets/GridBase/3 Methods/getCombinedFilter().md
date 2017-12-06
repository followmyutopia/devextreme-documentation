===================================================================
===================================================================

<!--shortDescription-->
Returns the total filter that combines all the filters applied.
<!--/shortDescription-->

<!--returnType-->any<!--/returnType-->
<!--returnDescription-->
A [filter expression](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering).
<!--/returnDescription-->

<!--fullDescription-->
Use this method to get the total filter, which combines filters applied using the [filter(filterExpr)]({basewidgetpath}/Methods/#filterfilterExpr) method, [filter row]({basewidgetpath}/Configuration/filterRow/), [header filter]({basewidgetpath}/Configuration/headerFilter/) and the [search panel]({basewidgetpath}/Configuration/searchPanel/). Note that the total filter contains [getters](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters). To get the total filter with data fields, call the [getCombinedFilter(returnDataField)]({basewidgetpath}/Methods/#getCombinedFilterreturnDataField) method.

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Calling_Methods)
<!--/fullDescription-->