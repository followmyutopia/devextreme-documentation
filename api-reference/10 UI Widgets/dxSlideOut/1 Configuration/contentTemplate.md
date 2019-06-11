<!--id-->dxSlideOut.Options.contentTemplate<!--/id-->
===========================================================================
<!--default-->'content'<!--/default-->
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom template for the widget content. Rendered only once - when the widget is created.
<!--/shortDescription-->

<!--fullDescription-->
Use to manage the content regardless of which view is selected. You can use the [onSelectionChanged](/Documentation/ApiReference/UI_Widgets/dxSlideOut/Configuration/#onSelectionChanged) option to manually update the content when a title is clicked.

If this option is defined, the [itemTemplate](/Documentation/ApiReference/UI_Widgets/dxSlideOut/Configuration/#itemTemplate) option is ignored.

#####See Also#####
- [Customize the View](/Documentation/Guide/Widgets/SlideOut/Customize_the_View/)
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
<!--/fullDescription-->
<!--typeFunctionParamName1-->container<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->dxElement<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
#include common-ref-elementparam with { element: "widget content" }
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->String|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or container.
<!--/typeFunctionReturnDescription-->