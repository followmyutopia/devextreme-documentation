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
Starts updating the data source. Reloads data from the [XMLA](/Documentation/ApiReference/Data_Layer/XmlaStore/) [store](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/) only.
<!--/shortDescription-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise of the jQuery.Deferred object, which is resolved when data has been loaded.
<!--/returnDescription-->

<!--fullDescription-->
Use this method to update the pivot grid after making changes in the data source, for example after editing a field using the [field(id, options)](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#fieldid_options) method.

Use the following code to access loaded data.

    <!--JavaScript-->    dataSource.load()
        .done(function(result) {
            // 'result' contains the loaded data
        })
        .fail(function(error) {
            // handle error
        });

[note] If you need to fully reload data from a [store](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/) that differs from XMLA, use the [reload()](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#reload) method.
<!--/fullDescription-->