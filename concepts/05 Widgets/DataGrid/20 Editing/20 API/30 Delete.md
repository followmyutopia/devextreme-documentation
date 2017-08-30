Call the [deleteRow(rowIndex)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#deleteRowrowIndex) method to delete a specific row from the data source. This method invokes a confirmation dialog that allows a user to cancel deletion. The following code hides this dialog, thus a row is instantly deleted from the data source:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var dataGrid = $("#dataGridContainer").dxDataGrid({
            // ...
            editing: {
                mode: "row", 
                allowDeleting: true,
                texts: {
                    // Hides the confirmation dialog
                    confirmDeleteMessage: null
                }
            }
        }).dxDataGrid("instance");

        $("#deleteRowButton").dxButton({
            text: "Delete Row",
            onClick: function() {
                // Deletes the second row
                dataGrid.deleteRow(1);
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid>
        <dxo-editing
            mode="row"
            [allowDeleting]="true">
            <dxo-texts [confirmDeleteMessage]="null"></dxo-texts>
        </dxo-editing>
    </dx-data-grid>
    <dx-button
        text="Delete Row"
        (onClick)="deleteRow()">
    </dx-button>

    <!--TypeScript-->
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        deleteRow () {
            // Deletes the second row
            this.dataGrid.instance.deleteRow(1);
        }
    }
    
---

Note that in the [batch mode](/Documentation/Guide/Widgets/DataGrid/Editing/#User_Interaction/Batch_Mode) a row is only marked as deleted. To save changes, call the [saveEditData()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#saveEditData) method. Calling the [undeleteRow(rowIndex)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#undeleteRowrowIndex) method cancels row deletion.

---
##### jQuery

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid("undeleteRow", 1);

##### Angular

    <!--TypeScript-->
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        undeleteRow () {
            this.dataGrid.instance.undeleteRow(1);
        }
    }
    
---

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/)
