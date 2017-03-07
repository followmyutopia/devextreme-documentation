<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->A template name or a template container or a function returning one of them, which is used to render the item.<!--/d-->
===========================================================================
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies an item template that should be used to render this item only.
<!--/shortDescription-->

<!--fullDescription-->
Whether you use a default or a custom template for widget items, you can specify a specific template for a particular item. To do so, set the **template** field for the data source object of this item. The following types of the specified value are available.

- Assign a jQuery object of the template's container.
- Assign a DOM Node of the template's container.
- Assign a function that returns the jQuery object or a DOM Node of the template's container.

[note]The [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/) component can not be used as a **toolbarItems** template.

#####See Also#####
- [Customize Item Template](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance)
- [Customize Widget Element Appearance](/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/)



<!--/fullDescription-->