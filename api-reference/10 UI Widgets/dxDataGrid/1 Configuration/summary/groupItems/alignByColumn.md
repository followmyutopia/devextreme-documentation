===========================================================================
<!--default-->false<!--/default-->
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Indicates whether to display group summary items in parentheses after the group row header or to align them by the corresponding columns within the group row.
<!--/shortDescription-->

<!--fullDescription-->
When this option is set to **false**, group summary items are displayed in brackets of the group row header. Set this option to **true** to align them by the corresponding columns within the group row.

You can also display group summary items in a group footer by setting the [showInGroupFooter](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#showInGroupFooter) option to **true**.

[note] If this option is set to **true** for the first column of the grid, this setting is ignored (the summary item will be displayed in parentheses after the group row header). It happens because in the described case, the group header and the summary value occupy the same cell.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/datagridgriddatasummariesgroupsummarytotals"
}

#####See Also#####
- [Group Summary - Alignment and Location](/Documentation/Guide/Widgets/DataGrid/Summaries/Group_Summary/#Alignment_and_Location)
<!--/fullDescription-->