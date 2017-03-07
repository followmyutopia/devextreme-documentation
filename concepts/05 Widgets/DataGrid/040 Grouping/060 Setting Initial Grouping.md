Grouping can be applied not only at runtime, but also at design time. To do this, assign an integer value to the [groupIndex](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex) option of those columns that must be used in grouping. Note that grouping order is based on those values. If [grouping in the UI](/Documentation/Guide/Widgets/DataGrid/Grouping/#Grouping_in_UI) is prohibited, the user will not be able to change the initially set grouping.

    <!--JavaScript-->var dataGridOptions = {
        // ...
        columns: [{
            // ...
            groupIndex: 0
        }, {
            // ...
            groupIndex: 1
        }]
    };

For information about calculating the group index, see the [Calculating the Group Index](/Documentation/Guide/Widgets/DataGrid/Grouping/#Calculating_the_Group_Index) subtopic.