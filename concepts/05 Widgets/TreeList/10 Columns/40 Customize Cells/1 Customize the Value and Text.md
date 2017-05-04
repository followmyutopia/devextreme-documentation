Use the [customizeText](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#customizeText) function if you need to customize the text displayed in cells. 

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                dataField: "price",
                customizeText: function(cellInfo) {
                    return cellInfo.value + "$";
                }
            }]
        });
    });

Declare the [calculateCellValue](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#calculateCellValue) function to populate a column with custom values. This function is designed to create unbound columns - columns that are not bound to any individual data field. In the following example, this function combines full names from data that the **firstName** and **lastName** fields provide. 

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                caption: "Full Name",
                calculateCellValue: function (rowData) {
                    return rowData.firstName + " " + rowData.lastName;
                }
            }]
        });
    });

Note that sorting in unbound columns is disabled by default, and their cells cannot be edited at runtime.