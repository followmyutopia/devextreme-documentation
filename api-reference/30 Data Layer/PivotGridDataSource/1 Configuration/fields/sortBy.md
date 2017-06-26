<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->'displayText' | 'value' | 'none'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how field data should be sorted. Can be used for the [XmlaStore](/Documentation/ApiReference/Data_Layer/XmlaStore/) store type only.
<!--/shortDescription-->

<!--fullDescription-->
In [XMLA](/Documentation/ApiReference/Data_Layer/XmlaStore/), each data object of a dimension attribute has a value and a display text. For example, month attribute display texts are 'January', 'February', ..., 'December'; and values are 1, 2, ..., 12. Sorting by value will make the first month be 'January', whereas, sorting by display text will perform alphabet sorting and make the first month be 'April'.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `PivotGridSortBy` enum. This enum accepts the following values: `DisplayText` and `Value`.
<!--/fullDescription-->