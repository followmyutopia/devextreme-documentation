===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->'displayText' | 'value' | 'none'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how field data should be sorted. Can be used for the [XmlaStore](/Documentation/ApiReference/Data_Layer/XmlaStore/) store type only.
<!--/shortDescription-->

<!--fullDescription-->
In [XMLA](/Documentation/ApiReference/Data_Layer/XmlaStore/), each dimension attribute data object has a value and a display text. For example, month attribute display texts are 'January', 'February', ..., 'December'; values are 1, 2, ..., 12. Sorting by values makes 'January' the first month, whereas, sorting by display text performs alphabet sorting and makes 'April' the first month. Set this option to *"none"* to leave the objects unsorted.

Specify this option using the `PivotGridSortBy` enum when using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/). This enum accepts the following values: `DisplayText`, `Value`, and `None`.
<!--/fullDescription-->