<!--id-->UI Events.dxtranslate<!--/id-->
===========================================================================
<!--module-->events/transform<!--/module-->
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Raised when the translate gesture has been performed.
<!--/shortDescription-->

<!--fullDescription-->
#####See Also#####
- [UI Events - Introduction](/Documentation/ApiReference/UI_Widgets/UI_Events/)
<!--/fullDescription-->
<!--typeFunctionParamName1-->event<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->event<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The event that caused the handler execution. It is a [dxEvent](/Documentation/ApiReference/Common/Object_Structures/dxEvent/) or a [jQuery.Event](http://api.jquery.com/category/events/event-object/) when you use jQuery. The following fields are added to existing fields of this argument object.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->translation<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The distance between the initial and current position.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->deltaTranslation<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->object<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The distance between the previous and current position.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->cancel<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->boolean<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Allows you to cancel the gesture processing.
<!--/typeFunctionParamDescription1_field3-->
