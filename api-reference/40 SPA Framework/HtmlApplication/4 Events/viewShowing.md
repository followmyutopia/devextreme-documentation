<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->

An event triggered each time before a view is displayed, after information on the view is obtained.

<!--/shortDescription-->

<!--fullDescription-->

To display a view, information about this view must first be obtained from the application's [cache](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#viewCache). If the view has already been displayed and has not yet been removed from the [navigation history](/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Navigation_History), the **viewInfo** object found in the cache includes all information about the view. This information is presented by the following fields: **viewName**, **uri**, **routeData**, **viewTemplateInfo**, **layoutController**, **model** (the ViewModel of the disposed view) and **renderResult** (an object exposing the **$markup** field). Once all this information is available, the view is ready to be displayed. In this instance, the **viewShowing** event is raised before displaying the view. The **viewInfo** object can be accessed as the **viewInfo** field of the event handler's parameter.

If there is no information on the view in the cache when the view display proccess starts, the information is collected gradually, step-by-step. You can learn about these steps in the [View Life Cycle](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#View_Life_Cycle) topic. In this case, the **viewShowing** event is raised when the ViewModel is created and added to the **viewInfo** object as the **model** field. You can access the **viewInfo** object using the **viewInfo** field of the event handler's parameter.

Use the [on(eventName, eventHandler)](/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#oneventName_eventHandler) method to subscribe to this event and the [off(eventName)](/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#offeventName) method to unsubscribe from it.

    <!--JavaScript-->MyApp.app.on("viewShowing", function(args) {
        var viewModel = args.viewInfo.model,
            direction = args.direction;
        //...
    });

In addition to the **viewInfo** object provided by the **viewInfo** field of the object passed as the event handler's parameter, the direction in which the layout controller will animate the transition to show the view is also accessible. To specify the direction, use the **direction** field of the object passed as the event handler's parameter. This field can be set to the "backward", "forward" or "none" value.

[note]This event can be handled for a specific view only. In this instance, add the **viewShowing** field to the view's ViewModel and assign the required function (handler) to it. For details, refer to the [Handle View Events](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Handle_View_Events) topic.

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
<!--typeFunctionParamName1_field2-->direction<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->string<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->

The direction in which the layout controller will animate the transition to show the view. The following values are accepted: 'backward', 'forward' or 'none'.

<!--/typeFunctionParamDescription1_field2-->
