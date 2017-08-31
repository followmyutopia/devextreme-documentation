<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->function(key)<!--/type-->
===========================================================================

<!--shortDescription-->
The user implementation of the [byKey(key, extraOptions)](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#byKeykey_extraOptions) method.
<!--/shortDescription-->

<!--fullDescription-->
The method passed to this option should return either the [jQuery.Deferred](http://api.jquery.com/jQuery.Deferred) promise or the **jQuery.Deferred** compatible object.

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

<!--typeFunctionReturnType-->Promise<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A Promise of the jQuery.Deferred object resolved after the item has been loaded.
<!--/typeFunctionReturnDescription-->