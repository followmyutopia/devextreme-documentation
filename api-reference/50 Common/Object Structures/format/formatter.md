<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->function(value)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom format.
<!--/shortDescription-->

<!--fullDescription-->
If none of the [predefined formats](/Documentation/ApiReference/Common/Object_Structures/format/#type) meet your requirements, use this function to specify a custom format. If **formatter** is the only field that you need to specify in the **format** object, assign the function straight to the **format** option as shown below.

    <!--JavaScript-->format: function (value) {
        // ...
        return formattedValue;
    }
    
#####See Also#####
- **format**.[parser](/Documentation/ApiReference/Common/Object_Structures/format/#parser) - parses string values into numeric or date-time values.
<!--/fullDescription-->
<!--typeFunctionParamName1-->value<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->number|date<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
A value to be formatted.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->string<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The value after formatting.
<!--/typeFunctionReturnDescription-->