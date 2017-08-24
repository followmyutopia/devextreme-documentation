<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->event<!--/type-->
===========================================================================

<!--shortDescription-->
An event triggered each time after a view is shown.
<!--/shortDescription-->

<!--fullDescription-->
Use the [on(eventName, eventHandler)](/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#oneventName_eventHandler) method to subscribe to this event and the [off(eventName)](/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#offeventName) method to unsubscribe from it.

The **viewInfo** object that is accessible from the event handler's parameter exposes the following fields: **viewName**, **uri**, **routeData**, **viewTemplateInfo**, **layoutController**, **model** (the ViewModel of the displayed view) and **renderResult** (an object exposing the **$markup** field).

<!---->

    <!--JavaScript-->MyApp.app.on("viewShown", function(args) {
        var viewModel = args.viewInfo.model,
            direction = args.direction;
        //...
    });

[note]This event can be handled for a specific view only. To do so, add the **viewShown** field to the view's ViewModel and assign the required function (handler) to it. For details, refer to the [Handle View Events](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Handle_View_Events) topic.

This event is appropriate for sending asynchronous requests, because the transition to the view is already completed at this time, and the forthcoming response will not interrupt the process of the view display.

To perform specific actions after the view is rendered for the first time, handle the [viewRendered](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#viewRendered) event.

For details on events related to the view display process, refer to the [View Life Cycle](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#View_Life_Cycle) topic.

[note]If you use device APIs provided by [Apache Cordova](https://cordova.apache.org/) in your application, call device API functions after the [deviceready](http://cordova.apache.org/docs/en/5.0.0/cordova_events_events.md.html#deviceready) event of Cordova has fired. Otherwise, the application may work too slow on startup. The **deviceready** event fires when Apache Cordova is fully loaded.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Provides function parameters.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->viewInfo<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Provides information about the displayed view.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->direction<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->string<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
Specifies the direction in which the layout controller animated the transition to the displayed view. The following values are accepted: 'backward', 'forward' or 'none'.
<!--/typeFunctionParamDescription1_field2-->
