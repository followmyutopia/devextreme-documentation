<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Gets the keys of the currently selected rows. 
<!--/shortDescription-->

<!--returnType-->array | Promise<!--/returnType-->
<!--returnDescription-->
The keys of the currently selected rows or a Promise of the jQuery.Deferred object.
<!--/returnDescription-->

<!--fullDescription-->
If a field providing keys is not specified in the [data source]({basewidgetpath}/Configuration/#dataSource), the whole data object is considered the key. In this case, this method returns data objects, that is, operates exactly like the [getSelectedRowsData()]({basewidgetpath}/Methods/#getSelectedRowsData) method.

Note that when selection is [deferred]({basewidgetpath}/Configuration/selection/#deferred), the method returns a Promise of the jQuery.Deferred object that should be resolved with an array of keys.
<!--/fullDescription-->