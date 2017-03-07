<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Returns data value
<!--/d-->
<!--p1d-->key value of data<!--/p1d-->
<!--rd-->A Promise of the jQuery.Deferred object resolved after data has been loaded.<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Allows you to obtain a data object by its key.
<!--/shortDescription-->

<!--paramName1-->key<!--/paramName1-->
<!--paramType1-->object|string|number<!--/paramType1-->
<!--paramDescription1-->
The key value of the required data object.
<!--/paramDescription1-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise of the jQuery.Deferred object resolved after the data object has been loaded. 
<!--/returnDescription-->

<!--fullDescription-->
The following code snippet demonstrates how to get a data object whose key equals **15**.

    <!--JavaScript-->
    dataGridInstance.byKey(15).done(function(dataObject) {
            // process 'dataObject'
        }).fail(function(error) {
            // handle error
        });
<!--/fullDescription-->