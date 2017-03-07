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
You can use the [dataSource]({basewidgetpath}/Configuration/#dataSource) option instead. Unlike the **items** option, the **dataSource** option can take on the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) configuration object as well as a simple array.

[note]If you need to modify the data source specified using the **items** option at runtime, do it only with the help of the **items** option. Updating data items using the [dataSource]({basewidgetpath}/Configuration/#dataSource) option may cause unexpected results.

To display widget items, a default template can be used. This template is based on the data source fields that are listed in the [Default Item Template]({basewidgetpath}/Default_Item_Template/) section of the widget's API. Alternatively, you can implement a custom item template. 

#####See Also#####
- [Customize Item Template](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance)
- [Customize Widget Element Appearance](/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/)


<!--/fullDescription-->