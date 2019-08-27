---
id: DataSource.Options.searchOperation
type: String
default: 'contains'
---
---
##### shortDescription
Specifies the comparison operation used in searching. The following values are accepted: *"="*, *"<>"*, *">"*, *">="*, *"<"*, *"<="*, *"startswith"*, *"endswith"*, *"contains"*, *"notcontains"*.

---
You can use this option with [searchExpr](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchExpr) and [searchValue](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchValue) to specify a simple filter. Use the [filter](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter) option for more complex filtering conditions. Filters are combined if you specify them in both ways.

In an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `FilterOperations` enum that accepts the following values: `Equal`, `NotEqual`, `LessThan`, `LessThanOrEqual`, `GreaterThan`, `GreaterThanOrEqual`, `NotContains`, `Contains`, `StartsWith`, `EndsWith` and `Between`.

#####See Also#####
- [Data Layer - Search Api](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Search_Api)