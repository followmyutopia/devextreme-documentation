===================================================================
===================================================================

<!--shortDescription-->
Gets the total count of items the [load()]({basewidgetpath}/Methods/#load) function returns.
<!--/shortDescription-->

<!--paramName1-->obj<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
Filtering and grouping options.
<!--/paramDescription1-->
<!--paramName1_field1-->filter<!--/paramName1_field1-->
<!--paramType1_field1-->Object<!--/paramType1_field1-->
<!--paramDescription1_field1-->
A filtering expression; described in the [Filtering](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering) section.
<!--/paramDescription1_field1-->
<!--paramName1_field2-->group<!--/paramName1_field2-->
<!--paramType1_field2-->Object<!--/paramType1_field2-->
<!--paramDescription1_field2-->
A grouping expression; described in the [Grouping](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Grouping) section.
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

<!--/fullDescription-->