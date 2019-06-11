<!--id-->dxDataGrid.Options.grouping.expandMode<!--/id-->
===========================================================================
<!--default-->'buttonClick', 'rowClick' (mobile_devices)<!--/default-->
<!--acceptValues-->'buttonClick' | 'rowClick'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the event on which a group will be expanded/collapsed.
<!--/shortDescription-->

<!--fullDescription-->
By default, to expand/collapse a group, the user clicks its expand/collapse button. On small-screen devices, this approach may impair the user experience. As an alternative, consider expanding/collapsing a group by a click on the group row. For this purpose, assign *"rowClick"* to the **grouping**.**expandMode** option.

#include common-ref-enum with {
    enum: "`GridGroupingExpandMode`",
    values: "`ButtonClick` and `RowClick`"
}

#####See Also#####
- [Expand and Collapse Groups - User Interaction](/Documentation/Guide/Widgets/DataGrid/Grouping/#User_Interaction/Expand_and_Collapse_Groups)
<!--/fullDescription-->