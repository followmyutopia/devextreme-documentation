<!--id-->dxPivotGrid.Options.stateStoring.type<!--/id-->
===========================================================================
<!--default-->'localStorage'<!--/default-->
<!--acceptValues-->'custom' | 'localStorage' | 'sessionStorage'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the type of storage to be used for state storing.
<!--/shortDescription-->

<!--fullDescription-->
When state storing is enabled, **PivotGrid** stores data about its state on the client side. The type of storage that will suit your needs best depends on the supposed lifetime of user-specified pivot grid settings, such as fiends configuration, sorting, filters, expanded headers, etc. If these settings should be destroyed after a browser session ends, use a *session* storage. If it is important to keep them for a longer time, choose a *local* storage.

If you want to define specific actions on saving and loading a state, use a custom type of storage. For this purpose, specify the [customSave](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/stateStoring/#customSave) and [customLoad](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/stateStoring/#customLoad) callback functions.
<!--/fullDescription-->