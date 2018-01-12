===========================================================================
<!--default-->'content'<!--/default-->
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom template for the widget content. Rendered only once - when the widget is created.
<!--/shortDescription-->

<!--fullDescription-->
Use to manage the content regardless of which view is selected. You can use the [onSelectionChanged](/Documentation/ApiReference/UI_Widgets/dxPivot/Configuration/#onSelectionChanged) option to manually update the content when a title is clicked.

If this option is defined, the [itemTemplate](/Documentation/ApiReference/UI_Widgets/dxPivot/Configuration/#itemTemplate) option is ignored.

#####See Also#####
- [Customize Item Appearance](/Documentation/Guide/Widgets/Pivot/Customize_Item_Appearance/)
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
<!--/fullDescription-->
<!--typeFunctionParamName1-->container<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->dxElement<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The widget's container.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->String|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or container.
<!--/typeFunctionReturnDescription-->