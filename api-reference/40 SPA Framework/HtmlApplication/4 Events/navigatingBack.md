<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Fires when the [HtmlApplication.back()](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#back) method is called or the appropriate hardware button is pressed.
<!--/shortDescription-->

<!--fullDescription-->
Use the [on(eventName, eventHandler)](/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#oneventName_eventHandler) method to subscribe to this event and the [off(eventName)](/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#offeventName) method to unsubscribe from it.

This event allows you to handle a Back button click, even if the hardware Back button is pressed. However, the event handler parameters do not provide information about the current view and its View Model. The following code demonstrates how to raise a confirmation dialog when clicking the Back button in a particular view and how to cancel backwards navigation if an end-users cancels it.

    <!--JavaScript-->Application1.app.currentViewModel = null;
    Application1.app.on("viewShown", function (e) {
        Application1.app.currentViewModel = e.viewInfo.model;
    });
    Application1.app.on("navigatingBack", function (e) {
        if (Application1.app.currentViewModel.name == 'View1') {
            if (!confirm("Are you sure you want to leave View1 ?")) {
                e.cancel = true;
                return;
            };
            //Execute the required code
        };
        Application1.app.currentViewModel = null;
    });

<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->cancel<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->Boolean<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Indicates whether to cancel the backwards navigation.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->isHardwareButton<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->Boolean<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
Indicates whether this event fires as a result of pressing a hardware Back button.
<!--/typeFunctionParamDescription1_field2-->
