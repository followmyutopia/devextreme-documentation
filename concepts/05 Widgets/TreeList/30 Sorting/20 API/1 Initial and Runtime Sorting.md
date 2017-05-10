Rows are sorted according to the data source by default. Set the [sortOrder](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#sortOrder) option to sort rows in the required order. Specify the [sortIndex](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#sortIndex) option as well to sort by multiple columns. Otherwise, each sorted column gets a sort index according to its position in the [columns](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/) array. For example, the following code sorts rows first by the *"Surname"*, then by the *"Name"* column:

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [
                { dataField: "Name",    sortIndex: 1, sortOrder: "asc" },
                { dataField: "Surname", sortIndex: 0, sortOrder: "asc" },
                // ...
            ]
        });
    });

Change the **sortOrder** and **sortIndex** options using the [columnOption](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#columnOptionid_optionName_optionValue) method to sort at runtime.

    <!--JavaScript-->var treeList = $("#treeListContainer").dxTreeList("instance");
    treeList.columnOption("Surname", {
        sortOrder: "desc",
        sortIndex: 2
    });
