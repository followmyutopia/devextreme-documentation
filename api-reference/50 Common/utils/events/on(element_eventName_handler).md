<!--id-->events.on(element, eventName, handler)<!--/id-->
===================================================================
<!--module-->events<!--/module-->
<!--export-->on<!--/export-->
===================================================================

<!--shortDescription-->
Attaches an event handler to the specified elements.
<!--/shortDescription-->

<!--paramName1-->element<!--/paramName1-->
<!--paramType1-->Node|Array<Node><!--/paramType1-->
<!--paramDescription1-->
HTML elements to which to attach a handler.
<!--/paramDescription1-->

<!--paramName2-->eventName<!--/paramName2-->
<!--paramType2-->String<!--/paramType2-->
<!--paramDescription2-->
An event name.
<!--/paramDescription2-->

<!--paramName3-->handler<!--/paramName3-->
<!--paramType3-->function()<!--/paramType3-->
<!--paramDescription3-->
The handler to attach.      
Return **false** to stop the event's propagation.
<!--/paramDescription3-->

<!--fullDescription-->
The following parameters are passed to the **handler**:

- **event**: [dxEvent](/Documentation/ApiReference/Common/Object_Structures/dxEvent/)    
The event that caused the handler's execution.

- **extraParameters**: <a href="https://www.w3schools.com/js/js_objects.asp" target="_blank">Object</a>  
Data passed as **extraParameters** to the [trigger(element, event, extraParameters)](/Documentation/ApiReference/Common/utils/events/#triggerelement_event_extraParameters) method when it is called to trigger the event.

<!----->

    // Modular approach
    import { on } from "devextreme/events";
    // ...
    on(document.getElementById("target"), "dxclick", function (event, extraParameters) {
        // Your code goes here
    });

    // Non-modular approach
    DevExpress.events.on(document.getElementById("target"), "dxclick", function (event, extraParameters) {
        // Your code goes here
    });

<!--/fullDescription-->