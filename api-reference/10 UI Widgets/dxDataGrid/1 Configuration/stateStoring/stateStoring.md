<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Options of state storing<!--/d-->
===========================================================================
<!--type-->object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies options of state storing.
<!--/shortDescription-->

<!--fullDescription-->
At runtime, end-users may adjust user interface settings to their needs. By default, these settings disappear when you dispose of the grid; on next loading, the grid appears in its original configuration. If user settings need to be saved and then restored, enable client-side state storing for the grid by setting the **stateStoring** | [enabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/stateStoring/#enabled) option to *true*. The grid state will be saved under a specified [storage key](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/stateStoring/#storageKey). The saving operation is conducted after a certain amount of time has passed since the last change of the state. To specify the amount of time in milliseconds, use the [savingTimeout](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/stateStoring/#savingTimeout) option.

**DataGrid** supports various types of state storing. The type of storage that will suit your needs best depends on the supposed lifetime of user-specified grid settings. For more information about state storing types, refer to the [type](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/stateStoring/#type) option description.

**DataGrid** provides the [state](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#state) method to operate the grid state in code. Call this method without arguments to obtain the grid state. When you need to set the grid state, call this method with the state object as its argument. You can also return the widget to its default state by calling the [state](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#state) method with the empty array or *null* argument.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridstatepersistencestatepersistence/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->