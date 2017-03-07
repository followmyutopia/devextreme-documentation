<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Save a state to local or session storage<!--/d-->
===========================================================================
<!--default-->'localStorage'<!--/default-->
<!--acceptValues-->'localStorage' | 'sessionStorage' | 'custom'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the type of storage to be used for state storing.
<!--/shortDescription-->

<!--fullDescription-->
When state storing is enabled, **DataGrid** stores data about its state on the client side. The type of storage that will suit your needs best depends on the supposed lifetime of user-specified grid settings, such as grouping, sorting, column order, etc. If these settings should be destroyed after a browser session ends, use a session storage. If it is important to keep them for a longer time, choose a local storage.

If you want to define specific actions on saving and loading a state, use a custom type of storage. For this purpose, specify the [customSave](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/stateStoring/#customSave) and [customLoad](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/stateStoring/#customLoad) callback functions.
<!--/fullDescription-->