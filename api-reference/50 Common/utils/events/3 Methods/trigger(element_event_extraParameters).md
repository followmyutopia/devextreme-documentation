===================================================================
<!--module-->events<!--/module-->
<!--export-->trigger<!--/export-->
===================================================================

<!--shortDescription-->
Executes all handlers of a given event type attached to the specified elements.
<!--/shortDescription-->

<!--paramName1-->element<!--/paramName1-->
<!--paramType1-->Node|Array<Node><!--/paramType1-->
<!--paramDescription1-->
An HTML element or an array of elements to which the handlers to execute are attached.
<!--/paramDescription1-->

<!--paramName2-->event<!--/paramName2-->
<!--paramType2-->String|event<!--/paramType2-->
<!--paramDescription2-->
The event or its name.
<!--/paramDescription2-->

<!--paramName3-->extraParameters<!--/paramName3-->
<!--paramType3-->Object<!--/paramType3-->
<!--paramDescription3-->
Additional parameters to pass to the event handler.
<!--/paramDescription3-->

<!--fullDescription-->
The following code executes all [dxhold](/Documentation/ApiReference/UI_Widgets/UI_Events/#dxhold) event handlers of the element with the "myElement" id:

    var element = document.getElementById("myElement");
    DevExpress.events.trigger(element, "dxhold", { timeout: 1000 });
<!--/fullDescription-->