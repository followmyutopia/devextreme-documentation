===========================================================================
<!--type-->function(key)<!--/type-->
===========================================================================

<!--shortDescription-->
The user implementation of the [byKey(key, extraOptions)](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#byKeykey_extraOptions) method.
<!--/shortDescription-->

<!--fullDescription-->
The method passed to this option should return a Promise.

    <!--JavaScript-->
    var myStore = new DevExpress.data.CustomStore({
        byKey: function(key) {
            var d = new $.Deferred();
            $.get('http://data.example.com/products?id=' + key)
                .done(function (result) {
                    d.resolve(result[i]);
                });
            return d.promise();
        },
        . . .
    });
<!--/fullDescription-->
<!--typeFunctionParamName1-->key<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object|string|number<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The required key value.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->Promise<any><!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A Promise that is resolved after the item is loaded. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/typeFunctionReturnDescription-->