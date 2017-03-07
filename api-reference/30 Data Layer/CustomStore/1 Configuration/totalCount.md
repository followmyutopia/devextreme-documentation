<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->function<!--/type-->
===========================================================================

<!--shortDescription-->
The user implementation of the [totalCount(options)](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#totalCountoptions) method.
<!--/shortDescription-->

<!--fullDescription-->
The method passed to this option should return either the [jQuery.Deferred](http://api.jquery.com/jQuery.Deferred) promise or **jQuery.Deferred** compatible object.
<!--/fullDescription-->
<!--typeFunctionParamName1-->loadOptions<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
An object specifying filtering and grouping options.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->filter<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Data filtering conditions.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->group<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->object<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
Data grouping options.
<!--/typeFunctionParamDescription1_field2-->

<!--typeFunctionReturnType-->Promise<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A Promise of the jQuery.Deferred object resolved after data has been loaded.
<!--/typeFunctionReturnDescription-->