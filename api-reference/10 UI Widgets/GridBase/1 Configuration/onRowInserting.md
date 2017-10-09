<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\rowInserting.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the **rowInserting** event. Executed before a new row is inserted into the data source.
<!--/shortDescription-->

<!--fullDescription-->
To cancel row insertion, assign **true** to the **cancel** field of the handler parameter. To perform an asynchronous action before inserting a row, assign a [jQuery.Promise](http://api.jquery.com/Types/#Promise) to the **cancel** field. The row will be inserted once the Deferred object of this Promise is resolved.

[note] In batch [editing mode]({basewidgetpath}/Configuration/editing/#mode), if several rows are to be inserted, this handler will be executed for each row individually.
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
<!--typeFunctionParamType1_field2-->Element<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->data<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The data of the to-be-inserted row.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->cancel<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->boolean|Promise<void><!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
Allows you to cancel row insertion.
<!--/typeFunctionParamDescription1_field5-->
