<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Applies a filter to the widget's data source.
<!--/shortDescription-->

<!--paramName1-->filterExpr<!--/paramName1-->
<!--paramType1-->any<!--/paramType1-->
<!--paramDescription1-->
A [filter expression](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering).
<!--/paramDescription1-->

<!--fullDescription-->
Pass an array with the following members to this method.

1. The data source field by which data items are filtered.
2. The comparison operator. The following operators are available: "=", "<>", ">", ">=", "<", "<=", "startswith", "endswith", "contains", "notcontains".
3. The value with which data source field values should be compared.

This method applies a filter before the [filter row]({basewidgetpath}/Configuration/filterRow/), [search panel]({basewidgetpath}/Configuration/searchPanel/), or [header filter]({basewidgetpath}/Configuration/headerFilter/) does. To clear all filters applied both from code and the UI, call the [clearFilter()]({basewidgetpath}/Methods/#clearFilter) method.

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/)
- [getCombinedFilter()]({basewidgetpath}/Methods/#getCombinedFilter)
<!--/fullDescription-->