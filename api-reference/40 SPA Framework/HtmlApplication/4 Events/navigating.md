<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Fires after navigation to another view has started.
<!--/shortDescription-->

<!--fullDescription-->
Use the [on(eventName, eventHandler)](/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#oneventName_eventHandler) method to subscribe to this event and the [off(eventName)](/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#offeventName) method to unsubscribe from it.

You can use this event to cancel navigation, as illustrated in the following example.

    <!--JavaScript-->MyApp.app.on("navigating", function(e){
        e.cancel = true; //Cancel navigation
    });

For details on this and other events related to the view display process, refer to the [View Life Cycle](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#View_Life_Cycle) topic.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Provides function parameters.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->currentUri<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->string<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The URI from which the application navigates to another URI.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->uri<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->string<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The URI to which the application navigates.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->cancel<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Boolean<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Indicates whether to cancel the navigation.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->options<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
Defines navigation options (see the second parameter of the navigate() method description).
<!--/typeFunctionParamDescription1_field4-->
