<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->A template name or a template container or a function returning one of them, which is used to render menu list groups. Or a function creating the menu group header. Has following signature groupTemplate(groupData, groupIndex, groupElement). Returns htmlString or Element or jQuery representing content of the group header.<!--/d-->
===========================================================================
<!--default-->'menuGroup'<!--/default-->
<!--type-->template<!--/type-->
<!--fp1d-->An object representing the item to be rendered.<!--/fp1d-->
<!--fp2d-->The index of the item to be rendered.<!--/fp2d-->
<!--fp3d-->An HTML element containing the rendered item.<!--/fp3d-->
<!--frd-->A template name or a template container. Or an HTML string, Element, or jQuery object representing the rendered item.<!--/frd-->
===========================================================================

<!--shortDescription-->
The [name](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/Configuration/#name) of the [template](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/) used to display a group header.
<!--/shortDescription-->

<!--fullDescription-->
[note]A binding context of a group template is the data source object that corresponds to the currently rendered group. So, you can bind template elements to the group object's fields directly (see the code above). To access another binding context within a group template, use the [Knockout](http://knockoutjs.com/documentation/binding-context.html)/[Angular](https://docs.angularjs.org/guide/scope) binding variables.


<!--/fullDescription-->
<!--typeFunctionParamName1-->groupData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The group object to be rendered.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->groupIndex<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->number<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The index of the group to be rendered.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionParamName3-->groupElement<!--/typeFunctionParamName3-->
<!--typeFunctionParamType3-->object<!--/typeFunctionParamType3-->
<!--typeFunctionParamDescription3-->
An HTML element of the group to be rendered.
<!--/typeFunctionParamDescription3-->

<!--typeFunctionReturnType-->string|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or a template container.
<!--/typeFunctionReturnDescription-->