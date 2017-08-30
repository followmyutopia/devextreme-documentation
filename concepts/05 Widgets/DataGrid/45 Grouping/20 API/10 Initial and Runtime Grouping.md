Assign a non-negative integer to the **columns**.[groupIndex](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex) option to group data initially. In the following example, data is first grouped by the *"Continent"* field, then by the *"Country"* field.

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [
                { dataField: 'Country', groupIndex: 1 },
                { dataField: 'Continent', groupIndex: 0 },
                // ...
            ]
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ...>
        <dxi-column 
            dataField="Country"
            [groupIndex]="1">
        </dxi-column>
        <dxi-column 
            dataField="Continent"
            [groupIndex]="0">
        </dxi-column>
    </dx-data-grid>

---

You can change a column's **groupIndex** at runtime using the [columnOption(id, optionName, optionValue)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#columnOptionid_optionName_optionValue) method. 

---

#####jQuery

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid("columnOption", "City", "groupIndex", 0);


#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        groupByCity() () {
            this.dataGrid.instance.columnOption("City", "groupIndex", 0);
        }
    }

---

#####See Also#####
- [User Interaction - Group Data](/Documentation/Guide/Widgets/DataGrid/Grouping/#User_Interaction/Group_Data)

