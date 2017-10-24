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

<!--paramName1-->options<!--/paramName1-->
<!--paramType1-->LoadOptions<!--/paramType1-->
<!--paramDescription1-->
The object specifying data shaping options.
<!--/paramDescription1-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after data is loaded. It is a [jQuery.Promise](http://api.jquery.com/Types/#Promise) if the [useJQuery](/Documentation/ApiReference/Common/Object_Structures/globalConfig/#useJQuery) flag is enabled and a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) otherwise.
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