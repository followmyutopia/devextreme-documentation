===========================================================================
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
A template to be used for rendering a group item.
<!--/shortDescription-->

<!--fullDescription-->
Use the **template** option of a group item to display custom content under a group caption, for instance an image. To specify a custom template for items contained in a group, define the **template** option of each of these items.

![Form With Image](/Content/images/doc/19_1/UiWidgets/FormWithImage.png)

[note]To define a custom template used to render group items, assign the required template name or template container to each simple item's template option.

#####See Also#####
- [Custom Content within a Group](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Groups/#Custom_Content_within_a_Group)
<!--/fullDescription-->
<!--typeFunctionParamName1-->data<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the **Form**.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->dxForm<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The **Form** instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->formData<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->Object<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The [formData](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#formData) object.
<!--/typeFunctionParamDescription1_field2-->

<!--typeFunctionParamName2-->itemElement<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->dxElement<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The current group item's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->String|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or container.
<!--/typeFunctionReturnDescription-->