<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\appointmentDeleting.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the **AppointmentDeleting** event.
<!--/shortDescription-->

<!--fullDescription-->
Assign a function to perform a custom action before an appointment is deleted from the widget's data source.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget [instance](/Documentation/ApiReference/UI_Widgets/dxScheduler/Methods/#instance).
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Data that is available for binding against the element. Available only in the Knockout approach.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->appointmentData<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The appointment object to be deleted from the data source.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->cancel<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->Boolean|Promise<Boolean><!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
A flag that allows you to prevent an appointment from being deleted. This field accepts a Boolean value or Promise. If you pass Promise to this field, appointment deleting is continued or canceled once Promise has been resolved.
<!--/typeFunctionParamDescription1_field5-->
