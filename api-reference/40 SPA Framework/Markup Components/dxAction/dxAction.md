<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->function(e) | String | Object<!--/type-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
Custom [Knockout](http://knockoutjs.com/documentation/introduction.html) binding that links an HTML element with a specific action.
<!--/shortDescription-->

<!--fullDescription-->
Use **dxAction** binding to execute a custom action when clicking a bound HTML element. The action can be defined in one of the following ways.

- Function  
    This function is performed when clicking a bound HTML element.

- String  
    The target URL to be navigated to.

- Object  
    The fields of this object represent parameters for the URL to be navigated to.

Generally, the **dxAction** binding is analogous to the [dxclick](/Documentation/ApiReference/UI_Widgets/UI_Events/#dxclick) event supplied with the DexExtreme UI Events library. However, there two distinctions.

 - The **dxAction** binding allows you to navigate to a URL by assigning that URL (a string or an object) as a binding value. For details, refer to the [Navigate to a View](/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Navigate_to_a_View) topic.
 
 - When you assign a function to dxAction binding, you can use the function's parameters to access the DOM element involved in this binding, the model that is available for binding against the element and the jQueryEvent that caused the action execution.

<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Provides function parameters.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->element<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->jQuery<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The DOM element involved in this binding.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->model<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->object<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->jQueryEvent<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->jQuery.Event<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Specifies the jQuery event that caused the action execution.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->event<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->event<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->

<!--/typeFunctionParamDescription1_field4-->
