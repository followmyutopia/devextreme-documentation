<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Gets the data objects of the currently selected grid records. 
<!--/shortDescription-->

<!--returnType-->array | Promise<!--/returnType-->
<!--returnDescription-->
The array data objects of the currently selected records or a Promise of the jQuery.Deferred object.
<!--/returnDescription-->

<!--fullDescription-->
Note that when selection is [deferred](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#deferred), the method returns a Promise of the jQuery.Deferred object that should be resolved with an array of data objects.

To get only the keys of selected grid records, call the [getSelectedRowKeys()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowKeys) method.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgrideditingcell/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [Deferred Selection](/Documentation/Guide/Widgets/DataGrid/Features_for_Remote_Data/Deferred_Selection/)
<!--/fullDescription-->