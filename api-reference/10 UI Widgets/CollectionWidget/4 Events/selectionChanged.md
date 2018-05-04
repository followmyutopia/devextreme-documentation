===========================================================================
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Fires after a collection item is selected or unselected.
<!--/shortDescription-->

<!--fullDescription-->
Main article: [onSelectionChanged]({basewidgetpath}/Configuration/#onSelectionChanged)

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
<!--typeFunctionParamName1_field4-->addedItems<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Array<any><!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The data of the items that have been selected.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->removedItems<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->Array<any><!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The data of the items whose selection has been canceled.
<!--/typeFunctionParamDescription1_field5-->
