<!--id-->dxLookup.Options.popupWidth<!--/id-->
===========================================================================
<!--default-->function() {return $(window).width() * 0.8 }, function() { return Math.min($(window).width(), $(window).height()) * 0.4; } (iPad)<!--/default-->
<!--type-->Number | String | function()<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the popup element's width. Applies only if [fullScreen](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#fullScreen) is **false**.
<!--/shortDescription-->

<!--fullDescription-->
In the Material theme, the default value equals the **Lookup** width plus paddings and borders.

#include uiwidgets-ref-width
<!--/fullDescription-->
<!--typeFunctionReturnType-->Number|String<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The popup element's width.
<!--/typeFunctionReturnDescription-->