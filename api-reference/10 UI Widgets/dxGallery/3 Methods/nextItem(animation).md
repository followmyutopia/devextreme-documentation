===================================================================
===================================================================

<!--shortDescription-->
Shows the next image.
<!--/shortDescription-->

<!--paramName1-->animation<!--/paramName1-->
<!--paramType1-->Boolean<!--/paramType1-->
<!--paramDescription1-->
Specifies whether switching to the image should be animated.
<!--/paramDescription1-->

<!--returnType-->Promise<void><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the image is shown. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
If the current item is the last item in the gallery, the method behavior depends on the [loop](/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#loop) option value. If **loop** is set to true, the first item is shown. Otherwise, the method does nothing.

#####See Also#####
#include common-link-callmethods
<!--/fullDescription-->