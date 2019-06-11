<!--id-->DataExpressionMixin.Options.items<!--/id-->
===========================================================================
<!--type-->Array<CollectionWidgetItem, Object><!--/type-->
===========================================================================

<!--shortDescription-->
An array of items displayed by the widget.
<!--/shortDescription-->

<!--fullDescription-->
You can use the [dataSource]({basewidgetpath}/Configuration/#dataSource) option instead. Unlike the **items** option, the **dataSource** option can take on the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) configuration object as well as a simple array.

[note]If you need to modify the data source specified using the **items** option at runtime, do it only with the help of the **items** option. Updating data items using the [dataSource]({basewidgetpath}/Configuration/#dataSource) option may cause unexpected results.

<!--/fullDescription-->