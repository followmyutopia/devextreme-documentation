<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->An action performed when the component option is changed.<!--/d-->
<!--EventForAction-->..\4 Events\optionChanged.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function<!--/type-->
<!--fp1d-->Provides function parameters<!--/fp1d-->
<!--fp1_field1d-->Returns the component instance<!--/fp1_field1d-->
<!--fp1_field4d-->Returns root name of the option whose value is changed e.g. for 'optionName.suboptionName' it contains 'optionName'<!--/fp1_field4d-->
<!--fp1_field5d-->Returns full name of option whose value is changed e.g. for 'optionName.suboptionName' it contains 'optionName.suboptionName'<!--/fp1_field5d-->
<!--fp1_field6d-->Returns option value<!--/fp1_field6d-->
===========================================================================

<!--shortDescription-->
A handler for the [optionChanged]({basewidgetpath}/Events/#optionChanged) event.
<!--/shortDescription-->

<!--fullDescription-->
Assign a function to perform a custom action after an option of the component is changed.
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
<!--typeFunctionParamName1_field4-->name<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->string<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
Specifies the name of the option whose value is changed.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->fullName<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->string<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
Specifies a full name of the option whose value is changed. The full name is formed by concatenating the names of the options that are presented in the hierarchy of the given option. The names are delimited by commas.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->value<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->any<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
Specifies a new value for the option.
<!--/typeFunctionParamDescription1_field6-->
