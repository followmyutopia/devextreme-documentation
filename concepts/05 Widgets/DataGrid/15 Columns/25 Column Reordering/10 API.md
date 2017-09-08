The [columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) array determines columns' order. You can reorder columns by moving their objects within the array or by changing the column's [visibleIndex](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#visibleIndex) if you prefer to configure columns using the [customizeColumns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#customizeColumns) function.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            customizeColumns: function(columns) {
                column[2].visibleIndex = 1;
            }
        });
    });

##### Angular
    
    <!--TypeScript-->
    export class AppComponent {
        customizeColumns (columns) {
            column[2].visibleIndex = 1;
        }
    }

    <!--HTML-->
    <dx-data-grid ...
        [customizeColumns]="customizeColumns">
    </dx-data-grid>
    
---

The **visibleIndex** option can also be changed at runtime to reorder columns regardless of the way you configured them. For this, call the [columnOption(id, optionName, optionValue)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#columnOptionid_optionName_optionValue) method. The following code swaps the second and first column:

---
##### jQuery

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid("columnOption", 1, "visibleIndex", 0);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        swapColumns () {
            this.dataGrid.instance.columnOption(1, "visibleIndex", 0);
        }
    }
    
---

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/)
- [Data Columns](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Data_Columns/)
- [DataGrid Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ColumnCustomization/jQuery/Light/)