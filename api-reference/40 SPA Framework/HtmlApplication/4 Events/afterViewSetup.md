<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Fires after a ViewModel has been created during the view display process.
<!--/shortDescription-->

<!--fullDescription-->
When a view is displayed for the first time or information on it is removed from the [cache](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#viewCache), information on this view is gathered. A ViewModel object is one of the pieces of this information required to display the view. Handle the **afterViewSetup** event to modify the created ViewModel. Use the [on(eventName, eventHandler)](/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#oneventName_eventHandler) method to subscribe to this event and the [off(eventName)](/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#offeventName) method to unsubscribe from it.

To access the ViewModel, use the **model** field of the **viewInfo** object. This object can be accessed using the **viewInfo** field of the object passed as the event handler's parameter.

    <!--JavaScript-->MyApp.app.on("afterViewSetup", function(arg) {
        var viewModel = arg.viewInfo.model;
        //...
    })

In addition to the **model** field, the **viewInfo** object exposes the **viewName**, **uri**, **routeData**,  **viewTemplateInfo** and **layoutController** fields.

For details on this and other events related to the view display process, refer to the [View Life Cycle](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#View_Life_Cycle) topic.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Provides function parameters.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->viewInfo<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Provides information required for displaying a view.
<!--/typeFunctionParamDescription1_field1-->
