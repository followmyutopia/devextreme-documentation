<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->The event for handling hardware agnostic pointer input from devices like a mouse, pen, or touchscreen. The event triggers when a pointing device is moved into the hit test boundaries of an element or one of its descendants, including as a result of a pointerdown event from a device that does not support hover. This event type is similar to pointerover, but differs in that it does not bubble. (See more: http://www.w3.org/TR/pointerevents/#the-pointerenter-event).<!--/d-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_events_pointer">events/pointer</a><!--/module-->
<!--type-->EVENT<!--/type-->
<!--fp1d-->A jQuery event object.<!--/fp1d-->
<!--fp1_field1d-->Indicates the device type that caused the event (mouse, pen or touch).<!--/fp1_field1d-->
===========================================================================

<!--shortDescription-->
Raised when a pointer is moved to either the hit test area of an element or one of its descendants.
<!--/shortDescription-->

<!--fullDescription-->

<!--/fullDescription-->
<!--typeFunctionParamName1-->event<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->jQuery.event<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The standard jQuery event argument. The following field is added to existing fields of this argument object. For the information on event handler arguments, refer to the <a href="#introduction">UI Events introduction</a>.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->pointerType<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->string<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Indicates the type of the device that caused the event. (Mouse, pen, or touch)
<!--/typeFunctionParamDescription1_field1-->
