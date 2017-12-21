===================================================================
===================================================================

<!--shortDescription-->
Gets data items.
<!--/shortDescription-->

<!--returnType-->Array<any><!--/returnType-->
<!--returnDescription-->
The data items.
<!--/returnDescription-->

<!--fullDescription-->
    <!--JavaScript-->
    var data = DevExpress.data.query(inputArray).sortBy("lastName").toArray();

This method is an alternative to the [enumerate()](/Documentation/ApiReference/Data_Layer/Query/Methods/#enumerate) method and is executed synchronously. Only the array query supports it.
<!--/fullDescription-->