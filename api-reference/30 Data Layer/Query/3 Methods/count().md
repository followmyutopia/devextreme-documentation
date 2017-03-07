<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Calculates count of items in current query.
<!--/d-->
<!--rd-->Promise of jQuery.Deferred. Resolves with count value or rejects with an Error object<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Returns the total count of items in the current [Query](/Documentation/ApiReference/Data_Layer/Query/).
<!--/shortDescription-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise of the jQuery.Deferred object resolved after the operation is completed.
<!--/returnDescription-->

<!--fullDescription-->
    <!--JavaScript-->
    var data = DevExpress.data.query(inputArray)
        .count()
        .done(function(result) {
            // 'result' holds the desired value
        });
<!--/fullDescription-->