Command columns are used for interaction. The **TreeList** provides the following command columns.

- **Editing Column**        
Contains editing controls. Appears when [editing](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/) is allowed and depends on the [editing mode](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#mode).

- **Adaptive Column**       
Contains buttons that expand adaptive detail rows. Appears if [columnHidingEnabled](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#columnHidingEnabled) is *true* or [hidingPriority](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#hidingPriority) is set for at least one column and only when certain columns do not fit into the screen or container size.

![DevExtreme HTML5 JavaScript TreeList CommandColumns EditingColumn AdaptiveColumn](/Content/images/doc/17_2/treelist/visual_elements/column-types_command.png)

You can relocate or resize the command columns by changing their **visibleIndex** and **width** options. For this, call the [columnOption(id, optionName, optionValue)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#columnOptionid_optionName_optionValue) method as shown by the following code.

    <!--JavaScript-->var treeList = $("#treeListContainer").dxTreeList("instance");
    treeList.columnOption("command:edit", "visibleIndex", -2); // places the editing column before all others
    treeList.columnOption("command:edit", "width", 200); // changes the width of the editing column to 200 pixels
    treeList.columnOption("command:adaptive", "visibleIndex", -1); // places the adaptive column before all data columns,
                                                                   // but after the editing column
    treeList.columnOption("command:adaptive", "width", 80); // changes the width of the adaptive column to 80 pixels

You can also customize cells of command columns using the [onCellPrepared](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onCellPrepared) function. To distinguish cells of a command column from others, check the argument's **column.command** field for the *"edit"* or *"adaptive"* value.

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            onCellPrepared: function(e) {
                if (e.rowType == "data") {
                    var cell = e.cellElement;
                    switch (e.column.command) {
                        case "edit":
                            // ...
                            break;
                        case "adaptive":
                            // ...
                            break;
                    }
                }
            }
        });
    });

#####See Also#####
- [TreeList Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/Adaptability/jQuery/Light/)

[tags] treelist, tree list, column types, command columns, editing column, adaptive column