===========================================================================
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Fires when the **Cancel** button is clicked.
<!--/shortDescription-->

<!--fullDescription-->
In the handling function, use the **cancel** field of the object passed as a handler parameter. Set this field to **true** to prohibit the hiding of the action sheet menu when an end user clicks the Cancel button on it.

Instead, you can use the [onCancelClick](/Documentation/ApiReference/UI_Widgets/dxActionSheet/Configuration/#onCancelClick) option to handle the event.

#####See Also#####
#include common-link-handleevents
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
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
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->cancel<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Boolean<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
Allows you to cancel hiding of the action sheet after the Cancel button is clicked.
<!--/typeFunctionParamDescription1_field4-->
