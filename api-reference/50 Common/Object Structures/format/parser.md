<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->function(value)<!--/type-->
===========================================================================

<!--shortDescription-->
Parses string values into numeric or date-time values. Always used with [formatter](/Documentation/ApiReference/Common/Object_Structures/format/#formatter).
<!--/shortDescription-->

<!--fullDescription-->
A widget calls this function internally, for example, when a user enters a value. The following code gives an example of the **formatter** and **parser** functions which turns dates into strings, and parses strings back into dates, respectively.

    <!--JavaScript-->
    formatter: function (date) {
        var month = date.getMonth() + 1,
            day = date.getDate(),
            year = date.getFullYear();
        
        return year + "." + month + "." + day;
    },
    parser: function (e) {
        var parts = e.split("."),
            day = Number(parts[2]),
            month = Number(parts[1] - 1),
            year = Number(parts[0]);
        
        return new Date(year, month, day);
    }

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