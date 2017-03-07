<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->A template name or a template container or a function returning one of them, which is used to render static content. Or a function creating the content. Has following signature contentTemplate(container). Returns htmlString or Element or jQuery representing content of the item. If content template specified items will not be rendered.<!--/d-->
===========================================================================
<!--default-->'content'<!--/default-->
<!--type-->template<!--/type-->
<!--fp1d-->An HTML element containing the rendered template.<!--/fp1d-->
<!--frd-->A template name or a template container. Or an HTML string, Element, or jQuery object representing the rendered item.<!--/frd-->
===========================================================================

<!--shortDescription-->
A template to be used for rendering widget content.
<!--/shortDescription-->

<!--fullDescription-->
If the contentTemplate is defined, the widget does not render selected items. It renders only the content template when the widget is created. You can use the [onItemClick](/Documentation/ApiReference/UI_Widgets/dxSlideOut/Configuration/#onItemClick) option to manually update the content when a menu item is clicked.

If this option is defined, the [itemTemplate](/Documentation/ApiReference/UI_Widgets/dxSlideOut/Configuration/#itemTemplate) option is ignored.
<!--/fullDescription-->
<!--typeFunctionParamName1-->container<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->jQuery<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The jQuery object of the widget content element.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->string|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or a template container.
<!--/typeFunctionReturnDescription-->