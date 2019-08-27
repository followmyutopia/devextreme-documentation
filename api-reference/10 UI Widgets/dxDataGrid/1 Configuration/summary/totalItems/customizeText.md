---
id: dxDataGrid.Options.summary.totalItems.customizeText
type: function(itemInfo)
---
---
##### shortDescription
Customizes the text to be displayed in the summary item.

##### param(itemInfo): Object
The summary item's data.

##### field(itemInfo.value): String | Number | Date
The summary item's value as it was calculated.

##### field(itemInfo.valueText): String
The summary item's [formatted](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#valueFormat) value.

##### return: String
The text for the summary item to display.

---
This option accepts a function that must return the text to be displayed in the summary item. When you implement this function, you can access the summary item value using the fields of object passed to the function as its argument. 

#####See Also#####
- [Format Text and Value](/Documentation/Guide/Widgets/DataGrid/Summaries/Format_Text_and_Value/)