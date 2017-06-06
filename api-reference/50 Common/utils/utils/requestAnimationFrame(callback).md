<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
<!--module-->animation/frame<!--/module-->
<!--export-->request<!--/export-->
===================================================================

<!--shortDescription-->
Requests that the browser call a specified function to update animation before the next repaint.
<!--/shortDescription-->

<!--paramName1-->callback<!--/paramName1-->
<!--paramType1-->function<!--/paramType1-->
<!--paramDescription1-->
Specifies the function to call when it's time to update your animation for the next repaint.
<!--/paramDescription1-->

<!--returnType-->number<!--/returnType-->
<!--returnDescription-->
The request id that uniquely identifies the entry in the callback list.
<!--/returnDescription-->

<!--fullDescription-->
This method acts as a normalization of the standard [requestAnimationFrame](https://developer.mozilla.org/en/docs/Web/API/window.requestAnimationFrame) method of the **window** object:

    <!--JavaScript-->
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame

If the API in the code above is not supported, the **DevExpress.utils.requestAnimationFrame(callback)** method calls the function passed as a parameter after an internally set timeout.
<!--/fullDescription-->