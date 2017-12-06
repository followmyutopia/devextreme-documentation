<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->A data source used to fetch the data for lookup.<!--/d-->
===========================================================================
<!--handmade--><!--/handmade-->
<!--merge--><!--/merge-->
===========================================================================

<!--fullDescription-->
This option accepts one of the following.

- Array of objects      
 A simple JavaScript array containing a collection of plain objects.

- URL       
 A URL to JSON data or to a service returning data in JSON format.

- [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) or its [configuration object](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/)      
 A DataSource is an object that provides a handy API for data processing. A DataSource is a stateful object, which means that it saves data processing settings and applies them each time data is loaded. All underlying data access logic of a DataSource is isolated in a Store. A Store provides an API for reading and modifying data. Unlike the DataSource, a Store is a stateless object.

[note]If the data source is specified using the **dataSource** option, use the [items]({basewidgetpath}/Configuration/#items) option only for reading. Updating data items using the **items** option may cause unexpected results.

If the **Lookup** widget works with the data accessed using a [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) instance wrapping a [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/), pay attention to the [byKey](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#byKey) option of the **CustomStore** instance, which is required for this widget. This option takes on a function used to get an item by a key.

To display widget items, a default template can be used. This template is based on the data source fields that are listed in the [Default Item Template]({basewidgetpath}/Default_Item_Template/) section of the widget's API. Alternatively, you can implement a custom item template. 

<!--/fullDescription-->

