<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Selects rows by keys.
<!--/shortDescription-->

<!--paramName1-->keys<!--/paramName1-->
<!--paramType1-->array<!--/paramType1-->
<!--paramDescription1-->
The keys of the rows to be selected.
<!--/paramDescription1-->

<!--paramName2-->preserve<!--/paramName2-->
<!--paramType2-->boolean<!--/paramType2-->
<!--paramDescription2-->
Specifies whether previously selected rows should stay selected.
<!--/paramDescription2-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise of the jQuery.Deferred object resolved after the rows are selected.
<!--/returnDescription-->

<!--fullDescription-->
By default, this method call clears selection of previously selected rows. To keep these rows selected, call this method with *true* as the second argument.

    <!--JavaScript-->widgetInstance.selectRows([5, 10, 12], true);

To access a row by its key, specify the field that provides keys. For this, use the [key](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key) option of the [Store](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores) that underlies the [dataSource]({basewidgetpath}/Configuration/#dataSource). If no key was specified, the whole data object is considered the key. However, we recommend specifying the **key** option to prevent selection from being duplicated.

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/)
- [selectRowsByIndexes(indexes)]({basewidgetpath}/Methods/#selectRowsByIndexesindexes)
<!--/fullDescription-->