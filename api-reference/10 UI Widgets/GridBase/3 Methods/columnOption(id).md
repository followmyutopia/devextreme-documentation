---
id: GridBase.columnOption(id)
---
---
##### shortDescription
Gets all options of a column with a specific identifier.

##### return: Object
The column's options.

##### param(id): Number | String
The column's index, data field, caption, type, or unique name.

---
This method gets the options of the first column found by either of the below:

* **Name**        
The [unique name](/api-reference/_hidden/GridBaseColumn/name.md '{basewidgetpath}/Configuration/columns/#name') of the column.

* **Column Index**        
The index of the column in the [columns](/api-reference/_hidden/GridBaseColumn/GridBaseColumn.md '{basewidgetpath}/Configuration/columns/') array.

* **Data Field**        
The name of the [data source field](/api-reference/_hidden/GridBaseColumn/dataField.md '{basewidgetpath}/Configuration/columns/#dataField') assigned to the column.

* **Caption**        
The text displayed in the column header.

* **Type ([command columns](/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_Types/Command_Columns/) only)**       
The [type](/api-reference/_hidden/dxDataGridColumn/type.md '{basewidgetpath}/Configuration/columns/#type') of the command column.

* **Service String**    
Any string matching the following format: *"optionName:value"*, where *optionName* is one of the [column options](/api-reference/_hidden/GridBaseColumn/GridBaseColumn.md '{basewidgetpath}/Configuration/columns/').

#####See Also#####
- [columns](/api-reference/_hidden/GridBaseColumn/GridBaseColumn.md '{basewidgetpath}/Configuration/columns/')
#include common-link-callmethods