---
id: dxTreeList.Options.onCellPrepared
type: function(e)
default: null
EventForAction: dxTreeList.cellPrepared
---
---
##### shortDescription
A function that is executed after a grid cell is created.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cellElement): dxElement
#include common-ref-elementparam with { element: "cell" }

##### field(e.column): dxTreeListColumn
This column's [configuration](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/).

##### field(e.columnIndex): Number
The index of the column to which the cell belongs.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.data): Object
The data of the row to which the cell belongs. Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.

##### field(e.displayValue): any
The cell's displayed value. Available if the **rowType** is *"data"*.       
Differs from the **value** field only when the cell belongs to the [lookup](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/lookup/) column.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.isExpanded): Boolean
Indicates whether the row is expanded or collapsed. Available if **rowType** is *"data"* or *"detail"*.

##### field(e.isSelected): Boolean
Indicates whether the row is selected. Available if **rowType** is *"data"* or *"detail"*.

##### field(e.key): any
The row's key. Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.       
For plain data, the key value depends on the [keyExpr](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#keyExpr) option. For hierarchical data, the key is generated automatically or set in the underlying **Store** of the [data source](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataSource).

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.oldValue): any
The cell's previous raw value.

##### field(e.row): dxTreeListRowObject
The row [properties](/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/). Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.

##### field(e.rowIndex): Number
The row's index. Refer to [Column and Row Indexes](/Documentation/Guide/Widgets/TreeList/Columns/Column_and_Row_Indexes/) for more information.

##### field(e.rowType): String
The row's [type](/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#rowType).

##### field(e.text): String
The cell's [formatted](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#format) value converted to a string. Available if the **rowType** is *"data"*.

##### field(e.value): any
The cell's raw value. Available if the **rowType** is *"data"*.

##### field(e.watch): function()
Allows tracking a variable and performing actions when it changes. Applies when [repaintChangesOnly](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#repaintChangesOnly) is **true**.       
This function has the following parameters:     

- **getter(data)**: Function        
A function that returns the variable that should be tracked.

- **handler(newValue)**: Function       
A function called when this variable changes.

---
In the following code, the **onCellPrepared** function is used to change a `ProductName`'s color depending on the `Amount` of sold products:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            repaintChangesOnly: true,
            onCellPrepared: function(e) {
                if(e.rowType === "data" && e.column.dataField === "ProductName") {
                    e.cellElement.css("color", e.data.Amount >= 10000 ? "green" : "red");
                    // Tracks the `Amount` data field
                    e.watch(function() {
                        return e.data.Amount
                    }, function() {
                        e.cellElement.css("color", e.data.Amount >= 10000 ? "green" : "red");
                    })
                }
            }
        })
    })

#####Angular

    <!--TypeScript-->
    import { dxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onCellPrepared(e) {
            if(e.rowType === "data" && e.column.dataField === "ProductName") {
                e.cellElement.style.color = e.data.Amount >= 10000 ? "green" : "red";
                // Tracks the `Amount` data field
                e.watch(function() {
                    return e.data.Amount
                }, function() {
                    e.cellElement.style.color = e.data.Amount >= 10000 ? "green" : "red";
                })
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            dxTreeListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tree-list
        [repaintChangesOnly]="true"
        (onCellPrepared)="onCellPrepared($event)">
    </dx-tree-list>

#####ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().TreeList()
        .ID("treeListContainer")
        // ...
        .RepaintChangesOnly(true)
        .OnCellPrepared("treeList_cellPrepared_handler")
    )
    <script>
        function treeList_cellPrepared_handler(e) {
            if (e.rowType === "data" && e.column.dataField === "ProductName") {
                e.cellElement.css("color", e.data.Amount >= 10000 ? "green" : "red");
                // Tracks the `Amount` data field
                e.watch(function() {
                    return e.data.Amount
                }, function() {
                    e.cellElement.css("color", e.data.Amount >= 10000 ? "green" : "red");
                })
            }
        }
    </script>

---

#####See Also#####
- [Customize Cells](/Documentation/Guide/Widgets/TreeList/Columns/Customize_Cells/#Customize_the_Appearance)