<!--id-->events.off(element, eventName, selector, handler)<!--/id-->
===================================================================
<!--module-->events<!--/module-->
<!--export-->off<!--/export-->
===================================================================

<!--shortDescription-->
Detaches the specified event handler attached using the [on(element, eventName, selector, data, handler)](/Documentation/ApiReference/Common/utils/events/#onelement_eventName_selector_data_handler) or [on(element, eventName, selector, handler)](/Documentation/ApiReference/Common/utils/events/#onelement_eventName_selector_handler) method.
<!--/shortDescription-->

<!--paramName1-->element<!--/paramName1-->
<!--paramType1-->Node|Array<Node><!--/paramType1-->
<!--paramDescription1-->
HTML elements from which to detach a handler.
<!--/paramDescription1-->

<!--paramName2-->eventName<!--/paramName2-->
<!--paramType2-->String<!--/paramType2-->
<!--paramDescription2-->
An event name.
<!--/paramDescription2-->

<!--paramName3-->selector<!--/paramName3-->
<!--paramType3-->String<!--/paramType3-->
<!--paramDescription3-->
A <a href="https://www.w3schools.com/cssref/css_selectors.asp" target="_blank">CSS selector</a> passed to the **on** method when attaching the handler.
<!--/paramDescription3-->

<!--paramName4-->handler<!--/paramName4-->
<!--paramType4-->function()<!--/paramType4-->
<!--paramDescription4-->
The handler to detach.        
<!--/paramDescription4-->

<!--fullDescription-->

    // Modular approach
    import { off } from "devextreme/events";
    // ...
    off(document.getElementById("target"), "dxclick", "#elementID", clickHandler);

    // Non-modular approach
    DevExpress.events.off(document.getElementById("target"), "dxclick", "#elementID", clickHandler);

<!--/fullDescription-->