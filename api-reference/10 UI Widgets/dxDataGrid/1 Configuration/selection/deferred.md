<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->false<!--/default-->
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Makes selection deferred.
<!--/shortDescription-->

<!--fullDescription-->
Consider making selection deferred if the widget needs to operate a large volume of data and the user is allowed to [select all rows at once](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#allowSelectAll). Unlike usual (or "instant") selection, in the case of deferred selection, the widget requests data only when you demand this using the API, for example, when the [getSelectedRowsData()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowsData) or [getSelectedRowKeys()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowKeys) method is called. This mode has certain specifics that determine the API you need to use. For more information, see the [Deferred Selection](/Documentation/Guide/Widgets/DataGrid/Features_for_Remote_Data/Deferred_Selection/) article.

[note]Deferred selection is unsupported when [selectAllMode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#selectAllMode) is *'page'*.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/DeferredSelection/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a> 
<!--/fullDescription-->