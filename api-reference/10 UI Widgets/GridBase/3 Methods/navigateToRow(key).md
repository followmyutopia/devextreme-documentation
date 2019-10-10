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

- The widget's [keyExpr](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/keyExpr.md '{basewidgetpath}/Configuration/#keyExpr') or the [store's](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores') **key** option should be specified.
- Rows should be initially sorted by keys. They can be sorted on the client using a column's [sortOrder](/api-reference/_hidden/GridBaseColumn/sortOrder.md '{basewidgetpath}/Configuration/columns/#sortOrder') or the **DataSource**'s [sort](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/sort.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort') option, or come already sorted from the server.

#####See Also#####
- [Focused Row](/Documentation/Guide/Widgets/{WidgetName}/Focused_Row/)