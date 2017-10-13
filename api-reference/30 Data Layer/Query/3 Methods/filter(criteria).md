<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Filters the current [Query](/Documentation/ApiReference/Data_Layer/Query/) data.
<!--/shortDescription-->

<!--paramName1-->criteria<!--/paramName1-->
<!--paramType1-->Array<any><!--/paramType1-->
<!--paramDescription1-->
A filter expression.
<!--/paramDescription1-->

<!--returnType-->Query<!--/returnType-->
<!--returnDescription-->
The Query object.
<!--/returnDescription-->

<!--fullDescription-->
The following example demonstrates how to get an array of the Query items whose **price** value is lower than 500.

    <!--JavaScript-->
    var data = DevExpress.data.query(inputArray).filter("price", "<", 500).toArray();

For information on filter expressions, refer to the [Filtering](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering) section of the Data Layer article.
<!--/fullDescription-->