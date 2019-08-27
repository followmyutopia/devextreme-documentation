---
id: GridBase.deleteColumn(id)
---
---
##### shortDescription
Removes a column.

##### param(id): Number | String
The column's index, data field, caption or unique name.

---
This method removes the first column found by either of the below:

* **Name**        
The [unique name]({basewidgetpath}/Configuration/columns/#name) of the column.

* **Column Index**        
The index of the column in the [columns]({basewidgetpath}/Configuration/columns/) array.

* **Data Field**        
The name of the [data source field]({basewidgetpath}/Configuration/columns/#dataField) assigned to the column.

* **Caption**        
The text displayed in the column header.

#####See Also#####
#include common-link-callmethods
- [addColumn(columnOptions)]({basewidgetpath}/Methods/#addColumncolumnOptions)
- [deleteRow(rowIndex)]({basewidgetpath}/Methods/#deleteRowrowIndex)