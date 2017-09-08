Use the [addRow()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#addRow) method to add an empty row.

---
##### jQuery

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid("addRow");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        addRow () {
           this.dataGrid.instance.addRow();
        }
    }
    
---

You can specify initial values for a newly added row in the [onInitNewRow](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onInitNewRow) event handler.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                dataField: "Hire_Date",
                dataType: "date"
            },
                // ...
            ],
            onInitNewRow: function(e) {
                e.data.Hire_Date = new Date();
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ...
        (onInitNewRow)="onInitNewRow($event)">
        <dxi-column dataField="Hire_Date" dataType="date"></dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    export class AppComponent {
        onInitNewRow (e) {
            e.data.Hire_Date = new Date();
        }
    }
    
---

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/)