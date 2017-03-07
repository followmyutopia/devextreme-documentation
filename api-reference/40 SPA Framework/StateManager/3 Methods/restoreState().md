<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Restores the application state that has been saved by the [saveState()](/Documentation/ApiReference/SPA_Framework/StateManager/Methods/#saveState) method to the state storage.
<!--/shortDescription-->

<!--fullDescription-->
Use this method to restore the current application state when required, e.g., when the application is recreated. This method passes the request to restore the saved state to all the state sources that are ["known"](/Documentation/ApiReference/SPA_Framework/StateManager/Methods/#addStateSourcestateSource) to the state manager.

[note]By default, the [HtmlApplication](/Documentation/ApiReference/SPA_Framework/HtmlApplication/) object calls this method during its initialization so that the previously saved state is restored, in case anything was saved.
<!--/fullDescription-->