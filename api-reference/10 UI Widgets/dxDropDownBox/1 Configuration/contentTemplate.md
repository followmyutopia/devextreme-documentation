===========================================================================
<!--default-->null<!--/default-->
<!--type-->template | function(templateData, contentElement)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom template for the drop-down content.
<!--/shortDescription-->

<!--fullDescription-->
Below is the list of fields passed in the **templateData** object.

- **value**: <font size="-1">Any</font>    
    The currently selected value.  
- **component**: <font size="-1">jQuery</font>  
    The widget's instance.

If you use the [Knockout](http://knockoutjs.com/) or [AngularJS](https://angularjs.org/) library, you can implement this template with the [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/) markup component. The template is in the binding context of the view model. Therefore, you can bind template elements directly to the properties of the view model. To access another binding context from the template, use the [Knockout](http://knockoutjs.com/documentation/binding-context.html) or [AngularJS](https://docs.angularjs.org/guide/scope) binding variables.

<!--/fullDescription-->
<!--typeFunctionParamName1-->templateData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Data associated with the widget.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->contentElement<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->dxElement<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The content's container.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->String|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template's name or container.
<!--/typeFunctionReturnDescription-->