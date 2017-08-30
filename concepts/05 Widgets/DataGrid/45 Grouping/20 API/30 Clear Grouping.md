Set a column's [groupIndex](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex) to **undefined** using the [columnOption(id, optionName, optionValue)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#columnOptionid_optionName_optionValue) method to ungroup data by this column.

---

#####jQuery

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid("columnOption", "City", "groupIndex", undefined);


#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        clearGroupingByCity() () {
            this.dataGrid.instance.columnOption("City", "groupIndex", undefined);
        }
    }

---

You can ungroup data by all columns at once using the [clearGrouping()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#clearGrouping) method.

---

#####jQuery

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid("clearGrouping");


#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        clearGrouping() () {
            this.dataGrid.instance.clearGrouping();
        }
    }

---

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/)
- [User Interaction - Clear Grouping](/Documentation/Guide/Widgets/DataGrid/Grouping/#User_Interaction/Clear_Grouping)