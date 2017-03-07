<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Initiates data loading. Async function.
<!--/d-->
<!--rd-->A Promise of jQuery Deferred object which is resolved when load in complete and rejected if load fails<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Starts reloading data from any [store](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/) and updating the data source.
<!--/shortDescription-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise of the jQuery.Deferred object, which is resolved when data has been loaded.
<!--/returnDescription-->

<!--fullDescription-->
Use this method to update the pivot grid if you expect changes in data.

Use the following code to access loaded data.

    <!--JavaScript-->    dataSource.reload()
        .done(function(result) {
            // 'result' contains the loaded data
        })
        .fail(function(error) {
            // handle error
        });
<!--/fullDescription-->