<!--id-->dxButtonGroup.selectionChanged<!--/id-->
===========================================================================
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Raised when a button is selected or selection is canceled.
<!--/shortDescription-->

<!--fullDescription-->
Main article: [onSelectionChanged](/Documentation/ApiReference/UI_Widgets/dxButtonGroup/Configuration/#onSelectionChanged)

#####See Also#####
#include common-link-handleevents
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->{WidgetName}<!--/typeFunctionParamType1_field1-->
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
The data objects that correspond to the selected buttons.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->removedItems<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->Array<any><!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The data objects that correspond to the buttons whose selection has been canceled. <br/>
The objects are taken from the [items](/Documentation/ApiReference/UI_Widgets/dxButtonGroup/Configuration/#items) array.
<!--/typeFunctionParamDescription1_field5-->
