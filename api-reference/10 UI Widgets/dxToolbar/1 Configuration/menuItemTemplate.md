===========================================================================
<!--default-->'menuItem'<!--/default-->
<!--type-->template | function(itemData, itemIndex, itemElement)<!--/type-->
===========================================================================

<!--shortDescription-->
The template used to render menu items.
Specifies a custom template for a menu item.
<!--/shortDescription-->

<!--fullDescription-->
If you use the Angular, AngularJS or Knockout library, you can implement this template with the [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/) markup component. This template's binding context depends on the library you use.

In Angular apps, an item's object and index extend the standard binding context (a component instance). Access the former using the input variable that is declared after the `let` and before `of` keywords, and the latter by the variable that is set to the `index` property.

In AngularJS apps, an item's object and index extend the standard binding context (the scope). Access the former using an alias that you specify in the `dx-item-alias` directive, and the latter the `$index` variable. Use [AngularJS](https://docs.angularjs.org/guide/scope) binding variables if you need to access another binding context from the template.

In Knockout apps, you can bind template elements directly to an item object's fields. Use the `$index` variable to get the item's index. Use [Knockout](http://knockoutjs.com/documentation/binding-context.html) binding variables if you need to access another binding context from the template. 


#####See Also#####
- [Customize Item Appearance](/Documentation/Guide/Widgets/Toolbar/Customize_Item_Appearance/)
<!--/fullDescription-->
<!--typeFunctionParamName1-->itemData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The current menu item's data.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->itemIndex<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->Number<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The current menu item's index.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionParamName3-->itemElement<!--/typeFunctionParamName3-->
<!--typeFunctionParamType3-->dxElement<!--/typeFunctionParamType3-->
<!--typeFunctionParamDescription3-->
The current menu item's container.
<!--/typeFunctionParamDescription3-->

<!--typeFunctionReturnType-->String|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or container.
<!--/typeFunctionReturnDescription-->