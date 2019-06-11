<!--id-->UI Events.dxpointerdown<!--/id-->
===========================================================================
<!--module-->events/pointer<!--/module-->
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Raised when the pointer takes on the active buttons state.
<!--/shortDescription-->

<!--fullDescription-->
For a mouse pointer, this event is raised when the mouse state changes from no buttons pressed to at least one button pressed. For touch and pen pointers, the event is raised when physical contact is made with the digitizer.

#####See Also#####
- [UI Events - Introduction](/Documentation/ApiReference/UI_Widgets/UI_Events/)
<!--/fullDescription-->
<!--typeFunctionParamName1-->event<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->event<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
#include common-ref-eventparam The following field is added to existing fields of this argument object.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->pointerType<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->string<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The type of the device that raised the event: mouse, pen or touch.
<!--/typeFunctionParamDescription1_field1-->
