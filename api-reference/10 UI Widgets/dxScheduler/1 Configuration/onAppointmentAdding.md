<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\appointmentAdding.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the **AppointmentAdding** event.
<!--/shortDescription-->

<!--fullDescription-->
Assign a function to perform a custom action before an appointment is added to the widget's data source.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxScheduler/Methods/#instance"></a> instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->jQuery<!--/typeFunctionParamType1_field2-->
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
The appointment object to be added to the data source.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->cancel<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->Boolean|Promise<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
A flag allowing you to prevent the appointment from being added. This field accepts a Boolean value or Promise. If you pass Promise to this field, appointment adding is continued or canceled once Promise has been resolved.
<!--/typeFunctionParamDescription1_field5-->
