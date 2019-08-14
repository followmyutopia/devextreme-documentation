<!--id-->ui.themes.ready(callback)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Specifies a function to be executed after the theme is loaded.
<!--/shortDescription-->

<!--paramName1-->callback<!--/paramName1-->
<!--paramType1-->function()<!--/paramType1-->
<!--paramDescription1-->
The function.
<!--/paramDescription1-->

<!--fullDescription-->
[note]The specified callback is executed only once. Call **ready** before each [current(themeName)](/Documentation/ApiReference/Common/utils/ui/themes/#currentthemeName) call to execute the callback each time the theme changes.
<!--/fullDescription-->