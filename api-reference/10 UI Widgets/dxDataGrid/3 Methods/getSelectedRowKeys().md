<!--id-->dxDataGrid.getSelectedRowKeys()<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Gets the currently selected rows' keys. 
<!--/shortDescription-->

<!--returnType-->Array<any>|Promise<any><!--/returnType-->
<!--returnDescription-->
The currently selected rows' keys or a Promise that is resolved with an array of keys.
<!--/returnDescription-->

<!--fullDescription-->
The whole data object is considered a key if the field providing keys is not specified in the [data source](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource). In this case, this method returns data objects, that is, operates like the [getSelectedRowsData()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowsData) method.

Note that when selection is [deferred](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#deferred), the method returns a Promise (a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery) that should be resolved with an array of keys.

#####See Also#####
#include common-link-callmethods

<!--/fullDescription-->