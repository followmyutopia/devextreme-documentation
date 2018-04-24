===========================================================================
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Fires before a ViewModel is created during the view display process.
<!--/shortDescription-->

<!--fullDescription-->
When a view is displayed for the first time or information on it is removed from the [cache](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#viewCache), information on this view is gathered. A ViewModel object is one of the pieces of this information required to display the view. Handle the **beforeViewSetup** event to set a custom ViewModel for the view. Otherwise, a ViewModel will be created using the corresponding function (with the view's name) found in the application's [namespace](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#namespace).

Use the [on(eventName, eventHandler)](/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#oneventName_eventHandler) method to subscribe to this event and the [off(eventName)](/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#offeventName) method to unsubscribe from it.

    <!--JavaScript-->MyApp.app.on("beforeViewSetup", function(args) {
        var viewModel = args.viewInfo.model;
        //...
    })

The object passed as the event handler's parameter provides access to the **viewInfo** object. At this step, the **viewInfo** object exposes the following  fields: **viewName**, **uri**, **routeData**, **viewTemplateInfo** and **layoutController**. You can add the **model** field. The object assigned to this field will be used as the view's View Model.

For details on this and other events related to the view display process, refer to the [View Life Cycle](/Documentation/17_2/Guide/SPA_Framework/Views_and_Layouts/#View_Life_Cycle) topic.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->viewInfo<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Provides information required for displaying a view.
<!--/typeFunctionParamDescription1_field1-->
