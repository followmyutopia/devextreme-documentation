<!--id-->dxDataGrid.getSelectedRowKeys()<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Gets the currently selected rows' keys. 
<!--/shortDescription-->

<!--returnType-->Array<any>|Promise<any><!--/returnType-->
<!--returnDescription-->
Keys of currently selected rows or a Promise that is resolved with an array of keys. The keys are stored in the order the user selects rows.
<!--/returnDescription-->

<!--fullDescription-->
The whole data object is considered a key if the field providing keys is not specified in the [data source](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource). In this case, this method returns data objects, that is, operates like the [getSelectedRowsData()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowsData) method.

Note that when selection is [deferred](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#deferred), the method returns a Promise (a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery) that should be resolved with an array of keys.

#####See Also#####
#include common-link-callmethods

<!--/fullDescription-->