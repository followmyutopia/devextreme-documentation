Unlike [data columns](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/#Data_Columns), band columns do not hold any data. Instead, they collect two or more data columns under one column header. 

![DevExtreme HTML5 JavaScript DataGrid BandColumns MultiRowHeaders BandedLayout](/Content/images/doc/17_2/DataGrid/BandColumns.png)

To set up this layout, describe the hierarchy of columns directly in an object of the [columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) array. For example, the following code bands three columns under the *"Contacts"* header.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                caption: "Contacts",
                columns: ["Email", "Mobile_Phone", "Skype"]
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column caption="Contacts">
            <dxi-column dataField="Email"></dxi-column>
            <dxi-column dataField="Mobile_Phone"></dxi-column>
            <dxi-column dataField="Skype"></dxi-column>
        </dxi-column>
    </dx-data-grid>
    
---

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/MultiRowHeadersBands/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

If you use the [customizeColumns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#customizeColumns) function to configure columns, the hierarchy cannot be described declaratively. To band columns in this case, use the [isBand](/Documentation//ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#isBand) and [ownerBand](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#ownerBand) options. Using the same options, you can distinguish band and nested columns from other columns in code.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            customizeColumns: function(columns) {
                columns.push({ // Pushes the "Contacts" band column into the "columns" array
                    caption: "Contacts",
                    isBand: true
                });
        
                var contactsFields = ["Email", "Mobile_Phone", "Skype"];
                for (var i = 0; i < columns.length - 1; i++) {
                    if (contactsFields.indexOf(columns[i].dataField) > -1) // If the column belongs to "Contacts",
                        columns[i].ownerBand = columns.length - 1; // assigns "Contacts" as the owner band column
                }
            }
        });
    });

##### Angular
    
    <!--TypeScript-->
    export class AppComponent {
        customizeColumns (columns) {
            columns.push({ // Pushes the "Contacts" band column into the "columns" array
                caption: "Contacts",
                isBand: true
            });
    
            var contactsFields = ["Email", "Mobile_Phone", "Skype"];
            for (var i = 0; i < columns.length - 1; i++) {
                if (contactsFields.indexOf(columns[i].dataField) > -1) // If the column belongs to "Contacts",
                    columns[i].ownerBand = columns.length - 1; // assigns "Contacts" as the owner band column
            }
        }
    }

    <!--HTML-->
    <dx-data-grid ...
        [customizeColumns]="customizeColumns">
    </dx-data-grid>
    
---

[note] Nested columns have almost every [option of a data column](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/), except [fixed](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#fixed) and [fixedPosition](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#fixedPosition). Band columns, on the contrary, support a very limited set of options; all of them are listed in the [isBand](/Documentation//ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#isBand) option's description. Note that band columns must not have the [dataField](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataField) option set.

Band columns support hierarchies of any nesting level making the following structure acceptable.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                caption: 'A',
                columns: [ 'A1', 'A2', {
                    caption: 'A3',
                    columns: ['A31', 'A32', {
                        caption: 'A33',
                        columns: ['A331', 'A332', 'A333']
                    }]
                }]
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column caption="A">
            <dxi-column dataField="A1"></dxi-column>
            <dxi-column dataField="A2"></dxi-column>
            <dxi-column caption="A3">
                <dxi-column dataField="A31"></dxi-column>
                <dxi-column dataField="A32"></dxi-column>
                <dxi-column caption="A33">
                    <dxi-column dataField="A331"></dxi-column>
                    <dxi-column dataField="A332"></dxi-column>
                    <dxi-column dataField="A333"></dxi-column>
                </dxi-column>
            </dxi-column>
        </dxi-column>
    </dx-data-grid>
    
---

[tags] dataGrid, data grid, column types, band columns, banded layout, multi-row headers