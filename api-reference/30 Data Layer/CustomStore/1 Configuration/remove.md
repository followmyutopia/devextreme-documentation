<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->User implementation of remove. Accepts key value.. If returns promise, then considered async, otherwise return value is ignored.<!--/d-->
===========================================================================
<!--type-->function<!--/type-->
<!--fp1d-->The key value of the item being removed.<!--/fp1d-->
<!--frd-->A Promise/A implementation resolved after the item has been removed.<!--/frd-->
===========================================================================

<!--shortDescription-->
The user implementation of the [remove(key)](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#removekey) method.
<!--/shortDescription-->

<!--fullDescription-->
The method passed to this option should return either the [jQuery.Deferred](http://api.jquery.com/jQuery.Deferred) promise or **jQuery.Deferred** compatible object.
<!--/fullDescription-->
<!--typeFunctionParamName1-->key<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object|string|number<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The key value of the item being removed.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->Promise<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A Promise of the jQuery.Deferred object resolved after the item has been removed.
<!--/typeFunctionReturnDescription-->