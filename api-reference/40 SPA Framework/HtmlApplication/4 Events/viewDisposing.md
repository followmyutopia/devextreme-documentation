<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->EVENT<!--/type-->
===========================================================================

<!--shortDescription-->
Fires before a view is disposed.
<!--/shortDescription-->

<!--fullDescription-->
Use the [on(eventName, eventHandler)](/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#oneventName_eventHandler) method to subscribe to this event and the [off(eventName)](/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#offeventName) method to unsubscribe from it.

When handling this event, use the **viewInfo** field of the object passed as the event handler's parameter. This field is the object that exposes the following fields: **viewName**, **uri**, **routeData**, **viewTemplateInfo**, **layoutController**, **model** (the ViewModel of the disposed view) and **renderResult** (an object exposing the **$markup** field).

    <!--JavaScript-->MyApp.app.on("viewDisposing", function(args) {
        var viewModel = args.viewInfo.model;
        //...
    });

[note]This event can be handled for a specific view only. In this instance, add the **viewDisposing** field to the view's ViewModel and assign the required function (handler) to it. For details, refer to the [Handle View Events](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Handle_View_Events) topic.

For details on the events related to the view display process, refer to the [View Life Cycle](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#View_Life_Cycle) topic.
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
