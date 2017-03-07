<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a template that should be used to render the tab for this item only.
<!--/shortDescription-->

<!--fullDescription-->
Whether you use a default or a custom template for tab items, you can specify a specific template for a particular tab item. To do so, set the **tabTemplate** field for the data source object of this tab. The following types of the specified value are available.

- Assign a string containing the name of the required [template](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/).
- Assign a jQuery object of the template's container.
- Assign a DOM Node of the template's container.
- Assign a function that returns the jQuery object or a DOM Node of the template's container.

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)

<!--/fullDescription-->
<!--typeFunctionReturnType-->string|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or a template container.
<!--/typeFunctionReturnDescription-->