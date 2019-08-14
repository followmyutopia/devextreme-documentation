<!--id-->events.one(element, eventName, selector, handler)<!--/id-->
===================================================================
<!--module-->events<!--/module-->
<!--export-->one<!--/export-->
===================================================================

<!--shortDescription-->
Attaches an event handler that is executed only once to the specified elements' descendants.
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

<!--paramName3-->selector<!--/paramName3-->
<!--paramType3-->String<!--/paramType3-->
<!--paramDescription3-->
A <a href="https://www.w3schools.com/cssref/css_selectors.asp" target="_blank">CSS selector</a> used to filter the **element**'s descendants. 
<!--/paramDescription3-->

<!--paramName4-->handler<!--/paramName4-->
<!--paramType4-->function()<!--/paramType4-->
<!--paramDescription4-->
A handler to attach.      
Return **false** to stop the event's propagation.
<!--/paramDescription4-->

<!--fullDescription-->
The following parameters are passed to the **handler**:

- **event**: [dxEvent](/Documentation/ApiReference/Common/Object_Structures/dxEvent/)    
The event that caused the handler's execution.

- **extraParameters**: <a href="https://www.w3schools.com/js/js_objects.asp" target="_blank">Object</a>  
Data passed as **extraParameters** to the [trigger(element, event, extraParameters)](/Documentation/ApiReference/Common/utils/events/#triggerelement_event_extraParameters) method when it is called to trigger the event.

<!----->

    // Modular approach
    import { one } from "devextreme/events";
    // ...
    one(document.getElementById("target"), "dxclick", "#elementID", function (event, extraParameters) {
        // Your code goes here
    });

    // Non-modular approach
    DevExpress.events.one(document.getElementById("target"), "dxclick", "#elementID", function (event, extraParameters) {
        // Your code goes here
    });

<!--/fullDescription-->