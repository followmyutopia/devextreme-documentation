<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->function(ratio, value) { return 'Progress: ' + Math.round(ratio * 100) + '%' }<!--/default-->
<!--type-->String | function<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a format for the progress status.
<!--/shortDescription-->

<!--fullDescription-->
A function passed to this option should take on a numeric value and return a formatted value. For instance, you can add a "%" sign after a value. In this case, the function passed to the **statusFormat** option should look like the following.

    <!--JavaScript-->
    function(ratio, value) {
        return ratio * 100 + "% (" + value + ")";
    }

The function may also return a string containing a Globalize format pattern.
<!--/fullDescription-->
<!--typeFunctionParamName1-->ratio<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->number<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Specifies the ratio of the current progress to the entire range. (From 0 to 1)
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->value<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->number<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The current widget value, which can also be accessed using the [value option](/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#value).
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->string<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A status string for the current progress value.
<!--/typeFunctionReturnDescription-->