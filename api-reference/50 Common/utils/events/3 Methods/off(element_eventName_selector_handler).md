===================================================================
<!--module-->events<!--/module-->
<!--export-->off<!--/export-->
===================================================================

<!--shortDescription-->
Detaches an event handler from the specified elements.
<!--/shortDescription-->

<!--paramName1-->element<!--/paramName1-->
<!--paramType1-->Node|Array<Node><!--/paramType1-->
<!--paramDescription1-->
An HTML element or an array of elements from which to detach the handler.
<!--/paramDescription1-->

<!--paramName2-->eventName<!--/paramName2-->
<!--paramType2-->String<!--/paramType2-->
<!--paramDescription2-->
The event name.
<!--/paramDescription2-->

<!--paramName3-->selector<!--/paramName3-->
<!--paramType3-->String<!--/paramType3-->
<!--paramDescription3-->
A selector that must match the one originally passed to the [on()](/Documentation/ApiReference/Common/utils/events/Methods/#onelement_eventName_selector_data_handler) method when attaching the handler.
<!--/paramDescription3-->

<!--paramName4-->handler<!--/paramName4-->
<!--paramType4-->function()<!--/paramType4-->
<!--paramDescription4-->
A handler to detach.
<!--/paramDescription4-->

<!--fullDescription-->
The following example demonstrates how to detach a handler from the [dxhold](/Documentation/ApiReference/UI_Widgets/UI_Events/#dxhold) event for all elements with `my-element` class:

    var dxholdHandler = function() {
        // Process element hold
    }
    ...
    DevExpress.events.off(document, "dxhold", ".my-element", dxholdHandler);
<!--/fullDescription-->