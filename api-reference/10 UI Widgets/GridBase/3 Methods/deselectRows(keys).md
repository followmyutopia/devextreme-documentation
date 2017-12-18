===================================================================
===================================================================

<!--shortDescription-->
Cancels the selection of rows with specific keys.
<!--/shortDescription-->

<!--paramName1-->keys<!--/paramName1-->
<!--paramType1-->Array<any><!--/paramType1-->
<!--paramDescription1-->
The row keys.
<!--/paramDescription1-->

<!--returnType-->Promise<any><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after selection is cleared. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
To access a row by its key, you should specify the field that provides keys in the [data source]({basewidgetpath}/Configuration/#dataSource). If no key was specified, the whole data object is considered the key.

#####See Also#####
#include common-link-callmethods
- [deselectAll()]({basewidgetpath}/Methods/#deselectAll)
<!--/fullDescription-->