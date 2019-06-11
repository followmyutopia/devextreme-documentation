<!--id-->utils.requestAnimationFrame(callback)<!--/id-->
===================================================================
<!--module-->animation/frame<!--/module-->
<!--export-->request<!--/export-->
===================================================================

<!--shortDescription-->
Makes the browser call a function to update animation before the next repaint.
<!--/shortDescription-->

<!--paramName1-->callback<!--/paramName1-->
<!--paramType1-->function()<!--/paramType1-->
<!--paramDescription1-->
The function.
<!--/paramDescription1-->

<!--returnType-->Number<!--/returnType-->
<!--returnDescription-->
The current request's ID.
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