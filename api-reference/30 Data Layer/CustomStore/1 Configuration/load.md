<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->User implementation of load operation. Accepts a bag of 'load options' (object) which are: sort, filter, group, select, skip, take. Must return array or promise(array).<!--/d-->
===========================================================================
<!--type-->function<!--/type-->
<!--fp1d-->An object specifying data shaping options<!--/fp1d-->
<!--fp1_field1d-->Filter expression<!--/fp1_field1d-->
<!--fp1_field2d-->Sort expression<!--/fp1_field2d-->
<!--fp1_field3d-->Select expression<!--/fp1_field3d-->
<!--fp1_field4d-->Group expression<!--/fp1_field4d-->
<!--fp1_field5d-->The number of items to skip<!--/fp1_field5d-->
<!--fp1_field6d-->The number of items to take<!--/fp1_field6d-->
<!--fp1_field7d-->A bag for holding any user-defined parameters per request<!--/fp1_field7d-->
<!--fp1_field8d-->A flag means the load function implementation should resolve deferred with second 'extra' argument with 'totalCount' field<!--/fp1_field8d-->
<!--frd-->A Promise/A implementation resolved after data has been loaded.<!--/frd-->
===========================================================================

<!--shortDescription-->
The user implementation of the [load(options)](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#loadoptions) method.
<!--/shortDescription-->

<!--fullDescription-->
The function passed to this option should return a promise. More often, this is either a [jQuery.Deferred](http://api.jquery.com/jQuery.Deferred) promise or a **jQuery.Deferred** compatible object.

[note]In **AngularJS approach**, APIs for deferred/promises are exposed by the [$q service](https://docs.angularjs.org/api/ng/service/$q).

If the **loadOptions.requireTotalCount** field is *true*, the function should resolve the jQuery.Deferred with a second argument containing the **totalCount** field as shown in the following code snippet.

    <!--JavaScript-->
    var store = new DevExpress.data.CustomStore({
        load: function (loadOptions) {
            var deferred = $.Deferred();
            $.get('url/to/the/resource', loadOptions).done(function (response) {
                if (loadOptions.requireTotalCount === true)
                    deferred.resolve(response.data, { totalCount: response.totalCount });
                else
                    deferred.resolve(response.data)
            });
            return deferred.promise();
        }
    });

In **AngularJS approach**, if the **loadOptions.requireTotalCount** field is *true*, the promise must be resolved with an object of two fields: **data** and **totalCount**. In the following code snippet, the `.then()` method creates a promise internally and resolves it with the return from the callback function.

    <!--JavaScript-->
    var store = new DevExpress.data.CustomStore({
        load: function (loadOptions) {
            return $http.get('url/to/the/resource', loadOptions).then(function (response) {
                        if (loadOptions.requireTotalCount === true)
                            return { data: response.data, totalCount: response.totalCount };
                        else
                            return response.data;
                    })
        }
    });

<!--/fullDescription-->
<!--typeFunctionParamName1-->options<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
An object specifying data shaping options.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->filter<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Filter expression.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->sort<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->object<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
Sort expression.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->select<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Select expression.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->group<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
Group expression.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->skip<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->number<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The index of the first loaded item.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->take<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->number<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The number of loaded items.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->userData<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->object<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
A bag for holding user-defined parameters.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->requireTotalCount<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->boolean<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
Specifies whether the function passed to this option should resolve the jQuery.Deferred with the second argument containing the <b>totalCount</b> field.
<!--/typeFunctionParamDescription1_field8-->

<!--typeFunctionReturnType-->Promise<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A promise of a deferred object resolved after data is loaded.
<!--/typeFunctionReturnDescription-->