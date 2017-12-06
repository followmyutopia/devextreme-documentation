===================================================================
===================================================================

<!--shortDescription-->
Starts loading data.
<!--/shortDescription-->

<!--paramName1-->options<!--/paramName1-->
<!--paramType1-->LoadOptions<!--/paramType1-->
<!--paramDescription1-->
An object containing data processing settings.
<!--/paramDescription1-->

<!--returnType-->Promise<any><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after data is loaded. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
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