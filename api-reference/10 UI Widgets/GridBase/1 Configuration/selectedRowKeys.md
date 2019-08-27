---
id: GridBase.Options.selectedRowKeys
type: Array<any>
firedEvents: selectionChanged
---
---
##### shortDescription
Allows you to select rows or determine which rows are selected.

---
Keys are stored in the order the user selects rows.

To access a row using its key, specify the data field that provides key values. Assign the data field's name to the [key](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key) option of the [store](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores) that underlies the [dataSource]({basewidgetpath}/Configuration/#dataSource).

#####See Also#####
- [Initial and Runtime Selection](/Documentation/Guide/Widgets/{WidgetName}/Selection/#API/Initial_and_Runtime_Selection)
- [getSelectedRowKeys()]({basewidgetpath}/Methods/#getSelectedRowKeys)
- [getSelectedRowsData()]({basewidgetpath}/Methods/#getSelectedRowsData)