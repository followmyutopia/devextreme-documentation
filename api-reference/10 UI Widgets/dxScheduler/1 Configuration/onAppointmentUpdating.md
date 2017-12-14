<!--EventForAction-->..\4 Events\appointmentUpdating.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the **AppointmentUpdating** event.
<!--/shortDescription-->

<!--fullDescription-->
Assign a function to perform a custom action before an appointment is updated in the widget's data source.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->DOMComponent<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if Knockout is used.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->oldData<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The data of the appointment to be updated.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->newData<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->Object<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The appointment with new data.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->cancel<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->Boolean|Promise<Boolean><!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
Allows you to prevent an appointment update.    
If you pass a Promise to this field, the appointment updating is continued or canceled once the Promise has been resolved.
<!--/typeFunctionParamDescription1_field6-->
