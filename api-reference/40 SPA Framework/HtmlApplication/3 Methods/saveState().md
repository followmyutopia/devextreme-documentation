<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Calls the [saveState](/Documentation/ApiReference/SPA_Framework/StateManager/Methods/#saveState) method of the application's [StateManager](/Documentation/ApiReference/SPA_Framework/StateManager/) object.
<!--/shortDescription-->

<!--fullDescription-->
By default, the application's state manager has only the navigation manager in the [collection of state sources](/Documentation/ApiReference/SPA_Framework/StateManager/Methods/#addStateSourcestateSource). So when calling this method, the navigation manager saves the current navigation history. Note that when the navigation system works in the [website](/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Navigation_in_Web_Apps) mode, the navigation manager does nothing to save the state. In the [mobileApp](/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Navigation_in_Mobile_Apps) mode, the current [navigation stack](/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Navigation_History_in_Mobile_Apps) is saved to a *state storage*. In particular, the following information on the navigation stack is saved.

- Items in the current navigation stack
- The position of the displayed view in the current navigation stack
<!--/fullDescription-->