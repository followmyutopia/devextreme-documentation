<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Renders items (commands) of the 'navigation' property to the navigation command container (usually to the layout's navigation widget).
<!--/d-->
===================================================================
===================================================================

<!--shortDescription-->
Renders [navigation commands](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Fields/#navigation) to the navigation command containers that are located in the layouts used in the application.
<!--/shortDescription-->

<!--fullDescription-->
If you [specify a set of navigation commands dynamically](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#createNavigationnavigationConfig), call the **renderNavigation** method. This method clears the navigation command container and renders the navigation control representing this command container so that the commands created dynamically are displayed. This is performed in each layout that is included in the application's [layout set](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#layoutSet) if the layout includes a control representing a global navigation command container.

[note]If you define navigation commands for the application before the application runs, using the [navigation](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#navigation) option, you don't have to call neither the [createNavigation](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#createNavigationnavigationConfig) nor **renderNavigation** method. Navigation commands will be created and rendered automatically.

To see an example, refer to the [Create Navigation Dynamically](/Documentation/Tutorial/SPA_Framework/Create_Navigation_Dynamically/#Create_Navigation_Dynamically) tutorial.
<!--/fullDescription-->