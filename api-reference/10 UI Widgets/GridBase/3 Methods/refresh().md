===================================================================
===================================================================

<!--shortDescription-->
Reloads data and repaints the widget.
<!--/shortDescription-->

<!--returnType-->Promise<void><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after data is loaded. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
The widget cannot track changes a third party makes in the data source. To update data in the widget in this case, call this method. [Data sources]({basewidgetpath}/Configuration/columns/lookup/#dataSource) of lookup columns are updated with the main data source.

[note] Calling the **refresh()** method ends the editing process. In *batch* [editing mode]({basewidgetpath}/Configuration/editing/#mode), changes are saved in a buffer before they are saved to the data source. In other modes, all unsaved changes are discarded. 

#####See Also#####
- [refresh(changesOnly)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#refreshchangesOnly)
#include common-link-callmethods
<!--/fullDescription-->