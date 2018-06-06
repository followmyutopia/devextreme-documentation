===========================================================================
<!--default-->'include'<!--/default-->
<!--acceptValues-->'exclude' | 'include'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether a user changes the current filter by including (selecting) or excluding (clearing the selection of) values.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts the following values:

- **include**       
Values in the [header filter](/Documentation/Guide/Widgets/PivotGrid/Filtering/#Filtering_in_the_UI) are unselected initially. Users change the filter by selecting the values.

- **exclude**       
All values in the header filter are selected initially. Users changes the filter by clearing the selection of certain values.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `FilterType` enum. This enum accepts the following values: `Include` and `Exclude`.

#####See Also#####
- **fields[]**.[filterValues](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#filterValues)
- **fields[]**.[allowFiltering](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#allowFiltering)
<!--/fullDescription-->
