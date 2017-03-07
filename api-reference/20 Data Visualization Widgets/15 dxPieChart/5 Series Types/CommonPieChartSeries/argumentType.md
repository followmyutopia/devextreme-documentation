<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->'numeric' | 'datetime' | 'string'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the required type for series arguments.
<!--/shortDescription-->

<!--fullDescription-->
By default, the series arguments have the same type as the values of a corresponding data source field. If the data source field values are numeric, the series arguments will also be numeric, etc. However, you can convert the data source values to another type. In this instance, specify the required type using the **argumentType** option.

When configuring the widget using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), specify this option using the `ChartDataType` enum. This enum accepts the following values: `Numeric`, `DateTime` and `String`.
<!--/fullDescription-->