===========================================================================
<!--type-->function(key, values)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom implementation of the [update(key, values)](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#updatekey_values) method.
<!--/shortDescription-->

<!--fullDescription-->
The method passed to this option should return a Promise.

You can resolve the returned Promise with any data. For example, the key of the updated item.

    <!--JavaScript-->
    var store = new DevExpress.data.CustomStore({
        update: function (key, values) {
            var deferred = $.Deferred();
            $.ajax({
                url: SERVICE_URL + "/" + encodeURIComponent(key),
                method: "PUT",
                data: values
            }).done(function(){
                deferred.resolve(key);
            });
            return deferred.promise();
        }
    });

<!--/fullDescription-->
<!--typeFunctionParamName1-->key<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object|String|Number<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The key of the item to be updated.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->values<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->Object<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
Item fields with their new values.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->Promise<any><!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A Promise that is resolved after the item is updated. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/typeFunctionReturnDescription-->