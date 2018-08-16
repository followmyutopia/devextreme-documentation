Use the [customizeText](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#customizeText) function if you need to customize the text displayed in cells. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
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
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        priceColumn_customizeText (cellInfo) {
            return cellInfo.value + "$";
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column dataField="Price" [customizeText]="priceColumn_customizeText"></dxi-column>
    </dx-tree-list>
    
---

Declare the [calculateCellValue](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#calculateCellValue) function to populate a column with custom values. This function is designed to create unbound columns - columns that are not bound to any individual data field. In the following example, this function combines full names from data that the **firstName** and **lastName** fields provide. 

---
##### jQuery

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

##### Angular

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        fullNameColumn_calculateCellValue (rowData) {
            return rowData.firstName + " " + rowData.lastName;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column caption="Full Name" [calculateCellValue]="fullNameColumn_calculateCellValue"></dxi-column>
    </dx-tree-list>
    
---

Note that [sorting](/Documentation/Guide/Widgets/TreeList/Sorting/) in unbound columns is disabled by default, and their cells can be [edited](/Documentation/Guide/Widgets/TreeList/Editing/) at runtime only if you implement the [setCellValue](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#setCellValue) function.