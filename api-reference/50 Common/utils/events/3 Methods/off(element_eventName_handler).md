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
HTML elements from which to detach a handler.
<!--/paramDescription1-->

<!--paramName2-->eventName<!--/paramName2-->
<!--paramType2-->String<!--/paramType2-->
<!--paramDescription2-->
An event name.
<!--/paramDescription2-->

<!--paramName3-->handler<!--/paramName3-->
<!--paramType3-->function()<!--/paramType3-->
<!--paramDescription3-->
The handler to detach.      
<!--/paramDescription3-->

<!--fullDescription-->

    // Modular approach
    import { off } from "devextreme/events";
    // ...
    off(document, "dxclick", clickHandler);

    // Non-modular approach
    DevExpress.events.off(document, "dxclick", clickHandler);

<!--/fullDescription-->