<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--module-->events/swipe<!--/module-->
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Raised when the swipe gesture has been performed.
<!--/shortDescription-->

<!--fullDescription-->
The event supports the **direction** option that specifies whether the event is raised for horizontal or vertical scrolling. The option can take on the "vertical" and "horizontal" values. The default option value is "horizontal".
<!--/fullDescription-->
<!--typeFunctionParamName1-->event<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->event<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The event that caused the handler execution. It is a [dxEvent](/Documentation/ApiReference/Common/Object_Structures/dxEvent/) or a [jQuery.Event](http://api.jquery.com/Types/#Event) when you use jQuery. The following fields are added to existing fields of this argument object. For the information on event handler arguments, refer to the [UI Events introduction](/Documentation/ApiReference/UI_Widgets/UI_Events/).
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->offset<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->number<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Indicates which distance has been passed during the swipe gesture, measured as a ratio to the target element's width.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->cancel<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->boolean<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
Indicates whether or not to prevent the swipe gesture. Set this field to true to cancel the gesture.
<!--/typeFunctionParamDescription1_field2-->
