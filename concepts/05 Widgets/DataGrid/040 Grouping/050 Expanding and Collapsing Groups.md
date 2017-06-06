Groups can be either expanded or collapsed. When expanded, a group is represented by a [group row](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Group_Rows) and data rows matching the grouping value. When collapsed, a group is represented by a group row only.

![DevExtreme DataGrid Groups](/Content/images/doc/17_2/DataGrid/GroupsExpandedCollapsed.png)

By default, to expand/collapse a group, the user clicks its expand/collapse button. On small-screen devices, this approach may impair the user experience. As an alternative, consider expanding/collapsing a group by a click on the group row. To specify the preferable mode, use the **grouping** | [expandMode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#expandMode) option.

    <!--JavaScript-->var dataGridOptions = {
        // ...
        grouping: {
            // ...
            expandMode: 'buttonClick' // or 'rowClick'
        }
    };

You can entirely disallow the user to collapse groups. For this purpose, set the **grouping** | [allowCollapsing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#allowCollapsing) option to *false*.

    <!--JavaScript-->var dataGridOptions = {
        // ...
        grouping: {
            // ...
            allowCollapsing: false // disallows group collapsing
        }
	  };

Groups in a grid may appear expanded or collapsed initially. To specify this for all groups, use the **grouping** | [autoExpandAll](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#autoExpandAll) option. If you need to specify this setting for an individual column, use its [autoExpandGroup](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#autoExpandGroup) option.

    <!--JavaScript-->var dataGridOptions = {
        // ...
        grouping: {
            // ...
            autoExpandAll: true // makes all groups appear expanded
        },
        columns: [{
            // ...
            autoExpandGroup: false // groups of this column appear collapsed
        }]
	  };

To expand/collapse a group in code, call the [expandAll(groupIndex)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#expandAllgroupIndex) or [collapseAll(groupIndex)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#collapseAllgroupIndex) methods. To discover how to calculate the group index, which is passed to these methods, refer to the [Calculating the Group Index](/Documentation/Guide/Widgets/DataGrid/Grouping/#Calculating_the_Group_Index) subtopic. Calling these methods without the argument expands/collapses all groups.

You can also perform custom actions before or after expanding/collapsing groups. For this purpose, use the [rowExpanding](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowExpanding), [rowExpanded](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowExpanded), [rowCollapsing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowCollapsing) and [rowCollapsed](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowCollapsed) events.