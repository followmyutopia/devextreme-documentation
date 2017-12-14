===========================================================================
<!--type-->function(gridState)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a callback function that performs specific actions on state saving.
<!--/shortDescription-->

<!--fullDescription-->
If you chose the *custom* state storing [type](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/stateStoring/#type), use the functions assigned to the **customSave** and **customLoad** options for handling state changes. The function assigned to the **customSave** option is called every time a grid state is changed. You can access the currently changed grid state using the function's first parameter. The state is represented by an [opaque data object](https://en.wikipedia.org/wiki/Opaque_data_type).

To specify a callback function that performs specific actions on state loading, use the [customLoad](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/stateStoring/#customLoad) option.
<!--/fullDescription-->
<!--typeFunctionParamName1-->gridState<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
A current grid state.
<!--/typeFunctionParamDescription1-->
