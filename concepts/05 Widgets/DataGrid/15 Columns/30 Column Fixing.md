In some cases, the widget contains so many columns that they cause horizontal scrolling. If specific columns should be on screen constantly regardless of how far the widget is scrolled, a user can fix them.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid ColumnFixing](/Content/images/doc/18_1/DataGrid/visual_elements/column_fixing.png)

To allow this, set the **columnFixing**.[enabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnFixing/#enabled) option to **true**. If a user should never fix (or unfix) a specific column, set its [allowFixing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowFixing) option to **false**.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            columnFixing: {
                enabled: true
            },
            columns: [{
                // ...
                allowFixing: false
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-column-fixing [enabled]="true"></dxo-column-fixing>
        <dxi-column [allowFixing]="true" ... ></dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---

If a column should be fixed initially, assign **true** to its [fixed](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#fixed) option and specify its target position in the widget using the [fixedPosition](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#fixedPosition) option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            columns: [{
                // ...
                fixed: true,
                fixedPosition: "left"
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column [fixed]="true" fixedPosition="left" ... ></dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---

[note] Once you assign **true** to the **columnFixing**.**enabled** or **fixed** option, [command columns](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Command_Columns/) become fixed automatically.

Since column fixing is effective only with horizontal scrolling, using it makes sense only if the [columnAutoWidth](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#columnAutoWidth) option is **false** and when the total width of columns exceeds the container width. Otherwise, fixed columns behave just like regular ones.

#####See Also#####
- [Adaptability](/Documentation/Guide/Widgets/DataGrid/Columns/Adaptability/)
- [DataGrid Demos](/Demos/WidgetsGallery/Demo/DataGrid/LocalDataSource/jQuery/Light/)