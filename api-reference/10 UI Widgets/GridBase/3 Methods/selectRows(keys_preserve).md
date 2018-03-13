===================================================================
===================================================================

<!--shortDescription-->
Selects rows with specific keys.
<!--/shortDescription-->

<!--paramName1-->keys<!--/paramName1-->
<!--paramType1-->Array<any><!--/paramType1-->
<!--paramDescription1-->
The row keys.
<!--/paramDescription1-->

<!--paramName2-->preserve<!--/paramName2-->
<!--paramType2-->Boolean<!--/paramType2-->
<!--paramDescription2-->
Specifies whether previously selected rows should stay selected.
<!--/paramDescription2-->

<!--returnType-->Promise<any><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the rows are selected. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
By default, this method call clears selection of previously selected rows. To keep these rows selected, call this method with **true** as the second argument.

    <!--JavaScript-->widgetInstance.selectRows([5, 10, 12], true);

You should specify the field that provides keys to access a row using its key. For this, use the [key](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key) option of the [Store](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores) that underlies the [dataSource]({basewidgetpath}/Configuration/#dataSource). The whole data object is considered the key if no key field is specified. However, we recommend specifying the **key** option to prevent duplicating the selection.

#####See Also#####
#include common-link-callmethods
- [selectRowsByIndexes(indexes)]({basewidgetpath}/Methods/#selectRowsByIndexesindexes)
<!--/fullDescription-->