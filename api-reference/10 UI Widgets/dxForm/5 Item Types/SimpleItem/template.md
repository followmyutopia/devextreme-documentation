===========================================================================
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
A template to be used for rendering the form item.
<!--/shortDescription-->

<!--fullDescription-->
A binding context of an item template is an object containing the following fields. So, you can bind template elements to these fields directly. To access another binding context within an item template, use [Knockout](http://knockoutjs.com/documentation/binding-context.html)/[AngularJS](https://docs.angularjs.org/guide/scope) binding variables.

- **component**  
 An instance of the current **Form** widget.

- **dataField**  
 A [formData](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#formData) object field bound to the form item being rendered.

- **editorOptions**  
 The configuration object of the current form item editor.

#####See Also#####
- [Customize a Simple Item](/Documentation/Guide/Widgets/Form/Configure_Simple_Items/#Customize_a_Simple_Item)
<!--/fullDescription-->
<!--typeFunctionParamName1-->data<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The [dataField](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#dataField), **Form** instance and the editor configuration.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->itemElement<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->dxElement<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The current item's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->String|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or container.
<!--/typeFunctionReturnDescription-->