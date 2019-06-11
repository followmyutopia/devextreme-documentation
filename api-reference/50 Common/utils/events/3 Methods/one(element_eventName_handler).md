<!--id-->events.one(element, eventName, handler)<!--/id-->
===================================================================
<!--module-->events<!--/module-->
<!--export-->one<!--/export-->
===================================================================

<!--shortDescription-->
Attaches an event handler that is executed only once to the specified elements.
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

- **extraParameters**: [Object](https://www.w3schools.com/js/js_objects.asp)  
Data passed as **extraParameters** to the [trigger(element, event, extraParameters)](/Documentation/ApiReference/Common/utils/events/Methods/#triggerelement_event_extraParameters) method when it is called to trigger the event.

<!----->

    // Modular approach
    import { one } from "devextreme/events";
    // ...
    one(
        document.getElementById("target"), 
        "dxclick", 
        function (event, extraParameters) {
            // Your code goes here
        }
    );

    // Non-modular approach
    DevExpress.events.one(
        document.getElementById("target"), 
        "dxclick", 
        function (event, extraParameters) {
            // Your code goes here
        }
    );

<!--/fullDescription-->