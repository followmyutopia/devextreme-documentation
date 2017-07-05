<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\rowUpdating.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the **rowUpdating** event. Executed before a row is updated in the data source.
<!--/shortDescription-->

<!--fullDescription-->
To cancel row updating, assign **true** to the **cancel** field of the handler parameter. To perform an asynchronous action before updating the row, assign a [jQuery.Promise](http://api.jquery.com/Types/#Promise) to the **cancel** field. The row will be updated once the Deferred object of this Promise is resolved.

[note] In batch [editing mode]({basewidgetpath}/Configuration/editing/#mode), if several rows are to be updated, this handler will be executed for each row individually.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The [widget's instance]({basewidgetpath}/Methods/#instance).
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
<!--typeFunctionParamName1_field4-->oldData<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The old data of the row.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->newData<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->object<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The updated data of the row.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->key<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->any<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The key of the row. If a field providing keys is not specified in the data source, the whole data object is considered the key.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->cancel<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->boolean|Promise<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
Allows you to cancel row updating.
<!--/typeFunctionParamDescription1_field7-->
