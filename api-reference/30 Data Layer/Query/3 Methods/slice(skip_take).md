<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Limits data item count to a range. Chain function. 'take' argument is optional.
<!--/d-->
<!--p1d-->item count to skip<!--/p1d-->
<!--p2d-->item count to include<!--/p2d-->
<!--rd-->this query<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Limits the data item count.
<!--/shortDescription-->

<!--paramName1-->skip<!--/paramName1-->
<!--paramType1-->numeric<!--/paramType1-->
<!--paramDescription1-->
Specifies the count of the items to skip.
<!--/paramDescription1-->

<!--paramName2-->take<!--/paramName2-->
<!--paramType2-->numeric<!--/paramType2-->
<!--paramDescription2-->
Optional. Specifies the count of the items to pick out. If this argument is not specified, all non-skipped items will be picked out.
<!--/paramDescription2-->

<!--returnType-->object<!--/returnType-->
<!--returnDescription-->
The current Query object.
<!--/returnDescription-->

<!--fullDescription-->
The following example demonstrates how to pick 5 to 15 items from the Query.

    <!--JavaScript-->
    var data = DevExpress.data.query(inputArray).slice(5, 10).toArray();
<!--/fullDescription-->