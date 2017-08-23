The [cellValue (rowIndex, visibleColumnIndex, value)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#cellValuerowIndex_visibleColumnIndex_value) method updates a cell's value. This cell can be located using its row and column indexes. If the cell's data field is known, you can pass it instead of the column index. After a value is updated, save it to the data source by calling the [saveEditData()](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#saveEditData) method.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({ ... });

        $("#updateCellButton").dxButton({
            text: "Update Cell",
            onClick: function() {
                $("#treeListContainer").dxTreeList("cellValue", 1, "Position", "CTO");
                $("#treeListContainer").dxTreeList("saveEditData");
            }
        });
    });

##### Angular
    
    <!--TypeScript-->
    export class AppComponent {
        @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        updateCell () {
            this.treeList.instance.cellValue(1, "Position", "CTO");
            this.treeList.instance.saveEditData();
        }
    }

    <!--HTML-->
    <dx-tree-list ... ></dx-tree-list>
    <dx-button
        text="Update Cell"
        (onClick)="updateCell()">
    </dx-button>
    
---

The **TreeList** widget allows you to process an updated cell value in the **columns**.[setCellValue](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#setCellValue) function before this value is saved to the data source. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            editing: {
                allowUpdating: true, 
                allowAdding: true
            },
            columns: [
                { dataField: "ID", visible: false },
                {
                    dataField: "Full_Name",
                    setCellValue: function (rowData, value) {
                        rowData.ID = value + Math.random() * 100;
                        rowData.Full_Name = value;
                    }
                }
                // ...
            ]
        });
    });

##### Angular
    
    <!--TypeScript-->
    export class AppComponent {
        setCellValue (rowData, value) {
            rowData.ID = value + Math.random() * 100;
            rowData.Full_Name = value;
        }
    }

    <!--HTML-->
    <dx-tree-list>
        <dxo-editing
            [allowUpdating]="true"
            [allowAdding]="true">
        </dxo-editing>
        <dxi-column dataField="ID" [visible]="false"></dxi-column>
        <dxi-column dataField="Full_Name" [setCellValue]="setCellValue"></dxi-column>
    </dx-tree-list>
    
---

Call the [hasEditData()](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#hasEditData) to check if there are any unsaved changes. You can save or cancel them using the [saveEditData()](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#saveEditData) or [cancelEditData()](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#cancelEditData) method, respectively.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({ ... });

        $("#saveChangesButton").dxButton({
            text: "Save changes",
            onClick: function() {
                var treeList = $("#treeListContainer").dxTreeList("instance");
                if (treeList.hasEditData()) {
                    // Implement your logic here
                    treeList.saveEditData();
                }
            }
        });
    });

##### Angular

    <!--TypeScript-->
    export class AppComponent {
        @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        saveEditData () {
            if (this.treeList.instance.hasEditData()) {
                // Implement your logic here
                this.treeList.instance.saveEditData();
            }
        }
    }
    
    <!--HTML-->
    <dx-tree-list ... ></dx-tree-list>
    <dx-button
        text="Save changes"
        (onClick)="saveEditData()">
    </dx-button>
    
---

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/)
