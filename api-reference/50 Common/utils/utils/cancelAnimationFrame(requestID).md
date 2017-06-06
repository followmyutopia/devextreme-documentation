<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
<!--module-->animation/frame<!--/module-->
<!--export-->cancel<!--/export-->
===================================================================

<!--shortDescription-->
Cancels an animation frame request scheduled with the [requestAnimationFrame](/Documentation/ApiReference/Common/Utils/#requestAnimationFramecallback) method.
<!--/shortDescription-->

<!--paramName1-->requestID<!--/paramName1-->
<!--paramType1-->number<!--/paramType1-->
<!--paramDescription1-->
The identifier returned by <b>requestAnimationFrame</b> method.
<!--/paramDescription1-->

<!--fullDescription-->
This method acts as a normalization of the standard [cancelAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window.cancelAnimationFrame) method of the **window** object.

    <!--JavaScript-->
    window.cancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.oCancelAnimationFrame ||
    window.msCancelAnimationFrame

If the API in the code above is not supported, the **DevExpress.utils.cancelAnimationFrame(requestID)** method clears a timer set with the **requestAnimationFrame** method.
<!--/fullDescription-->