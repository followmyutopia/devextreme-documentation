===================================================================
===================================================================

<!--shortDescription-->
Gets all options of a column with a specific identifier.
<!--/shortDescription-->

<!--paramName1-->id<!--/paramName1-->
<!--paramType1-->Number|String<!--/paramType1-->
<!--paramDescription1-->
The column's index, data field, caption, type, or unique name.
<!--/paramDescription1-->

<!--returnType-->Object<!--/returnType-->
<!--returnDescription-->
The column's options.
<!--/returnDescription-->

<!--fullDescription-->
This method gets the options of the first column found by either of the below:

* **Name**        
The [unique name]({basewidgetpath}/Configuration/columns/#name) of the column.

* **Column Index**        
The index of the column in the [columns]({basewidgetpath}/Configuration/columns/) array.

* **Data Field**        
The name of the [data source field]({basewidgetpath}/Configuration/columns/#dataField) assigned to the column.

* **Caption**        
The text displayed in the column header.

* **Type ([command columns](/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_Types/Command_Columns/) only)**       
The [type]({basewidgetpath}/Configuration/columns/#type) of the command column.

* **Service String**    
Any string matching the following format: *"optionName:value"*, where *optionName* is one of the [column options]({basewidgetpath}/Configuration/columns/).

#####See Also#####
- [columns]({basewidgetpath}/Configuration/columns/)
#include common-link-callmethods
<!--/fullDescription-->