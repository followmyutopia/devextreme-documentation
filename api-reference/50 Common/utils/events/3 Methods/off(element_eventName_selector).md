<!--id-->events.off(element, eventName, selector)<!--/id-->
===================================================================
<!--module-->events<!--/module-->
<!--export-->off<!--/export-->
===================================================================

<!--shortDescription-->
Detaches all event handlers of the specified type attached using the [on(element, eventName, selector, data, handler)](/Documentation/ApiReference/Common/utils/events/Methods/#onelement_eventName_selector_data_handler) or [on(element, eventName, selector, handler)](/Documentation/ApiReference/Common/utils/events/Methods/#onelement_eventName_selector_handler) method.
<!--/shortDescription-->

<!--paramName1-->element<!--/paramName1-->
<!--paramType1-->Node|Array<Node><!--/paramType1-->
<!--paramDescription1-->
HTML elements from which to detach handlers.
<!--/paramDescription1-->

<!--paramName2-->eventName<!--/paramName2-->
<!--paramType2-->String<!--/paramType2-->
<!--paramDescription2-->
An event name.
<!--/paramDescription2-->

<!--paramName3-->selector<!--/paramName3-->
<!--paramType3-->String<!--/paramType3-->
<!--paramDescription3-->
A <a href="https://www.w3schools.com/cssref/css_selectors.asp" target="_blank">CSS selector</a> passed to the **on** method when attaching handlers.
<!--/paramDescription3-->

<!--fullDescription-->

    // Modular approach
    import { off } from "devextreme/events";
    // ...
    off(document.getElementById("target"), "dxclick", "#elementID");

    // Non-modular approach
    DevExpress.events.off(document.getElementById("target"), "dxclick", "#elementID");

<!--/fullDescription-->