===================================================================
===================================================================

<!--shortDescription-->
Toggles the visibility of the widget's slide-out menu.
<!--/shortDescription-->

<!--paramName1-->showing<!--/paramName1-->
<!--paramType1-->boolean<!--/paramType1-->
<!--paramDescription1-->
A Boolean value specifying whether to show or hide the widget's slide-out menu.
<!--/paramDescription1-->

<!--returnType-->Promise<void><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the menu is shown/hidden. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
You can use this method instead of [showMenu()](/Documentation/ApiReference/UI_Widgets/dxSlideOut/Methods/#show) and [hideMenu()](/Documentation/ApiReference/UI_Widgets/dxSlideOut/Methods/#hide) methods. The only difference is that you specify whether to show or hide the widget passing true or false to the method parameter.

#####See Also#####
#include common-link-callmethods
<!--/fullDescription-->