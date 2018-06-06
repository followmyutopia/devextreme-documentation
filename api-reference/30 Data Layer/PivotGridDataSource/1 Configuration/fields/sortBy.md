===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->'displayText' | 'value' | 'none'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how the field's values in the [headers](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Headers) should be sorted.
<!--/shortDescription-->

<!--fullDescription-->
Dimension attributes have a value and a display text. For example, a "Month" attribute's display text can be "January", "February", ..., "December"; its values can be 1, 2, ..., 12. "January" is first when sorting by values, and "April" is first when sorting by display text. No sorting is applied when setting the **sortBy** option to *"none"*.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `PivotGridSortBy` enum. This enum accepts the following values: `DisplayText`, `Value`, and `None`.

#####See Also#####
- **fields[]**.[sortOrder](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortOrder)
<!--/fullDescription-->