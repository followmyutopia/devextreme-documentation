<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Applies transformation (projection) to each item. Ref to getter/setter syntax. Chain function.
<!--/d-->
<!--p1d-->item transformation expression<!--/p1d-->
<!--rd-->this query<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Applies the specified transformation to each item.
<!--/shortDescription-->

<!--paramName1-->getter<!--/paramName1-->
<!--paramType1-->object<!--/paramType1-->
<!--paramDescription1-->
The getter specifying the transformation rules.
<!--/paramDescription1-->

<!--returnType-->object<!--/returnType-->
<!--returnDescription-->
This Query object.
<!--/returnDescription-->

<!--fullDescription-->
The following example demonstrates how to get an array of **price** values of initial Query items.

    <!--JavaScript-->
    var data = DevExpress.data.query(inputArray).select("price").toArray();

For the information on getters, refer to the [Getters and Setters section](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters) of the Data Layer article.
<!--/fullDescription-->