<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->function<!--/type-->
===========================================================================

<!--shortDescription-->
The user implementation of the [insert(values)](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#insertvalues) method.
<!--/shortDescription-->

<!--fullDescription-->
The method passed to this option should return either the [jQuery.Deferred](http://api.jquery.com/jQuery.Deferred) promise or the **jQuery.Deferred** compatible object.

You can resolve the returned jQuery.Deferred with any data. For example, the key of the inserted item.

    <!--JavaScript-->
    var store = new DevExpress.data.CustomStore({
        insert: function (values) {
            var deferred = $.Deferred();
            $.post("http://www.example.com/service/myEntity", values).done(function(data) {
                deferred.resolve(data.key);
            })
            return deferred.promise();
        }
    });

<!--/fullDescription-->
<!--typeFunctionParamName1-->values<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
An object representing the inserted item.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->Promise<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A Promise of the jQuery.Deferred object resolved after the item has been inserted.
<!--/typeFunctionReturnDescription-->