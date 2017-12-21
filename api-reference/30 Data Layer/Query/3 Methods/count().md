===================================================================
===================================================================

<!--shortDescription-->
Gets the total item count.
<!--/shortDescription-->

<!--returnType-->Promise<Number><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the operation is completed. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
    <!--JavaScript-->
    var data = DevExpress.data.query(inputArray)
        .count()
        .done(function(result) {
            // 'result' holds the desired value
        });
<!--/fullDescription-->