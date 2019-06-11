<!--id-->dxRangeSelector.Options.scale.categories<!--/id-->
===========================================================================
<!--type-->Array<Number, String, Date><!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the order of arguments on a discrete scale.
<!--/shortDescription-->

<!--fullDescription-->
If the [data source field](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#dataSourceField) provides string values, the scale build on them will be discrete. Values on a discrete scale are called "categories". By default, categories have the same running order as values in the data source field. If this is does not meet your requirements, declare an array specifying a custom running order for categories. This array should contain category names. After that, assign this array to the scale's **categories** option.

If you do not use a data source, specify the **categories** array to generate a discrete scale.
<!--/fullDescription-->