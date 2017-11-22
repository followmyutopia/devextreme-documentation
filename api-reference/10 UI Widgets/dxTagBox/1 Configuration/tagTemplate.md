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
Specifies a custom template for a tag.
<!--/shortDescription-->

<!--fullDescription-->
If you use the Angular, AngularJS or Knockout library, you can implement this template with the [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/) markup component. This template's binding context depends on the library you use.

In Angular apps, an item's object and index extend the standard binding context (a component instance). Access the former using the input variable that is declared after the `let` and before `of` keywords, and the latter by the variable that is set to the `index` property.

In AngularJS apps, an item's object and index extend the standard binding context (the scope). Access the former using an alias that you specify in the `dx-item-alias` directive, and the latter the `$index` variable. Use [AngularJS](https://docs.angularjs.org/guide/scope) binding variables if you need to access another binding context from the template.

In Knockout apps, you can bind template elements directly to an item object's fields. Use the `$index` variable to get the item's index. Use [Knockout](http://knockoutjs.com/documentation/binding-context.html) binding variables if you need to access another binding context from the template. 


#####See Also#####
- [Customize Item Appearance](/Documentation/Guide/Widgets/TagBox/Customize_Item_Appearance/)
<!--/fullDescription-->
<!--typeFunctionParamName1-->itemData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The item object associated with a tag to be rendered.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->itemElement<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->dxElement<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The container of the tag to be rendered.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->string|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or container.
<!--/typeFunctionReturnDescription-->