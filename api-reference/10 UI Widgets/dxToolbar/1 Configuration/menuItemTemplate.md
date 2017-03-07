<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'menuItem'<!--/default-->
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
The template used to render menu items.
<!--/shortDescription-->

<!--fullDescription-->
As in all container widgets in DevExtreme, toolbar menu items are displayed by a default HTML template. This template is based on certain fields of the data source (these fields are listed in the description of the widgets that are used to present a toolbar menu). You can define a custom item template that will use specific fields of the data source. 

A binding context of a menu item template is the data source object that corresponds to the currently rendered item.

So, in **Knockout approach**, you can bind template elements to the item object fields directly. To access another binding context within a template, use the [Knockout](http://knockoutjs.com/documentation/binding-context.html) binding variables.

In **AngularJS approach**, if you need to access item object fields within a template, use a variable whose name is assigned to the `dx-item-alias` directive. Add the directive to the widget element to specify an alias to the root object of an item. Without this directive, item object fields are beyond reach. To access another binding context within a menu item template, use [AngularJS](https://docs.angularjs.org/guide/scope) binding variables.

#####See Also#####
- [Toolbar - Customize Item Appearance](/Documentation/Guide/Widgets/Toolbar/Customize_Item_Appearance/)
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)

<!--/fullDescription-->
<!--typeFunctionParamName1-->itemData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The menu item object to be rendered.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->itemIndex<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->number<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The index of the menu item to be rendered.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionParamName3-->itemElement<!--/typeFunctionParamName3-->
<!--typeFunctionParamType3-->jQuery<!--/typeFunctionParamType3-->
<!--typeFunctionParamDescription3-->
An HTML element of the menu item to be rendered.
<!--/typeFunctionParamDescription3-->

<!--typeFunctionReturnType-->string|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or a template container.
<!--/typeFunctionReturnDescription-->