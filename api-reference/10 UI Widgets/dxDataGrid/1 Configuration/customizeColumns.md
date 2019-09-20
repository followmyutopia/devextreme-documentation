---
id: dxDataGrid.Options.customizeColumns
type: function(columns)
---
---
##### shortDescription
Customizes columns after they are created.

##### param(columns): Array<dxDataGridColumn>
All column [configurations](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/).

---
Use this function to make minor adjustments to automatically generated columns. You can access and modify column configurations using the function's parameter. 

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#dataGrid").dxDataGrid({
            // ...
            customizeColumns: function (columns) {
                columns[0].width = 100;
                columns[1].width = 210;
            }
        })
    });

##### Angular

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        customizeColumns (columns) {
            columns[0].width = 100;
            columns[1].width = 210;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-data-grid ...
        [customizeColumns]="customizeColumns">
    </dx-data-grid>
    
---

For a more detailed column customization, declare the [columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) array.

[note] We do not recommend that you create new columns via **customizeColumns**, because this disables data operations (sorting, filtering, summary) for the created columns. Add them to the **columns** array instead.
