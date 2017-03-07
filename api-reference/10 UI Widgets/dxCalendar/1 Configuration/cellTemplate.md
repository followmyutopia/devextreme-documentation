<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->A template name or a template container or a function returning one of them, which is used to render calendar cells. Or a function creating the cell. Has following signature cellTemplate(itemData, itemIndex, itemElement). Returns htmlString or Element or jQuery representing content of the cell.<!--/d-->
===========================================================================
<!--default-->'cell'<!--/default-->
<!--type-->template<!--/type-->
<!--fp1d-->An object representing the cell to be rendered.<!--/fp1d-->
<!--fp2d-->The index of the cell to be rendered.<!--/fp2d-->
<!--fp3d-->An HTML element containing the rendered cell.<!--/fp3d-->
<!--frd-->A template name or a template container. Or an HTML string, Element, or jQuery object representing the rendered cell.<!--/frd-->
===========================================================================

<!--shortDescription-->
The template to be used for rendering calendar cells.
<!--/shortDescription-->

<!--fullDescription-->
The binding context of the template as well as the **itemData** parameter of a function passed to this option is an object containing the following fields.

- **text**  
 A text displayed by the cell.

- **date**  
 A Date object associated with the cell.

- **view**  
 The name of the current view.

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/)

[note]A binding context of an item template is the data source object that corresponds to the currently rendered cell. To access another binding context within an item template, use [Knockout](http://knockoutjs.com/documentation/binding-context.html)/[Angular](https://docs.angularjs.org/guide/scope) binding variables.


<!--/fullDescription-->
<!--typeFunctionParamName1-->itemData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
An object holding data associated with the cell to be rendered.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->itemIndex<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->number<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The index of the cell to be rendered.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionParamName3-->itemElement<!--/typeFunctionParamName3-->
<!--typeFunctionParamType3-->jQuery<!--/typeFunctionParamType3-->
<!--typeFunctionParamDescription3-->
An HTML element of the cell to be rendered.
<!--/typeFunctionParamDescription3-->

<!--typeFunctionReturnType-->string|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or a template container.
<!--/typeFunctionReturnDescription-->