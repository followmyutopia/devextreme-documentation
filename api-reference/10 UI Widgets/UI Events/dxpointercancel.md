<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->The event for handling hardware agnostic pointer input from devices like a mouse, pen, or touchscreen. The event triggers when a pointer is unlikely to continue to produce events (for example, because of a hardware event) or after having fired the pointerdown event, the pointer is subsequently used to manipulate the page viewport (e.g. panning or zooming). (See more: http://www.w3.org/TR/pointerevents/#the-pointercancel-event).<!--/d-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_events_pointer">events/pointer</a><!--/module-->
<!--type-->EVENT<!--/type-->
<!--fp1d-->A jQuery event object.<!--/fp1d-->
<!--fp1_field1d-->Indicates the device type that caused the event (mouse, pen or touch).<!--/fp1_field1d-->
===========================================================================

<!--shortDescription-->
Raised when the pointer is no longer likely to produce events.
<!--/shortDescription-->

<!--fullDescription-->
The event can be raised because of a hardware event; such as, if a device changes the screen orientation while the pointer is active or the number of simultaneous pointers exceeds the supported number, etc.
<!--/fullDescription-->
<!--typeFunctionParamName1-->event<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->jQuery.event<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The standard jQuery event argument. The following field is added to existing fields of this argument object. For the information on event handler arguments, refer to the <a href="#introduction">UI Events introduction</a>.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->pointerType<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->string<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Specifies the hardware agnostic pointer input type: a mouse, pen or touchscreen.
<!--/typeFunctionParamDescription1_field1-->
