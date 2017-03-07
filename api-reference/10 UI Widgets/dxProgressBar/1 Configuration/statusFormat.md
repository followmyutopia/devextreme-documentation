<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Specifies custom format for status display value. Supports Globalize format patterns as a string.<!--/d-->
===========================================================================
<!--default-->function(ratio, value) { return 'Progress: ' + Math.round(ratio * 100) + '%' }<!--/default-->
<!--type-->string | function<!--/type-->
<!--fp1d-->Specifies the current fill value from 0 to 1.<!--/fp1d-->
<!--fp2d-->Specifies the current value.<!--/fp2d-->
<!--frd-->String, that will be displayed in status.<!--/frd-->
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
The current widget value, which can also be accessed using the <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxProgressBar/Configuration/#value">value option</a>.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->string<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A status string for the current progress value.
<!--/typeFunctionReturnDescription-->