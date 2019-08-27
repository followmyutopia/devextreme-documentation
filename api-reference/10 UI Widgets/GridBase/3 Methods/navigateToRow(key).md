---
id: GridBase.navigateToRow(key)
---
---
##### shortDescription
Navigates the grid to the data page that contains the row with the specified key and scrolls the grid to display the row if it is not in the viewport.

##### param(key): any
The row's key.

---
The following requirements apply when you use this method: 

- The widget's [keyExpr]({basewidgetpath}/Configuration/#keyExpr) or the [store's](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores) **key** option should be specified.
- Rows should be initially sorted by keys. They can be sorted on the client using a column's [sortOrder]({basewidgetpath}/Configuration/columns/#sortOrder) or the **DataSource**'s [sort](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort) option, or come already sorted from the server.

#####See Also#####
- [Focused Row](/Documentation/Guide/Widgets/{WidgetName}/Focused_Row/)