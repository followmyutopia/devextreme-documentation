===========================================================================
<!--default-->true<!--/default-->
<!--type-->Boolean | function(a, b)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how to sort series points.
<!--/shortDescription-->

<!--fullDescription-->
This option specifies the sorting manner of series points. When this option is set to **true**, the series points are sorted in ascending order by arguments. When this option is set to **false**, the order of the series points does not differ from the order in the data source.

In addition, you can order the series points per your requirements by specifying a compare function. This function accepts two parameters that represent two series points and should return the value on which the order will be based. The argument and value of these series points can be accessed using the **arg** and **val** fields correspondingly.

Assume that *a* and *b* are the parameters. If the function returns a value of less than 0, *a* comes before *b* in the resulting order. If the function returns a value greater than 0, *b* comes before *a* in the resulting order. If the function returns 0, *a* and *b* remain unchanged relative to each other.
<!--/fullDescription-->
<!--typeFunctionParamName1-->a<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
A series point to be compared.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->arg<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->Date | Number | String<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The series point's argument.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->val<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->Date | Number | String<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The series point's value.
<!--/typeFunctionParamDescription1_field2-->

<!--typeFunctionParamName2-->b<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->Object<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
A series point to be compared.
<!--/typeFunctionParamDescription2-->
<!--typeFunctionParamName2_field1-->arg<!--/typeFunctionParamName2_field1-->
<!--typeFunctionParamType2_field1-->Date | Number | String<!--/typeFunctionParamType2_field1-->
<!--typeFunctionParamDescription2_field1-->
The series point's argument.
<!--/typeFunctionParamDescription2_field1-->
<!--typeFunctionParamName2_field2-->val<!--/typeFunctionParamName2_field2-->
<!--typeFunctionParamType2_field2-->Date | Number | String<!--/typeFunctionParamType2_field2-->
<!--typeFunctionParamDescription2_field2-->
The series point's value.
<!--/typeFunctionParamDescription2_field2-->

<!--typeFunctionReturnType-->Number<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
Specifies whether *a* goes before *b*.
<!--/typeFunctionReturnDescription-->