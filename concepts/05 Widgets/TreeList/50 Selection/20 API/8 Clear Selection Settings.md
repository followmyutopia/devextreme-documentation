Call the [deselectRows(keys)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#deselectRowskeys) method to clear the selection of specific rows.

    <!--JavaScript-->$("#treeListContainer").dxTreeList("deselectRows", [1, 4, 10]);

The [deselectAll()](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#deselectAll) method clears selection of all visible rows, and can be used when you apply a [filter](/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/) and want to keep the selection of invisible rows that do not meet the filtering conditions. To clear selection of all rows regardless of their visibility, call the [clearSelection()](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#clearSelection) method.

    <!--JavaScript-->var treeList = $("#treeListContainer").dxTreeList("instance");
    treeList.deselectAll();
    treeList.clearSelection();

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/)
