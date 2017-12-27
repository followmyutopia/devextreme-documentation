===========================================================================
<!--module-->events/click<!--/module-->
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Raised when the element is clicked.
<!--/shortDescription-->

<!--fullDescription-->
The native **click** event waits 300 ms after the element was clicked. This time interval is required to wait for the second click. If a user clicks the element one more time during this time span, the **dblclick** event is raised instead of the **click**. The **dxclick** event is raised immediately after the element is clicked.

#####See Also#####
- [UI Events - Introduction](/Documentation/ApiReference/UI_Widgets/UI_Events/)
<!--/fullDescription-->
<!--typeFunctionParamName1-->event<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->event<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The event that caused the handler execution. It is a [dxEvent](/Documentation/ApiReference/Common/Object_Structures/dxEvent/) or a [jQuery.Event](http://api.jquery.com/category/events/event-object/) when you use jQuery.
<!--/typeFunctionParamDescription1-->
