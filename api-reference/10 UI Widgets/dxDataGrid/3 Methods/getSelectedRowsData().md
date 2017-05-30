<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Gets data objects of currently selected rows. 
<!--/shortDescription-->

<!--returnType-->array | Promise<!--/returnType-->
<!--returnDescription-->
Data objects of currently selected rows or a Promise of the jQuery.Deferred object.
<!--/returnDescription-->

<!--fullDescription-->
When selection is [deferred](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#deferred), the method returns a Promise of the jQuery.Deferred object that should be resolved with an array of objects.

[note][Calculated values](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue) cannot be obtained because this method gets data objects directly from the data source.

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/)
- [cellValue(rowIndex, dataField)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#cellValuerowIndex_dataField)
- [cellValue(rowIndex, visibleColumnIndex)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#cellValuerowIndex_visibleColumnIndex)
- [getSelectedRowKeys()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowKeys)
<!--/fullDescription-->