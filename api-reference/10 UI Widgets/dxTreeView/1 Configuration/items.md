<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->An array of items to be displayed by the widget.<!--/d-->
===========================================================================
<!--type-->array<!--/type-->
===========================================================================

<!--shortDescription-->
An array of items displayed by the widget.
<!--/shortDescription-->

<!--fullDescription-->
[note]The widget requires each data item to have a key field whose value is unique within the entire array.

You can use the [dataSource]({basewidgetpath}/Configuration/#dataSource) option instead. Unlike the **items** option, the **dataSource** option can take on the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) configuration object as well as a simple array.

[note]If you need to modify the data source specified using the **items** option at runtime, do it only with the help of the **items** option. Updating data items using the [dataSource]({basewidgetpath}/Configuration/#dataSource) option may cause unexpected results.

To display widget items, a default template can be used. This template is based on the data source fields that are listed in the [Default Item Template]({basewidgetpath}/Default_Item_Template/) section of the widget's API. Alternatively, you can implement a custom item template. For details, refer to the [Customize Widget Element Appearance](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance) topic.
<!--/fullDescription-->

<!--handmade-->
<!--/handmade-->