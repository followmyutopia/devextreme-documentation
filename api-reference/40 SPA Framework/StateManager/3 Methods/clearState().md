===================================================================
===================================================================

<!--shortDescription-->
Removes the application state that has been saved by the [saveState()](/Documentation/ApiReference/SPA_Framework/StateManager/Methods/#saveState) method to the state storage.
<!--/shortDescription-->

<!--fullDescription-->
The saved application state is not restored after the **clearState()** method is called.

This method passes the request to clear the saved state to all the state sources that are ["known"](/Documentation/ApiReference/SPA_Framework/StateManager/Methods/#addStateSourcestateSource) to the state manager.
<!--/fullDescription-->