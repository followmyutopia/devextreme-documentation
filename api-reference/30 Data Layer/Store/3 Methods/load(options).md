<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Starts loading data.
<!--/shortDescription-->

<!--paramName1-->obj<!--/paramName1-->
<!--paramType1-->object<!--/paramType1-->
<!--paramDescription1-->
The object specifying data shaping options.
<!--/paramDescription1-->
<!--paramName1_field1-->filter<!--/paramName1_field1-->
<!--paramType1_field1-->object<!--/paramType1_field1-->
<!--paramDescription1_field1-->
Data filtering conditions.
<!--/paramDescription1_field1-->
<!--paramName1_field2-->sort<!--/paramName1_field2-->
<!--paramType1_field2-->object<!--/paramType1_field2-->
<!--paramDescription1_field2-->
Data sorting options.
<!--/paramDescription1_field2-->
<!--paramName1_field3-->select<!--/paramName1_field3-->
<!--paramType1_field3-->object<!--/paramType1_field3-->
<!--paramDescription1_field3-->
Data selection options.
<!--/paramDescription1_field3-->
<!--paramName1_field4-->group<!--/paramName1_field4-->
<!--paramType1_field4-->object<!--/paramType1_field4-->
<!--paramDescription1_field4-->
Data grouping options.
<!--/paramDescription1_field4-->
<!--paramName1_field5-->skip<!--/paramName1_field5-->
<!--paramType1_field5-->number<!--/paramType1_field5-->
<!--paramDescription1_field5-->
The count of items to be excluded from loading.
<!--/paramDescription1_field5-->
<!--paramName1_field6-->take<!--/paramName1_field6-->
<!--paramType1_field6-->number<!--/paramType1_field6-->
<!--paramDescription1_field6-->
The count of items to be loaded.
<!--/paramDescription1_field6-->
<!--paramName1_field7-->userData<!--/paramName1_field7-->
<!--paramType1_field7-->object<!--/paramType1_field7-->
<!--paramDescription1_field7-->
A bag holding user-defined parameters.
<!--/paramDescription1_field7-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise of the jQuery.Deferred object resolved after data has been loaded.
<!--/returnDescription-->

<!--fullDescription-->
    <!--JavaScript-->
    store.load(options)
        .done(function(result) {
            // 'result' contains the loaded data
        })
        .fail(function(error) {
            // handle error
        })

For more information on data shaping options, refer to the [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data) topic.
<!--/fullDescription-->