===================================================================
===================================================================

<!--shortDescription-->
Starts updating the data source. Reloads data from the [XMLA](/Documentation/ApiReference/Data_Layer/XmlaStore/) [store](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/) only.
<!--/shortDescription-->

<!--returnType-->Promise<any><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after data is loaded. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
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