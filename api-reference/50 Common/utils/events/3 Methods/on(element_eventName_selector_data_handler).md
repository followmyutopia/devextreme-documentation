===================================================================
<!--module-->events<!--/module-->
<!--export-->on<!--/export-->
===================================================================

<!--shortDescription-->
Attaches an event handler to the specified element.
<!--/shortDescription-->

<!--paramName1-->element<!--/paramName1-->
<!--paramType1-->Node|Array<Node><!--/paramType1-->
<!--paramDescription1-->
An element to which to attach the handler.
<!--/paramDescription1-->

<!--paramName2-->eventName<!--/paramName2-->
<!--paramType2-->String<!--/paramType2-->
<!--paramDescription2-->
The event name.
<!--/paramDescription2-->

<!--paramName3-->selector<!--/paramName3-->
<!--paramType3-->String<!--/paramType3-->
<!--paramDescription3-->
A selector to filter the element's descendants. If the selector is null or omitted, the event is always triggered on reaching the element.
<!--/paramDescription3-->

<!--paramName4-->data<!--/paramName4-->
<!--paramType4-->Object<!--/paramType4-->
<!--paramDescription4-->
Data to be passed to the handler in [event.data](/Documentation/ApiReference/Common/Object_Structures/dxEvent/Fields/#data) when the event is triggered.
<!--/paramDescription4-->

<!--paramName5-->handler<!--/paramName5-->
<!--paramType5-->function()<!--/paramType5-->
<!--paramDescription5-->
A function to execute on triggering the event.
<!--/paramDescription5-->

<!--fullDescription-->
The following parameters are passed to the **handler** function:

- **element**  
 The HTML element on which the event was triggered.

- **extraParameters**  
 Additional parameters. See [UI Events](/Documentation/ApiReference/UI_Widgets/UI_Events/) for details.

The method should return a Boolean value: **true** to continue, or **false** to stop the event propagation.
 
The following example demonstrates how to attach a handler to the [dxhold](/Documentation/ApiReference/UI_Widgets/UI_Events/#dxhold) event for all elements with `my-element` class:
    
    var dxholdHandler = function(element, extraParameters) {
        // Process element hold
        return true;
    }
    DevExpress.events.on(document, "dxhold", ".my-element", { timeout: 1000 }, dxholdHandler);
<!--/fullDescription-->