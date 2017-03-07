<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->User implementation of total count evaluation. Accepts arguments same as load. Must return Number or promise(Number)<!--/d-->
===========================================================================
<!--type-->function<!--/type-->
<!--fp1d-->An object specifying data shaping options<!--/fp1d-->
<!--fp1_field1d-->Filter expression<!--/fp1_field1d-->
<!--fp1_field2d-->Group expression<!--/fp1_field2d-->
<!--frd-->A Promise/A implementation resolved after the total item count is obtained.<!--/frd-->
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