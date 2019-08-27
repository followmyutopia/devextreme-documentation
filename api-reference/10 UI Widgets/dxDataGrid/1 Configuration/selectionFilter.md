---
id: dxDataGrid.Options.selectionFilter
type: Filter expression
default: []
firedEvents: optionChanged
---
---
##### shortDescription
Specifies [filters](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering) for the rows that must be selected initially. Applies only if **selection**.[deferred]({basewidgetpath}/Configuration/selection/#deferred) is **true**.

---
This option also allows you to obtain [filter expressions](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering) for the currently selected rows. Note that if all records are selected, the **selectionFilter** value is **null**. If there are no selected records, the value contains an empty array.

#####See Also#####
- [getSelectedRowKeys()]({basewidgetpath}/Methods/#getSelectedRowKeys)
- [getSelectedRowsData()]({basewidgetpath}/Methods/#getSelectedRowsData)