===========================================================================
<!--type-->template | function()<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a template that should be used to render a menu item.
<!--/shortDescription-->

<!--fullDescription-->
Whether you use a default or a custom template for menu items, you can specify a specific template for a particular menu item. To do so, set the **menuItemTemplate** field for the data source object of this menu item. The following types of the specified value are available.

- Assign a string containing the name of the required [template](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/).
- Assign a jQuery object of the template's container.
- Assign a DOM Node of the template's container.
- Assign a function that returns the jQuery object or a DOM Node of the template's container.

#####See Also#####
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
<!--/fullDescription-->
<!--typeFunctionReturnType-->String|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or a template container.
<!--/typeFunctionReturnDescription-->