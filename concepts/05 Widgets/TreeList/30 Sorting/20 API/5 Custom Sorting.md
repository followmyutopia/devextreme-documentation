Implement a custom sorting routine using the [calculateSortValue](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#calculateSortValue) option if standard sorting does not meet your requirements. It accepts the name of the [data source field](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataSource) that provides values to be used in sorting...

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            columns: [{
                dataField: "Position", // provides values for the column
                calculateSortValue: "isOnVacation" // provides values to be used in sorting 
            }]
        });
    });

...or a function that returns such a value.

    <!--JavaScript-->$(function() {
        var treeList = $("#treeListContainer").dxTreeList({
            columns: [{
                dataField: 'Position',
                calculateSortValue: function (rowData) {
                    if (rowData.Position == "CEO")
                        return treeList.option('Position', 'sortOrder') == 'asc' ? 0 : data.length; // CEOs must go first
                    else
                        return rowData.Position; // Others are sorted as usual
                }
            }]
        }).dxTreeList("instance");
    });
