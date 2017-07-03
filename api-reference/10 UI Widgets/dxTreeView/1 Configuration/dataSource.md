<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->A data source used to fetch items of the widget.<!--/d-->
===========================================================================
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

[note]The widget requires each data item to have a key field whose value is unique within the entire array.

[note]If the data source is specified using the [dataSource](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#dataSource) option, use the [items](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#items) option only for reading. Updating data items using the **items** option may cause unexpected results.

To display widget items, a default template can be used. This template is based on the data source fields that are listed in the [Default Item Template](/Documentation/ApiReference/UI_Widgets/dxTreeView/Default_Item_Template/) section of the widget's API. Alternatively, you can implement a custom item template. For details, refer to the [Customize Node Appearance](/Documentation/Guide/Widgets/TreeView/Customize_Node_Appearance) topic.

#####See Also#####
- [createChildren](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#createChildren) - allows you to load nodes manually.
<!--/fullDescription-->

<!--handmade-->
<!--/handmade-->