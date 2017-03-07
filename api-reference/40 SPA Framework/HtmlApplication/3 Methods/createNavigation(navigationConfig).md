<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Creates and configures global navigation commands.
<!--/d-->
<!--p1d-->Array of navigation commands or command contructor configuration objects<!--/p1d-->
===================================================================
===================================================================

<!--shortDescription-->
Creates global navigation commands. 
<!--/shortDescription-->

<!--paramName1-->navigationConfig<!--/paramName1-->
<!--paramType1-->Array<!--/paramType1-->
<!--paramDescription1-->
An array of dxCommand configuration objects defining commands for the global navigation.
<!--/paramDescription1-->

<!--fullDescription-->
Use this method to create navigation commands dynamically. The created commands are [mapped](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#commandMapping) to the "global-navigation" [command container](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommandContainer/). You can access them via the application's [navigation](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Fields/#navigation) field. To display these navigation commands within the navigation controls used in the application's layouts, call the [renderNavigation](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#renderNavigation) method.

To see an example, refer to the [Create Navigation Dynamically](/Documentation/Tutorial/SPA_Framework/Create_Navigation_Dynamically/#Create_Navigation_Dynamically) tutorial.

<!--/fullDescription-->