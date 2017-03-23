<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Refreshes grid data.
<!--/shortDescription-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise of the jQuery.Deferred object resolved after grid data has been refreshed.
<!--/returnDescription-->

<!--fullDescription-->
When you use a data source that is changing dynamically, the **DataGrid** widget cannot automatically track changes that might be made in the source by a third party. In this case, to update data in the widget, call its **refresh()** method. Along with the main data source, a call of this method refreshes [data sources]({basewidgetpath}/Configuration/columns/lookup/#dataSource) of lookup columns if there are any in the grid.

[note] Calling the **refresh()** method concludes the editing process. In the *row* [edit mode]({basewidgetpath}/Configuration/editing/#mode), all changes made in a row (if any) vanish. In the *batch* edit mode, changes are saved in a buffer waiting to be actually saved in the data source.
<!--/fullDescription-->