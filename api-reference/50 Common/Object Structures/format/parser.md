<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->The parser function.<!--/d-->
===========================================================================
<!--type-->function<!--/type-->
<!--fp1d-->The value needs to be parsed.<!--/fp1d-->
<!--frd-->The parsed value<!--/frd-->
===========================================================================

<!--shortDescription-->
Parses string values into numeric or date-time values.
<!--/shortDescription-->

<!--fullDescription-->
Along with the [formatter](/Documentation/ApiReference/Common/Object_Structures/format/#formatter) function, **parser** participates in specifying a custom format. Use it to parse numbers or dates presented as strings into the correct format. This function may be called internally by the widget at different points of your application's lifetime, e.g., when the user enters a value into an editor.
<!--/fullDescription-->
<!--typeFunctionParamName1-->value<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->string<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
A string value to be parsed.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->number|date<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The value after parsing.
<!--/typeFunctionReturnDescription-->