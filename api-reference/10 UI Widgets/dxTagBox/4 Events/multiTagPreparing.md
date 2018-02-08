===========================================================================
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Raised before the multi-tag is rendered.
<!--/shortDescription-->

<!--fullDescription-->
Main article: [onMultiTagPreparing](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#onMultiTagPreparing)

#####See Also#####
#include common-link-handleevents
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
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only when using Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->multiTagElement<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->dxElement<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The multi-tag's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->selectedItems<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->Array<string,number,Object><!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The currently selected items.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->text<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->string<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
Allows you to change the multi-tag's text.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->cancel<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->boolean<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
Allows you to cancel replacing ordinary tags with the multi-tag.
<!--/typeFunctionParamDescription1_field7-->
