===================================================================
===================================================================

<!--shortDescription-->
Obtains the total count of items that will be returned by the **load()** function.
<!--/shortDescription-->

<!--paramName1-->obj<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
An object holding filtering and grouping options.
<!--/paramDescription1-->
<!--paramName1_field1-->filter<!--/paramName1_field1-->
<!--paramType1_field1-->Object<!--/paramType1_field1-->
<!--paramDescription1_field1-->
Data filtering conditions.
<!--/paramDescription1_field1-->
<!--paramName1_field2-->group<!--/paramName1_field2-->
<!--paramType1_field2-->Object<!--/paramType1_field2-->
<!--paramDescription1_field2-->
Data grouping options.
<!--/paramDescription1_field2-->

<!--returnType-->Promise<Number><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the total item count is obtained. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
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