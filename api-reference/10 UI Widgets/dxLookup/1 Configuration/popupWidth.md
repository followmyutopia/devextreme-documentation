===========================================================================
<!--default-->function() {return $(window).width() * 0.8 }<!--/default-->
<!--custom_default_for_iPad-->function() { return Math.min($(window).width(), $(window).height()) * 0.4; }<!--/custom_default_for_iPad-->
<!--type-->Number | String | function()<!--/type-->
===========================================================================

<!--shortDescription-->
The width of the widget popup element.
<!--/shortDescription-->

<!--fullDescription-->
Note that the option affects the actual popup size only if the **fullScreen** option is set to false. Otherwise, the popup is shown in a full screen mode.


<!--/fullDescription-->
<!--typeFunctionReturnType-->number|string<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The required width of the widget popup element.
<!--/typeFunctionReturnDescription-->