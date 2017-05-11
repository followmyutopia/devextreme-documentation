A column is considered hidden when its [visible](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#visible) option is *false*. You can change this option programmatically using the [columnOption(id, optionName, optionValue)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#columnOptionid_optionName_optionValue) method. For example, the following code hides an *"Email"* column:

    <!--JavaScript-->$("#treeListContainer").dxTreeList("columnOption", "Email", "visible", false);

#####See Also#####
- [Column Chooser](/Documentation/Guide/Widgets/TreeList/Columns/Column_Chooser/)