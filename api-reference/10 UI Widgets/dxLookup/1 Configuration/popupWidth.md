===========================================================================
<!--default-->function() {return $(window).width() * 0.8 }<!--/default-->
<!--custom_default_for_iPad-->function() { return Math.min($(window).width(), $(window).height()) * 0.4; }<!--/custom_default_for_iPad-->
<!--type-->Number | String | function()<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the popup element's width. Applies only if [fullScreen](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#fullScreen) is **false**.
<!--/shortDescription-->

<!--fullDescription-->
#include uiwidgets-ref-width
<!--/fullDescription-->
<!--typeFunctionReturnType-->Number|String<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The popup element's width.
<!--/typeFunctionReturnDescription-->