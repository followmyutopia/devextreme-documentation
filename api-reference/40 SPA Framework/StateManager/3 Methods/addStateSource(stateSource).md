<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Add a state source to the state sources collection
<!--/d-->
<!--p1d-->An object that requires to save/restore its state<!--/p1d-->
===================================================================
===================================================================

<!--shortDescription-->
Adds an object that implements an interface of a *state source* to the state manager's collection of state sources.
<!--/shortDescription-->

<!--paramName1-->stateSource<!--/paramName1-->
<!--paramType1-->object<!--/paramType1-->
<!--paramDescription1-->
An object that has the <b>saveState(storage)</b>, <b>restoreState(storage)</b> and <b>removeState(storage)</b> methods to manipulate a particular state in the application.
<!--/paramDescription1-->

<!--fullDescription-->
To manipulate the application's state, the state manager passes the requests received from the [HtmlApplication](/Documentation/ApiReference/SPA_Framework/HtmlApplication/) object to the state sources that are collected using the **addStateSource(stateSource)** method. The state sources must have the following methods.

- **saveState(storage)**
- **restoreState(storage)**
- **removeState(storage)**

To remove a state source from the state manager's collection, use the [removeStateSource(stateSource)](/Documentation/ApiReference/SPA_Framework/StateManager/Methods/#removeStateSourcestateSource) method.
<!--/fullDescription-->