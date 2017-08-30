Use the [customizeText](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#customizeText) function if you need to customize the text displayed in cells. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                dataField: "Price",
                customizeText: function(cellInfo) {
                    return cellInfo.value + "$";
                }
            }]
        });
    });

##### Angular

    <!--TypeScript-->
    export class AppComponent {
        priceColumn_customizeText (cellInfo) {
            return cellInfo.value + "$";
        }
    }

    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column dataField="Price" [customizeText]="priceColumn_customizeText"></dxi-column>
    </dx-data-grid>
    
---

Declare the [calculateCellValue](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue) function to populate a column with custom values. This function is designed to create unbound columns - columns that are not bound to any individual data field. In the following example, this function combines full names from data that the **firstName** and **lastName** fields provide. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                caption: "Full Name",
                calculateCellValue: function (rowData) {
                    return rowData.firstName + " " + rowData.lastName;
                }
            }]
        });
    });

##### Angular

    <!--TypeScript-->
    export class AppComponent {
        fullNameColumn_calculateCellValue (rowData) {
            return rowData.firstName + " " + rowData.lastName;
        }
    }

    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column caption="Full Name" [calculateCellValue]="fullNameColumn_calculateCellValue"></dxi-column>
    </dx-data-grid>
    
---

Note that [sorting](/Documentation/Guide/Widgets/DataGrid/Sorting/) and [grouping](/Documentation/Guide/Widgets/DataGrid/Grouping/) in unbound columns is disabled by default, and their cells can be [edited](/Documentation/Guide/Widgets/DataGrid/Editing/) at runtime only if you implement the [setCellValue](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#setCellValue) function.