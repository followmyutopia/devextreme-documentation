===========================================================================
<!--type-->function(loadOptions)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom implementation of the [totalCount(options)](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#totalCountoptions) method.
<!--/shortDescription-->

<!--fullDescription-->

<!--/fullDescription-->
<!--typeFunctionParamName1-->loadOptions<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Filtering and grouping settings.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->filter<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->Object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Data filtering settings.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->group<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->Object<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
Data grouping settings.
<!--/typeFunctionParamDescription1_field2-->

<!--typeFunctionReturnType-->Promise<Number><!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A Promise that is resolved after data is loaded. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/typeFunctionReturnDescription-->