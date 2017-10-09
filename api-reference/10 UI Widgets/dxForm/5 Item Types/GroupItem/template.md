<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
A template to be used for rendering a group item.
<!--/shortDescription-->

<!--fullDescription-->
Use the **template** option of a group item to display custom content under a group caption, for instance an image. To specify a custom template for items contained in a group, define the **template** option of each of these items.

![Form With Image](/Content/images/doc/17_2/UiWidgets/FormWithImage.png)

[note]To define a custom template used to render group items, assign the required template name or template container to each simple item's template option.

A binding context of an item template is an object containing the following fields. So, you can bind template elements to these fields directly. To access another binding context within an item template, use [Knockout](http://knockoutjs.com/documentation/binding-context.html)/[AngularJS](https://docs.angularjs.org/guide/scope) binding variables.

- component  
 An instance of the current **Form** widget.

- dataField  
 A [formData](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#formData) object field bound to the form item being rendered.

- editorOptions  
 Configuration object of the current form item editor.

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)

<!--/fullDescription-->
<!--typeFunctionParamName1-->data<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
An object providing access to the field data, form instance and the configuration object of the editor.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->itemElement<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->Element<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
An HTML element of the group item to be rendered.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->string|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or a template container.
<!--/typeFunctionReturnDescription-->