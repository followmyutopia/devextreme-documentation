<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Custom save state to storage<!--/d-->
===========================================================================
<!--type-->function(state)<!--/type-->
<!--fp1d-->The current pivot grid state<!--/fp1d-->
===========================================================================

<!--shortDescription-->
Specifies a callback function that performs specific actions on state saving.
<!--/shortDescription-->

<!--fullDescription-->
If you chose the *custom* state storing [type](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/stateStoring/#type), use the functions assigned to the **customSave** and [customLoad](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/stateStoring/#customLoad) options for handling state changes. The function assigned to the **customSave** option is called every time a pivot grid state is changed. You can access the currently changed pivot grid state using the function's first parameter. The state is represented by an [opaque data object](https://en.wikipedia.org/wiki/Opaque_data_type).
<!--/fullDescription-->
<!--typeFunctionParamName1-->state<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The current pivot grid state.
<!--/typeFunctionParamDescription1-->
