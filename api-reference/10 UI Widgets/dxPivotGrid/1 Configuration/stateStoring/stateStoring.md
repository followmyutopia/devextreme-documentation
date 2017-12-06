===========================================================================
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
A configuration object specifying options related to state storing.
<!--/shortDescription-->

<!--fullDescription-->
At runtime, end-users may adjust pivot grid settings to their needs. By default, these settings disappear when the pivot grid disposes (for example, on page reload) and the pivot grid appears in its original configuration. If user settings need to be saved and then restored, enable client-side state storing for the grid by setting the **stateStoring**.[enabled](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/stateStoring/#enabled) option to **true**. The pivot grid state will be saved under a specified [storage key](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/stateStoring/#storageKey). The saving operation is conducted after a certain amount of time has passed since the last change of the state. To specify the amount of time in milliseconds, use the [savingTimeout](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/stateStoring/#savingTimeout) option.

**PivotGrid** supports various types of state storing. The type of storage that will suit your needs best depends on the supposed lifetime of user-specified pivot grid settings. For more information about state storing types, refer to the [type](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/stateStoring/#type) option description.

The PivotGridDataSource provides the [state](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#state) method. Use it to get or change the pivot grid state at runtime. Call this method without arguments to obtain the pivot grid state. When you need to set the pivot grid state, call this method with the state object as its argument. You can also return the widget to its default state by calling the [state](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Methods/#state) method with the empty object or **null** argument.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/data_grid-pivot_grid-state_persistence" class="button orange small fix-width-155" style="margin-right:20px;" target="_blank">View Demo</a>
<!--/fullDescription-->