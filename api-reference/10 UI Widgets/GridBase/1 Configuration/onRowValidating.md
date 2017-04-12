<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\rowValidating.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the **rowValidating** event. Executed after cells in a row are validated against [validation rules]({basewidgetpath}/Configuration/columns/#validationRules).
<!--/shortDescription-->

<!--fullDescription-->
Use this handler to interfere before a message on the broken validation rules is displayed. For instance, you can perform additional checks in this handler and change the validation result by changing the **isValid** field of the handler parameter. Or, you can correct the error message using the **errorText** field of the same parameter.

[note] In batch [editing mode]({basewidgetpath}/Configuration/editing/#mode), if changes in several rows are committed simultaneously, this handler will be executed for each row.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->jQuery<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Only available if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->brokenRules<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->array<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
An array of broken rules. The structure of rule objects is described in the <a href="/Documentation/17_1/ApiReference/UI_Widgets/dxValidator/Validation_Rules/">Validation Rules</a> section.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->isValid<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->boolean<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
Indicates whether data in all row cells satisfies the validation rules.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->key<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->any<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The key of the row. If a field providing keys is not specified in the data source, the whole data object is considered the key.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->newData<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->object<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The data of the validated row after changes.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->oldData<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->object<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The data of the validated row before changes.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->errorText<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->string<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
An error message to be displayed.
<!--/typeFunctionParamDescription1_field9-->
