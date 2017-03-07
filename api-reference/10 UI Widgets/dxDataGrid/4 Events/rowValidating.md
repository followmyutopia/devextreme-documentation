<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Function is called when a validate cell or row is executed<!--/d-->
===========================================================================
<!--type-->EVENT<!--/type-->
<!--fp1d-->Event argument.<!--/fp1d-->
<!--fp1_field1d-->Returns the component instance<!--/fp1_field1d-->
<!--fp1_field2d-->Returns an html representing the component<!--/fp1_field2d-->
<!--fp1_field3d-->Returns the data that is available for binding against the element<!--/fp1_field3d-->
<!--fp1_field4d-->An array of broken rules<!--/fp1_field4d-->
<!--fp1_field5d-->Indicates whether all the rules checked for the specified group are satisfied.<!--/fp1_field5d-->
<!--fp1_field6d-->The key of the row. If a field providing keys is not specified in a data source, the whole data object is considered the key.<!--/fp1_field6d-->
<!--fp1_field7d-->Data of the row with user changes<!--/fp1_field7d-->
<!--fp1_field8d-->Data of the row before user changes<!--/fp1_field8d-->
<!--fp1_field9d-->Text for the error row displayed for this row<!--/fp1_field9d-->
===========================================================================

<!--shortDescription-->
Fires when a cell(s) in a row is validated.
<!--/shortDescription-->

<!--fullDescription-->
Instead, you can use the [onRowValidating](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowValidating) option to handle the event.

When data in a cell or in several cells is changed, the [validation rules](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#validationRules) specified for these cells are checked. Before the validation result (messages on the broken rules) is displayed in the grid, you can interfere by handling the **rowValidating** event. For instance, you can provide a common text for all the cells where validation rules are not satisfied. This text will be displayed under the validated row in a specially added *error row*. To provide a common text for a row, specify the **errorText** field of the event handler's parameter. In addition, you can change the validation result before it is displayed by performing an additional check and setting the result to the **isValid** field of the event handler's parameter.

In batch mode, when several row updates are committed simultaneously, the **rowValidating** error fires for each row that has changes.

#####See Also#####
- [Handle Events - jQuery](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events)
- [Handle Events - AngularJS](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Handle_Events)
- [Handle Events - Knockout](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Handle_Events)
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Provides function parameters.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.
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
<!--typeFunctionParamName1_field4-->brokenRules<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->array<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
An array of broken rules. The structure of rule objects is described in the <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxValidator/Validation_Rules/">Validation Rules</a> section.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->isValid<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->boolean<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
Indicates whether all the rules checked for the cells in the current row are satisfied.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->key<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->any<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The key of the row. If a field providing keys is not specified in a data source, the whole data object is considered the key.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->newData<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->object<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
Data of the validated row after user changes.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->oldData<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->object<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
Data of the validated row as it was before user changes.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->errorText<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->string<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
The error message to be displayed in the grid's error row.
<!--/typeFunctionParamDescription1_field9-->
