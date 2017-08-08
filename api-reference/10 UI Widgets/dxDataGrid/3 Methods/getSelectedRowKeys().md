<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Gets the currently selected rows' keys. 
<!--/shortDescription-->

<!--returnType-->array | Promise<!--/returnType-->
<!--returnDescription-->
The currently selected rows' keys or a Promise of the jQuery.Deferred object.
<!--/returnDescription-->

<!--fullDescription-->
The whole data object is considered a key if the field providing keys is not specified in the [data source](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource). In this case, this method returns data objects, that is, operates like the [getSelectedRowsData()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowsData) method.

Note that when selection is [deferred](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#deferred), the method returns a Promise of the jQuery.Deferred object that should be resolved with an array of keys.

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/)

<!--/fullDescription-->