<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Fires after the rendering of a view is completed.
<!--/shortDescription-->

<!--fullDescription-->
To display a view, information about this view must first be obtained from the application's [cache](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#viewCache). If there is no information on the view in the cache, the information is collected gradually, step-by-step. You can learn about these steps in the [View Life Cycle](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#View_Life_Cycle) topic. You can perform specific actions after the view's markup is rendered by handling the **viewRendered** event. To access information on the displayed view, use the event handler's parameter. The object passed as the parameter exposes the following fields: **viewName**, **uri**, **routeData**, **viewTemplateInfo**, **layoutController**, **model** (the ViewModel of the rendered view) and **renderResult** (an object exposing the **$markup** field).

Use the [on(eventName, eventHandler)](/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#oneventName_eventHandler) method to subscribe to this event and the [off(eventName)](/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#offeventName) method to unsubscribe from it.

    <!--JavaScript-->MyApp.app.on("viewRendered", function(args) {
        var viewModel = args.viewInfo.model;
        //...
    });

[note]This event can be handled for a specific view only. In this instance, add the **viewRendered** field to the view's ViewModel and assign the required function (handler) to it. For details, refer to the [Handle View Events](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Handle_View_Events) topic.

The next time the view is displayed, the cache will contain all of the information required for this view, allowing the view to be displayed right away. In this instance, the **viewRendered** event will not be raised. However, to perform specific actions after the view is displayed, you can handle the [viewShown](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#viewShown) event.

[note]If the view contains [DeferRendering](/Documentation/ApiReference/UI_Widgets/dxDeferRendering/) widgets, their content is not yet rendered when the **viewRendered** event is fired. To access their content, use the [onRendered](/Documentation/ApiReference/UI_Widgets/dxDeferRendering/Configuration/#onRendered) option or the [rendered](/Documentation/ApiReference/UI_Widgets/dxDeferRendering/Events/#rendered) event of a particular **DeferRendering** widget.

For details on the events related to the view display process, refer to the [View Life Cycle](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#View_Life_Cycle) topic.
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
