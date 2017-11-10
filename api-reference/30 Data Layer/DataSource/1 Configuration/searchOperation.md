<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'contains'<!--/default-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the comparison operation used to search for the required items. One of *"="*, *"<>"*, *">"*, *">="*, *"<"*, *"<="*, *"startswith"*, *"endswith"*, *"contains"*, *"notcontains"*.
<!--/shortDescription-->

<!--fullDescription-->
You can use this option along with [searchExpr](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchExpr) and [searchValue](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchValue) to specify a simple filter. Use the [filter](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter) option for more complex filtering conditions. Filters are combined if you specify them in both ways.

In an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `FilterOperations` enum that accepts the following values: `Equal`, `NotEqual`, `LessThan`, `LessThanOrEqual`, `GreaterThan`, `GreaterThanOrEqual`, `NotContains`, `Contains`, `StartsWith`, `EndsWith` and `Between`.

#####See Also#####
- [Data Layer - Search Api](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Search_Api)
<!--/fullDescription-->