===========================================================================
<!--module-->events/drag<!--/module-->
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Raised when the drag gesture has been completed.
<!--/shortDescription-->

<!--fullDescription-->

<!--/fullDescription-->
<!--typeFunctionParamName1-->event<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->event<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The event that caused the handler execution. It is a [dxEvent](/Documentation/ApiReference/Common/Object_Structures/dxEvent/) or a [jQuery.Event](http://api.jquery.com/Types/#Event) when you use jQuery. The following fields are added to existing fields of this argument object. For the information on event handler arguments, refer to the [UI Events introduction](/Documentation/ApiReference/UI_Widgets/UI_Events/).
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->offset<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->number<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Indicates which distance has been passed during the dragging gesture, measured as a ratio to the target element's width.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->cancel<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->boolean<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
Indicates whether to prevent the drag gesture. Set this field to true to cancel the gesture.
<!--/typeFunctionParamDescription1_field2-->
