===================================================================
<!--module-->events<!--/module-->
<!--export-->trigger<!--/export-->
===================================================================

<!--shortDescription-->
Triggers an event for the specified elements.
<!--/shortDescription-->

<!--paramName1-->element<!--/paramName1-->
<!--paramType1-->Node|Array<Node><!--/paramType1-->
<!--paramDescription1-->
HTML elements for which to trigger an event.
<!--/paramDescription1-->

<!--paramName2-->event<!--/paramName2-->
<!--paramType2-->String|event<!--/paramType2-->
<!--paramDescription2-->
An event or its name.
<!--/paramDescription2-->

<!--fullDescription-->
    // Modular approach
    import { trigger } from "devextreme/events";
    // ...
    trigger(document.getElementById("target"), "customEvent");

    // Non-modular approach
    DevExpress.events.trigger(document.getElementById("target"), "customEvent");

<!--/fullDescription-->