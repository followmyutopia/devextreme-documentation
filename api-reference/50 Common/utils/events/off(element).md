<!--id-->events.off(element)<!--/id-->
===================================================================
<!--module-->events<!--/module-->
<!--export-->off<!--/export-->
===================================================================

<!--shortDescription-->
Detaches all handlers from the specified elements.
<!--/shortDescription-->

<!--paramName1-->element<!--/paramName1-->
<!--paramType1-->Node|Array<Node><!--/paramType1-->
<!--paramDescription1-->
HTML elements from which to detach all handlers.
<!--/paramDescription1-->

<!--fullDescription-->

    // Modular approach
    import { off } from "devextreme/events";
    // ...
    off(document.getElementById("target"));

    // Non-modular approach
    DevExpress.events.off(document.getElementById("target"));

<!--/fullDescription-->