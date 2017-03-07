<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->function()<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a callback function that performs specific actions on state loading.
<!--/shortDescription-->

<!--fullDescription-->
If you chose the *custom* state storing [type](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/stateStoring/#type), use the functions assigned to the **customSave** and **customLoad** options for handling state changes. The function assigned to the **customLoad** option is called when a state is restored. This function should return an object representing a grid state. Normally, it is the object saved within the [customSave](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/stateStoring/#customSave) function.
<!--/fullDescription-->
<!--typeFunctionReturnType-->deferred object<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A grid state.
<!--/typeFunctionReturnDescription-->