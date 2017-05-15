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
A handler for the [itemDeleting]({basewidgetpath}/Events/#itemDeleting) event.
<!--/shortDescription-->

<!--fullDescription-->
You can use this option to add a confirmation dialog displayed when a widget item is deleted.

    <!--JavaScript-->
    var widgetOptions = {
        onItemDeleting: function(e) {
            return DevExpress.ui.dialog.confirm("Do you really want to delete the item?");
        })
    }

Assign a function to perform a custom action before a collection item is deleted.

Note that the **itemDeleting** event is raised only if an item is being deleted using the appropriate method of the widget or end-user interaction. If you delete an item from an observable array passed to the **dataSource** or **items** option, the widget entirely reloads the items array without raising the **itemDeleted** and **itemDeleting** events.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Provides function parameters.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Provides access to the widget instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->jQuery<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
An HTML element of the widget.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->itemData<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The data that is bound to the item to be removed.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->itemElement<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->jQuery<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
An HTML element of the item.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->itemIndex<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->number | object<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
Specifies the index of the item being deleted.
<!--/typeFunctionParamDescription1_field6-->

<!--typeFunctionReturnType-->Promise<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A Promise of the jQuery Deferred object resolved if the item deletion is confirmed and rejected if deletion is canceled.
<!--/typeFunctionReturnDescription-->