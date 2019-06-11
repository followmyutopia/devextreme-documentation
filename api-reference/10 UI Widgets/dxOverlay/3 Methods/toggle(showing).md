<!--id-->dxOverlay.toggle(showing)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Shows or hides the widget depending on the argument.
<!--/shortDescription-->

<!--paramName1-->showing<!--/paramName1-->
<!--paramType1-->Boolean<!--/paramType1-->
<!--paramDescription1-->
Specifies whether to show or hide the widget.
<!--/paramDescription1-->

<!--returnType-->Promise<void><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the widget is shown/hidden. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
You can use the **toggle(showing)** method instead of **show()** and **hide()** methods. The only difference is that you specify whether to show or hide the widget passing true or false to the method parameter.

#####See Also#####
#include common-link-callmethods
<!--/fullDescription-->