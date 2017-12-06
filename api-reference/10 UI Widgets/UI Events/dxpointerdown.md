===========================================================================
<!--module-->events/pointer<!--/module-->
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Raised when the pointer takes on the active buttons state.
<!--/shortDescription-->

<!--fullDescription-->
For a mouse pointer, this event is raised when the mouse state changes from no buttons pressed to at least one button pressed. For touch and pen pointers, the event is raised when physical contact is made with the digitizer.
<!--/fullDescription-->
<!--typeFunctionParamName1-->event<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->event<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The event that caused the handler execution. It is a [dxEvent](/Documentation/ApiReference/Common/Object_Structures/dxEvent/) or a [jQuery.Event](http://api.jquery.com/Types/#Event) when you use jQuery. The following field is added to existing fields of this argument object. For the information on event handler arguments refer to the [UI Events introduction](/Documentation/ApiReference/UI_Widgets/UI_Events/).
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->pointerType<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->string<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Specifies the hardware agnostic pointer input type: a mouse, pen or touchscreen.
<!--/typeFunctionParamDescription1_field1-->
