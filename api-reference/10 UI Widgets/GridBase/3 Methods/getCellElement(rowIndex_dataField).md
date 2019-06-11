<!--id-->GridBase.getCellElement(rowIndex, dataField)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Gets a cell with a specific row index and a data field, column caption or name.
<!--/shortDescription-->

<!--paramName1-->rowIndex<!--/paramName1-->
<!--paramType1-->Number<!--/paramType1-->
<!--paramDescription1-->
The index of the row to which the cell belongs. Refer to [Column and Row Indexes](/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_and_Row_Indexes/) for more information.
<!--/paramDescription1-->

<!--paramName2-->dataField<!--/paramName2-->
<!--paramType2-->String<!--/paramType2-->
<!--paramDescription2-->
The [data field]({basewidgetpath}/Configuration/columns/#dataField), [caption]({basewidgetpath}/Configuration/columns/#caption), or [unique name]({basewidgetpath}/Configuration/columns/#name) of the column to which the cell belongs.
<!--/paramDescription2-->

<!--returnType-->dxElement|undefined<!--/returnType-->
<!--returnDescription-->
The cell's container. An [HTML element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery element](http://api.jquery.com/Types/#jQuery) when you use jQuery. If the specified row or data field does not exist, the method returns **undefined**.
<!--/returnDescription-->

<!--fullDescription-->
#####See Also#####
#include common-link-callmethods
<!--/fullDescription-->