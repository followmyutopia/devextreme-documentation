===========================================================================
<!--default-->'content'<!--/default-->
<!--type-->template | function(container)<!--/type-->
===========================================================================

<!--shortDescription-->
A template to be used for rendering widget content.
<!--/shortDescription-->

<!--fullDescription-->
If the contentTemplate is defined, the widget does not render selected items. It renders only the content template when the widget is created. You can use the [onItemClick](/Documentation/ApiReference/UI_Widgets/dxSlideOut/Configuration/#onItemClick) option to manually update the content when a menu item is clicked.

If this option is defined, the [itemTemplate](/Documentation/ApiReference/UI_Widgets/dxSlideOut/Configuration/#itemTemplate) option is ignored.
<!--/fullDescription-->
<!--typeFunctionParamName1-->container<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->dxElement<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The widget content's container.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->String|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or container.
<!--/typeFunctionReturnDescription-->