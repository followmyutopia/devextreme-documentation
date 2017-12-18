===========================================================================
<!--default-->'menuItem'<!--/default-->
<!--type-->template | function(itemData, itemIndex, itemElement)<!--/type-->
===========================================================================

<!--shortDescription-->
The template used to render menu items.
<!--/shortDescription-->

<!--fullDescription-->
As in all container widgets in DevExtreme, slide-out menu items are displayed by a default HTML template. This template is based on certain fields of the [data source](/Documentation/ApiReference/UI_Widgets/dxSlideOut/Configuration/#dataSource). You can define a custom menu item template that will use specific fields of the data source.

    <!--HTML--><div id="slideOut" data-bind="dxSlideOut:{dataSource: items, selectedIndex: selectedIndex}">
        <div data-options="dxTemplate : { name: 'menuItem' } ">
            This is <div data-bind="text: text"></div>
        </div>
    </div>

[note]A binding context of a menu item template is the data source object that corresponds to the currently rendered item. So, you can bind template elements to the item object's fields directly (see the code above). To access another binding context within a menu item template, use the [Knockout](http://knockoutjs.com/documentation/binding-context.html)/[AngularJS](https://docs.angularjs.org/guide/scope) binding variables.

#####See Also#####
- [Customize Menu Items](/Documentation/Guide/Widgets/SlideOut/Customize_Menu_Items/)
- [Customize the View](/Documentation/Guide/Widgets/SlideOut/Customize_the_View/)
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