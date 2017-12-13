===================================================================
===================================================================

<!--shortDescription-->
Reloads data in the widget.
<!--/shortDescription-->

<!--returnType-->Promise<void><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after data is loaded. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
The widget cannot track changes made in the data source by a third party. To bring data in the widget up to date in this case, call this method. [Data sources]({basewidgetpath}/Configuration/columns/lookup/#dataSource) of lookup columns will be updated along with the main data source.

[note] Calling the **refresh()** method ends the editing process. In *batch* [editing mode]({basewidgetpath}/Configuration/editing/#mode), changes are saved in a buffer waiting to be saved in the data source. In other modes, all unsaved changes vanish.

#####See Also#####
#include common-link-callmethods
<!--/fullDescription-->