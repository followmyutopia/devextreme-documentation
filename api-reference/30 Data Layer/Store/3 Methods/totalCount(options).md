<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
This method behaves as load(), but instead of array returns count of data items. Async function.
<!--/d-->
<!--p1d-->An object specifying data shaping options. Optional argument.<!--/p1d-->
<!--p1_field1d-->Filter expression<!--/p1_field1d-->
<!--p1_field2d-->Group expression<!--/p1_field2d-->
<!--rd-->Promise of jQuery.Deferred which resolves with (number) or rejects with (Error)<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Obtains the total count of items that will be returned by the **load()** function.
<!--/shortDescription-->

<!--paramName1-->obj<!--/paramName1-->
<!--paramType1-->object<!--/paramType1-->
<!--paramDescription1-->
An object holding filtering and grouping options.
<!--/paramDescription1-->
<!--paramName1_field1-->filter<!--/paramName1_field1-->
<!--paramType1_field1-->object<!--/paramType1_field1-->
<!--paramDescription1_field1-->
Data filtering conditions.
<!--/paramDescription1_field1-->
<!--paramName1_field2-->group<!--/paramName1_field2-->
<!--paramType1_field2-->object<!--/paramType1_field2-->
<!--paramDescription1_field2-->
Data grouping options.
<!--/paramDescription1_field2-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise of the jQuery.Deferred object resolved after the total item count is obtained.
<!--/returnDescription-->

<!--fullDescription-->
    <!--JavaScript-->
    myStore.totalCount(options)
        .done(function(result) {
            // 'result' contains the item count.
        })
        .fail(function(error) {
            // handle error
        });

For more information on filtering and grouping options, refer to the [Filtering](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering) and [Grouping](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Grouping) sections of the [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data) article.
<!--/fullDescription-->