<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Returns a Boolean value indicating whether or not backwards navigation is currently possible.
<!--/shortDescription-->

<!--returnType-->boolean<!--/returnType-->
<!--returnDescription-->
**true** if the backwards navigation is possible. Otherwise, the value is **false**.
<!--/returnDescription-->

<!--fullDescription-->
When the navigation system operates in ['website'](/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Navigation_in_Web_Apps) mode, this method always returns **true**. In ['mobileApp'](/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Navigation_in_Mobile_Apps) mode, this method returns **false** if the current view is a root view in the navigation history; otherwise, it returns **true**.
<!--/fullDescription-->