<!--EventForAction-->..\4 Events\customItemCreating.md<!--/EventForAction-->
===========================================================================
<!--default-->function(e) { e.customItem = e.text; }<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the [customItemCreating]({basewidgetpath}/Events/#customItemCreating) event. Executed when a user adds a custom item. Requires [acceptCustomValue]({basewidgetpath}/Configuration/#acceptCustomValue) to be set to **true**. 
<!--/shortDescription-->

<!--fullDescription-->
#####See Also#####
- [SelectBox - Create a User-Defined Item](/Documentation/Guide/Widgets/SelectBox/Create_a_User-Defined_Item/)
- [TagBox - Create a User-Defined Item](/Documentation/Guide/Widgets/TagBox/Create_a_User-Defined_Item/)
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->DOMComponent<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->text<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->string<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The input field's text.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->customItem<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->string|object|Promise<any><!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The field where to place a custom item.
<!--/typeFunctionParamDescription1_field5-->

<!--typeFunctionReturnType-->string|object|Promise<any><!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A custom item or a Promise that is resolved after the item is created. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/typeFunctionReturnDescription-->