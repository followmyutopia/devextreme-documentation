<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->A template name or a template container or a function returning one of them, which is used to render items. Or a function creating the item. Has following signature itemTemplate(itemData, itemIndex, itemElement). Returns htmlString or Element or jQuery representing content of the item.<!--/d-->
===========================================================================
<!--default-->'item'<!--/default-->
<!--type-->template<!--/type-->
<!--fp1d-->An object representing the item to be rendered.<!--/fp1d-->
<!--fp2d-->The index of the item to be rendered.<!--/fp2d-->
<!--fp3d-->An HTML element containing the rendered item.<!--/fp3d-->
<!--frd-->A template name or a template container. Or an HTML string, Element, or jQuery object representing the rendered item.<!--/frd-->
===========================================================================

<!--shortDescription-->
The template to be used for rendering items.
<!--/shortDescription-->

<!--fullDescription-->
[note]A binding context of an item template is the data source object that corresponds to the currently rendered item. So, you can bind template elements to the item object fields directly. To access another binding context within an item template, use the [Knockout](http://knockoutjs.com/documentation/binding-context.html)/[Angular](https://docs.angularjs.org/guide/scope) binding variables.

#####See Also#####
- [Customize Item Template](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance)
- [Customize Widget Element Appearance](/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/)


<!--/fullDescription-->
<!--typeFunctionParamName1-->itemData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The item object to be rendered.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->itemIndex<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->number<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The index of the item to be rendered.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionParamName3-->itemElement<!--/typeFunctionParamName3-->
<!--typeFunctionParamType3-->object<!--/typeFunctionParamType3-->
<!--typeFunctionParamDescription3-->
An HTML element of the item to be rendered.
<!--/typeFunctionParamDescription3-->

<!--typeFunctionReturnType-->string|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or a template container.
<!--/typeFunctionReturnDescription-->