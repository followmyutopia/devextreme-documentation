<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->A template name or a template container or a function returning one of them, which is used to render menu items. Or a function creating the menu item. Has following signature itemTemplate(itemData, itemIndex, itemElement). Returns htmlString or Element or jQuery representing content of the menu item.<!--/d-->
===========================================================================
<!--default-->'menuItem'<!--/default-->
<!--type-->template<!--/type-->
<!--fp1d-->An object representing the item to be rendered.<!--/fp1d-->
<!--fp2d-->The index of the item to be rendered.<!--/fp2d-->
<!--fp3d-->An HTML element containing the rendered item.<!--/fp3d-->
<!--frd-->A template name or a template container. Or an HTML string, Element, or jQuery object representing the rendered item.<!--/frd-->
===========================================================================

<!--shortDescription-->
The template used to render menu items.
<!--/shortDescription-->

<!--fullDescription-->
As in all container widgets in DevExtreme, slide-out menu items are displayed by a default HTML template. This template is based on certain fields of the [data source](/Documentation/ApiReference/UI_Widgets/dxSlideOut/Configuration/#dataSource). You can define a custom menu item template that will use specific fields of the data source.

    <!--HTML--><div id="slideOut" data-bind="dxSlideOut: { dataSource: items, selectedIndex: selectedIndex }">
        <div data-options="dxTemplate: { name: 'menuItem' } ">
            This is <div data-bind="text: text"></div>
        </div>
    </div>

[note]A binding context of a menu item template is the data source object that corresponds to the currently rendered item. So, you can bind template elements to the item object's fields directly (see the code above). To access another binding context within a menu item template, use the [Knockout](http://knockoutjs.com/documentation/binding-context.html)/[Angular](https://docs.angularjs.org/guide/scope) binding variables.

#####See Also#####
- [Customize Item Template](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance)
- [Customize Widget Element Appearance](/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/)

If you have several menu item templates specified within the widget, assign the name of a specific template to the widget's **menuItemTemplate** option.

You can define the markup for a menu item template as a separate element, as demonstrated below.

    <!--HTML--><script type="text/html" id="person-template">
        <h3 data-bind="text: name"></h3>
        <p>Address: <span data-bind="text: address"></span></p>
    </script>

To set the common template as a menu item template, pass the template container element to the **menuItemTemplate** option. The option accepts a jQuery object, a DOM node, or a function that returns a jQuery object or a DOM node.


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