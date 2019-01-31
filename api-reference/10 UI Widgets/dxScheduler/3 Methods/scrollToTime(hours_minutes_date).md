===================================================================
===================================================================

<!--shortDescription-->
Scrolls the current view to a specific day and time.
<!--/shortDescription-->

<!--paramName1-->hours<!--/paramName1-->
<!--paramType1-->Number<!--/paramType1-->
<!--paramDescription1-->
An hour component.
<!--/paramDescription1-->

<!--paramName2-->minutes<!--/paramName2-->
<!--paramType2-->Number<!--/paramType2-->
<!--paramDescription2-->
A minute component.
<!--/paramDescription2-->

<!--paramName3-->date<!--/paramName3-->
<!--paramType3-->Date|undefined<!--/paramType3-->
<!--paramDescription3-->
A date component.
<!--/paramDescription3-->

<!--fullDescription-->
If the specified date is outside the current date range, the method scrolls the view to the specified time.

[note] This method requires the markup to be already rendered. If you want to scroll the **Scheduler** at launch, call this method in the [onContentReady](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onContentReady) function.

#####See Also#####
#include common-link-callmethods
<!--/fullDescription-->
