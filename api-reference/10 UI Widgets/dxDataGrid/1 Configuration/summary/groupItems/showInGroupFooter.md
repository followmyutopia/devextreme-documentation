---
id: dxDataGrid.Options.summary.groupItems.showInGroupFooter
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether or not a summary item must be displayed in the group footer.

---
By default, summary items are displayed as a part of a group row. If you need a summary item to be displayed in the group footer, assign **true** to the **showInGroupFooter** option of this item. This summary item will be located in the [column that provides data](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#column) for it. If you want another column to hold the summary item, specify the [showInColumn](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#showInColumn) option of this item.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/datagridgriddatasummariesgroupsummarytotals"
}

#####See Also#####
- [Group Summary - Alignment and Location](/Documentation/Guide/Widgets/DataGrid/Summaries/Group_Summary/#Alignment_and_Location)