You can clear sorting settings for all columns by calling the [clearSorting()](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#clearSorting) method, or for a specific column - by setting its [sortIndex](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#sortIndex) option to *undefined* using the [columnOption](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#columnOptionid_optionName_optionValue) method.

    <!--JavaScript-->var treeList = $("#treeListContainer").dxTreeList("instance");
    treeList.columnOption("Name", "sortIndex", undefined);
    treeList.clearSorting();
