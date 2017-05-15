Use the [selectedRowKeys](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#selectedRowKeys) option to select rows initially. Note that to access a row by its key, you should specify the [key](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key) option in the [Store](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores) that underlies the [dataSource](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataSource).

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            dataSource: {
                store: {
                    // ...
                    key: "id"
                }
            },
            selectedRowKeys: [1, 5, 18]
        });
    });

You can select rows at runtime as well with the [selectRows(keys, preserve)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#selectRowskeys_preserve) method. Note that the **preserve** argument, which tells the widget whether to keep or clear the previous selection, is *false* by default. Before selecting a row, you can call the [isRowSelected(key)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#isRowSelectedkey) method to check if this row is already selected. If you need to select all rows at once, call the [selectAll()](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#selectAll) method.

    <!--JavaScript-->var treeList = $("#treeListContainer").dxTreeList("instance");
    if (!treeList.isRowSelected(5)) {
        treeList.selectRows([5], true);
    }

<!---->

    <!--JavaScript-->treeList.selectRows([5], true);


To get the keys or data of the selected rows, call the [getSelectedRowKeys()](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#getSelectedRowKeys) or [getSelectedRowsData()](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#getSelectedRowsData) method, respectively.

    <!--JavaScript-->var treeList = $("#treeListContainer").dxTreeList("instance");
    var selectedKeys = treeList.getSelectedRowKeys();
    var selectedData = treeList.getSelectedRowsData();