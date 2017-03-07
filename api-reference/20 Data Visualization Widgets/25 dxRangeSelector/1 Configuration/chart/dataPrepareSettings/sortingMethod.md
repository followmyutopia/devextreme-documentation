<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->method data sort availability<!--/d-->
===========================================================================
<!--default-->true<!--/default-->
<!--type-->Boolean | function(a,b)<!--/type-->
<!--fp1d-->A series point<!--/fp1d-->
<!--fp1_field1d-->The argument of this series point<!--/fp1_field1d-->
<!--fp1_field2d-->The value of this series point<!--/fp1_field2d-->
<!--fp2d-->A series point<!--/fp2d-->
<!--fp2_field1d-->The argument of this series point<!--/fp2_field1d-->
<!--fp2_field2d-->The value of this series point<!--/fp2_field2d-->
<!--frd-->Indicates whether a comes before b<!--/frd-->
===========================================================================

<!--shortDescription-->
Specifies how to sort series points.
<!--/shortDescription-->

<!--fullDescription-->
This option specifies the sorting manner of series points. When this option is set to *true*, the series points are sorted in ascending order by arguments. When this option is set to *false*, the order of the series points does not differ from the order in the data source.

In addition, you can order the series points per your requirements by specifying a compare function. This function accepts two parameters that represent two series points and should return the value on which the order will be based. The argument and value of these series points can be accessed using the **arg** and **val** fields correspondingly.

Assume that *a* and *b* are the parameters. If the function returns a value of less than 0, *a* comes before *b* in the resulting order. If the function returns a value greater than 0, *b* comes before *a* in the resulting order. If the function returns 0, *a* and *b* remain unchanged relative to each other.
<!--/fullDescription-->
<!--typeFunctionParamName1-->a<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
A series point.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->arg<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->Date|Number|string<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The argument of this series point.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->val<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->Date|Number|string<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The value of this series point.
<!--/typeFunctionParamDescription1_field2-->

<!--typeFunctionParamName2-->b<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->object<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
A series point.
<!--/typeFunctionParamDescription2-->
<!--typeFunctionParamName2_field1-->arg<!--/typeFunctionParamName2_field1-->
<!--typeFunctionParamType2_field1-->Date|Number|string<!--/typeFunctionParamType2_field1-->
<!--typeFunctionParamDescription2_field1-->
The argument of this series point.
<!--/typeFunctionParamDescription2_field1-->
<!--typeFunctionParamName2_field2-->val<!--/typeFunctionParamName2_field2-->
<!--typeFunctionParamType2_field2-->Date|Number|string<!--/typeFunctionParamType2_field2-->
<!--typeFunctionParamDescription2_field2-->
The value of this series point.
<!--/typeFunctionParamDescription2_field2-->

<!--typeFunctionReturnType-->Number<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
Indicates whether a comes before b.
<!--/typeFunctionReturnDescription-->