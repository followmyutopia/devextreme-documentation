<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->function(a, b)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how to sort the header items.
<!--/shortDescription-->

<!--fullDescription-->
You can order the header items per your requirements by specifying a comparison function. This function accepts two parameters that represent two header items and should return the value on which the order will be based. The value of these header items can be accessed using the **value** field. You can base your sorting method on the header item's children that are available in the **children** field.

The function returns a number that has one of three values listed below.

- *Less than zero*  
 The first function parameter comes before the second in the resulting order

- *Zero*  
 The first and second parameters remain unchanged relative to each other

- *Greater than zero*  
 The second function parameter comes before the first in the resulting order

<!--/fullDescription-->
<!--typeFunctionParamName1-->a<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
A header item.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->value<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->string|number<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
A header item value.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->children<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->array<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
An array of header item's children; available only when the item is expanded.
<!--/typeFunctionParamDescription1_field2-->

<!--typeFunctionParamName2-->b<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->object<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
A header item.
<!--/typeFunctionParamDescription2-->
<!--typeFunctionParamName2_field1-->value<!--/typeFunctionParamName2_field1-->
<!--typeFunctionParamType2_field1-->string|number<!--/typeFunctionParamType2_field1-->
<!--typeFunctionParamDescription2_field1-->
A header item value.
<!--/typeFunctionParamDescription2_field1-->
<!--typeFunctionParamName2_field2-->children<!--/typeFunctionParamName2_field2-->
<!--typeFunctionParamType2_field2-->array<!--/typeFunctionParamType2_field2-->
<!--typeFunctionParamDescription2_field2-->
An array of header item's children; available only when the item is expanded.
<!--/typeFunctionParamDescription2_field2-->

<!--typeFunctionReturnType-->number<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
Indicates whether a comes before b.
<!--/typeFunctionReturnDescription-->