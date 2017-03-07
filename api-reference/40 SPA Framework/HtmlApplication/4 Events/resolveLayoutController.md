<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Fired when the layout controller should be choosen for the view being shown.<!--/d-->
===========================================================================
<!--type-->EVENT<!--/type-->
<!--fp1d-->Provides function parameters<!--/fp1d-->
<!--fp1_field1d-->Provides information required for displaying a view.<!--/fp1_field1d-->
<!--fp1_field2d-->The layout controller that must be used to provide a layout markup for the given view.<!--/fp1_field2d-->
<!--fp1_field3d-->A collection of the layout controllers that are registered in the application and appropriate for the current device (the platform and form).<!--/fp1_field3d-->
===========================================================================

<!--shortDescription-->
Fires when information about a view to be shown is gathered.
<!--/shortDescription-->

<!--fullDescription-->
Within the information required to display a view, the application sets the instance of the layout controller that will create a layout markup for the view. By default, it is the layout controller from the application's [layout set](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#layoutSet) that is most appropriate in the current navigation context. Handle the **resolveLayoutController** event to set a specific layout controller for a particular view, which will prevent the system from searching for an appropriate controller for this view.
 
Use the [on(eventName, eventHandler)](/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#oneventName_eventHandler) method to subscribe to this event and the [off(eventName)](/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#offeventName) method to unsubscribe from it.

<!---->

    <!--JavaScript-->window.AppNamespace = {};
    $(function () {
        AppNamespace.myController = new myLayoutController();     
        AppNamespace.app = new DevExpress.framework.html.HtmlApplication(
            {
                namespace: AppNamespace,
                layoutSet: [
                    { platform: 'android', controller: new MyAndroidLayoutController() },
                    { platform: 'ios', controller: new MyiOSLayoutController() },
                    { customResolveRequired: true, controller: AppNamespace.myController }
                ],
             }
        );
        AppNamespace.app.router.register(":view/:name", { view: "home", name: '' });
        AppNamespace.app.on("resolveLayoutController", function(args) {
            var viewName = args.viewInfo.viewName;
            if(viewName === "about") {
                args.layoutController = AppNamespace.myController;
            }
        });
        AppNamespace.app.navigate();
    });

#####See Also#####
- You can find more information about this event and other ways to specify a custom layout set in the [Custom Layout Sets](Documentation/Howto/SPA_Framework/Built-in_Layouts#Custom_Layout_Sets) topic.
- For details on the events related to the view display process, refer to the [View Life Cycle](Documentation/Howto/SPA_Framework/Views_and_Layouts#View_Life_Cycle) topic.
- See a step-by-step example in the [Set a Layout for a View](/Documentation/Tutorial/SPA_Framework/Set_a_Layout_for_a_View#Set_a_Layout_for_a_View) tutorial.

<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Provides function parameters.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->viewInfo<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Provides information required for displaying a view. The following fields are available: 'viewName', 'uri', 'routData' and 'viewTemplateInfo'.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->layoutController<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->object<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The layout controller that must be used to provide a layout markup for the given view.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->availableLayoutControllers<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->array<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
A collection of the layout controllers that are registered in the application and appropriate for the current device (its platform and form). Each object exposes the "controller" field and the fields presenting the <a href="/Documentation/16_1/ApiReference/Common_Object_Structures/device">device</a> object fields.
<!--/typeFunctionParamDescription1_field3-->
