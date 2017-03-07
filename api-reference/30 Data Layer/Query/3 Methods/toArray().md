<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Syncronous version of enumerate(). Available only for wrapped array, not available for remote queries.
<!--/d-->
<!--rd-->query result<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Returns the array of current [Query](/Documentation/ApiReference/Data_Layer/Query/) items.
<!--/shortDescription-->

<!--returnType-->array<!--/returnType-->
<!--returnDescription-->
The array of items.
<!--/returnDescription-->

<!--fullDescription-->
    <!--JavaScript-->
    var data = DevExpress.data.query(inputArray).sortBy("lastName").toArray();

This method is an alternative to the [enumerate()](/Documentation/ApiReference/Data_Layer/Query/Methods/#enumerate) method and is executed synchronously. Only the array query supports it.
<!--/fullDescription-->