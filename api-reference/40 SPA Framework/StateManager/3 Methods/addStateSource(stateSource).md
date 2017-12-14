===================================================================
===================================================================

<!--shortDescription-->
Adds an object that implements an interface of a *state source* to the state manager's collection of state sources.
<!--/shortDescription-->

<!--paramName1-->stateSource<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
An object that has the **saveState(storage)**, **restoreState(storage)** and **removeState(storage)** methods to manipulate a particular state in the application.
<!--/paramDescription1-->

<!--fullDescription-->
To manipulate the application's state, the state manager passes the requests received from the [HtmlApplication](/Documentation/ApiReference/SPA_Framework/HtmlApplication/) object to the state sources that are collected using the **addStateSource(stateSource)** method. The state sources must have the following methods.

- **saveState(storage)**
- **restoreState(storage)**
- **removeState(storage)**

To remove a state source from the state manager's collection, use the [removeStateSource(stateSource)](/Documentation/ApiReference/SPA_Framework/StateManager/Methods/#removeStateSourcestateSource) method.
<!--/fullDescription-->