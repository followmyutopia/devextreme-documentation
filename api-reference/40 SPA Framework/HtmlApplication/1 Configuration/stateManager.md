<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->object<!--/type-->
===========================================================================

<!--shortDescription-->
A state manager to be used in the application.
<!--/shortDescription-->

<!--fullDescription-->
When initializing the **HtmlApplication** object, the [StateManager](/Documentation/ApiReference/SPA_Framework/StateManager/) object is created and assigned to the [stateManager](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Fields/#stateManager) field. You can use the application's state manager to manipulate the application state - add additional state sources, save and restore the state when required.

By default, the [session storage](http://en.wikipedia.org/wiki/Web_storage#Local_and_session_storage) is used by the application state manager as a state storage. You can use another storage specifying it using the [stateStorage](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#stateStorage) option of the **HtmlApplication** object.
<!--/fullDescription-->