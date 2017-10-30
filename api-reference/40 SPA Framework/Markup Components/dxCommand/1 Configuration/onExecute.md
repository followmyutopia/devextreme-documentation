<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function() | String | Object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies an action performed when the [execute()](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/Methods/#execute) method of the command is called.
<!--/shortDescription-->

<!--fullDescription-->
Assign a function to perform a custom action when the command is executed.

You can assign a URL to which the browser will navigate when the widget is clicked. The URL can be presented as a string or an object, both conforming to the [navigation routing](/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Declare_a_Routing) registered in the application. In addition, you can specify navigation parameters. For this purpose, specify command options with the same names as the fields of the **options** object passed as the second parameter to the [HtmlApplication.navigate(uri, options)](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#navigateuri_options) method. For details on using commands for navigation, refer to the [Navigate to a View](/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Navigate_to_a_View) topic.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Provides function parameters.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->DOMComponent<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Returns the command instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The command's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.
<!--/typeFunctionParamDescription1_field3-->
