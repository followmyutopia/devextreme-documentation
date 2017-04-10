<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'group'<!--/default-->
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom template for group captions.
<!--/shortDescription-->

<!--fullDescription-->
If you use the [Knockout](http://knockoutjs.com/) or [AngularJS](https://angularjs.org/) library, you can implement this template with the [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/) markup component. This template is in the binding context of the data source object that corresponds to the currently rendered group. Therefore, in Knockout apps, you can bind template elements directly to the fields of this object. In AngularJS apps, you can access this object by an alias that you specify in the `dx-item-alias` directive. If you need to access another binding context from the template, use [Knockout](http://knockoutjs.com/documentation/binding-context.html) or [AngularJS](https://docs.angularjs.org/guide/scope) binding variables.

#####See Also#####
- [SelectBox - Grouped Items Demo](http://js.devexpress.com/Demos/WidgetsGallery/Demo/Select_Box/GroupedItems/jQuery/Light/)
- [TagBox - Grouped Items Demo](http://js.devexpress.com/Demos/WidgetsGallery/Demo/Tag_Box/GroupedItems/jQuery/Light/)
<!--/fullDescription-->
<!--typeFunctionParamName1-->itemData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The data of the group.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->itemIndex<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->number<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The index of the group.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionParamName3-->itemElement<!--/typeFunctionParamName3-->
<!--typeFunctionParamType3-->jQuery<!--/typeFunctionParamType3-->
<!--typeFunctionParamDescription3-->
The element of the group.
<!--/typeFunctionParamDescription3-->

<!--typeFunctionReturnType-->string|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template's name or container.
<!--/typeFunctionReturnDescription-->