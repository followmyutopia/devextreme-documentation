<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->function(key, values)<!--/type-->
===========================================================================

<!--shortDescription-->
The user implementation of the [update(key, values)](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#updatekey_values) method.
<!--/shortDescription-->

<!--fullDescription-->
The method passed to this option should return either the [jQuery.Deferred](http://api.jquery.com/jQuery.Deferred) promise or the **jQuery.Deferred** compatible object.

You can resolve the returned jQuery.Deferred with any data. For example, the key of the updated item.

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
<!--typeFunctionParamType1-->object|string|number<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The key value of the item being updated.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->values<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->object<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The object containing new values for the specified item.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->Promise<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A Promise of the jQuery.Deferred object resolved after the item has been updated.
<!--/typeFunctionReturnDescription-->