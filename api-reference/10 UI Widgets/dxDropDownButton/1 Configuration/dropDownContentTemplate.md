===========================================================================
<!--default-->'content'<!--/default-->
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies custom content for the drop-down field.
<!--/shortDescription-->

<!--fullDescription-->
The drop-down field contains the [List](/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/jQuery/Light/) widget. Implement this template to replace the widget with custom content. The following restrictions apply when the template is specified:

- [itemTemplate](/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#itemTemplate) is ignored;
- [onItemClick](/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#onItemClick) and [onSelectionChanged](/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#onSelectionChanged) are never executed;
- [selectedItemKey](/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#selectedItemKey) should be updated manually.

#####See Also#####
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
<!--/fullDescription-->
<!--typeFunctionParamName1-->data<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Array<String, Number, Object>|DataSource<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The array passed to the [items](/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#items) option or a **DataSource** instance created using the [dataSource](/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#dataSource) configuration.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->contentElement<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->dxElement<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The drop-down field's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->String|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or container.
<!--/typeFunctionReturnDescription-->
