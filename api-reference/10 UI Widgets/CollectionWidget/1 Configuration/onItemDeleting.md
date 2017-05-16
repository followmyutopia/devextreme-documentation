<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\itemDeleting.md<!--/EventForAction-->
===========================================================================
<!--hidden--><!--/hidden-->
<!--default-->null<!--/default-->
<!--type-->function<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the **itemDeleting** event. Executed before an item is deleted from the data source.
<!--/shortDescription-->

<!--fullDescription-->
To cancel item deletion, assign *true* to the **cancel** field of the handler parameter. To perform an asynchronous action before deleting an item, assign a [jQuery.Promise](http://api.jquery.com/Types/#Promise) to the **cancel** field. The item will be deleted once the Deferred object of this Promise is resolved. The code below adds a confirmation dialog displayed before the item is deleted.

    <!--JavaScript-->
    var widgetOptions = {
        onItemDeleting: function(e) {
            var d = $.Deferred();
            DevExpress.ui.dialog.confirm("Do you really want to delete the item?")
                .done(function(value) { 
                    d.resolve(!value);
                })
                .fail(d.reject);
            e.cancel = d.promise();
        }
    }

Note that the **onItemDeleted** and **onItemDeleting** handlers are not executed if an item is deleted from the data source without using the widget's UI or API.

<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Provides access to the widget instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->jQuery<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->itemData<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The data of the to-be-deleted item.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->itemElement<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->jQuery<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The item's container.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->itemIndex<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->number | object<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The index of the to-be-deleted item.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->cancel<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->boolean | Promise<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
Allows you to cancel the item deletion.
<!--/typeFunctionParamDescription1_field7-->

<!--typeFunctionReturnType-->Promise<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A Promise of the jQuery Deferred object is resolved if the item deletion is confirmed and rejected if deletion is canceled.
<!--/typeFunctionReturnDescription-->
