<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Selects specific grid records.
<!--/shortDescription-->

<!--paramName1-->keys<!--/paramName1-->
<!--paramType1-->array<!--/paramType1-->
<!--paramDescription1-->
The keys of the records to be selected.
<!--/paramDescription1-->

<!--paramName2-->preserve<!--/paramName2-->
<!--paramType2-->boolean<!--/paramType2-->
<!--paramDescription2-->
Specifies whether or not previously selected records must remain selected.
<!--/paramDescription2-->

<!--fullDescription-->
[note]To access a grid record by a key, a field providing key values must be specified in the **key** option of the underlying [Store](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores) of the [dataSource](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource). If no key was specified, the whole data object is considered the key, however, we recommend specifying the key to prevent selection from being duplicated.

By default, calling the **selectRows(keys, preserve)** method deselects all previously selected records. If you need these records to remain selected, call the same method with *true* as its second argument as the code snippet below demonstrates.

	<!--JavaScript-->dataGridInstance.selectRows([5, 10, 12], true);

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridselectionmultipleselection/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->