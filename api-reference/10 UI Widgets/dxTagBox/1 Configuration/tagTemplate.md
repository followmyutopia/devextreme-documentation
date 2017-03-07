<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'tag'<!--/default-->
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
The template to be used for rendering tags.
<!--/shortDescription-->

<!--fullDescription-->
A binding context of a tag template is the data source object that corresponds to the currently rendered item.

So, in **Knockout approach**, you can bind template elements to the item object fields directly. To access another binding context within a tag template, use [Knockout](http://knockoutjs.com/documentation/binding-context.html) binding variables.

In **AngularJS approach**, if you need to access item object fields within a template, use a variable whose name is assigned to the `dx-item-alias` directive. Add the directive to the widget element to specify an alias to the root object of an item. Without this directive, item object fields are beyond reach. To access another binding context within a tag template, use [AngularJS](https://docs.angularjs.org/guide/scope) binding variables.

#####See Also#####
- [template](/Documentation/ApiReference/Common/Object_Structures/template/)
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)


<!--/fullDescription-->
<!--typeFunctionParamName1-->itemData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The item object associated with a tag to be rendered.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->itemElement<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->jQuery<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
An HTML element of the tag to be rendered.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->string|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or a template container.
<!--/typeFunctionReturnDescription-->