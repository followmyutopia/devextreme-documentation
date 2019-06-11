<!--id-->UI Events.dxpointercancel<!--/id-->
===========================================================================
<!--module-->events/pointer<!--/module-->
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Raised when the browser decides that the pointer is unlikely to produce any more events.
<!--/shortDescription-->

<!--fullDescription-->
The event can be raised because of a hardware event; such as, if a device changes the screen orientation while the pointer is active or the number of simultaneous pointers exceeds the supported number, etc.

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
