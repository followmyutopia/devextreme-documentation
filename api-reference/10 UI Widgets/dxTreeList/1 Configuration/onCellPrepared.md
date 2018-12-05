<!--EventForAction-->..\4 Events\cellPrepared.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed after a grid cell is created.
<!--/shortDescription-->

<!--fullDescription-->
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
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event that caused the function's execution.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->{WidgetName}<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->data<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The data of the row to which the cell belongs. Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->key<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->any<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The row's key. Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.       
For plain data, the key value depends on the [keyExpr](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#keyExpr) option. For hierarchical data, the key is generated automatically or set in the underlying **Store** of the [data source](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataSource). 
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->value<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->any<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The cell's raw value. Available if the **rowType** is *"data"*.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->displayValue<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->any<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The cell's displayed value. Available if the **rowType** is *"data"*.       
Differs from the **value** field only when the cell belongs to the [lookup](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/lookup/) column.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->text<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->String<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The cell's [formatted](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#format) value converted to a string. Available if the **rowType** is *"data"*.        
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->columnIndex<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->Number<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
The index of the column to which the cell belongs.
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->column<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->dxTreeListColumn<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
This column's [configuration](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/).
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->rowIndex<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->Number<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
The row's visible index.
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->rowType<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->String<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
The row's [type](/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#rowType).
<!--/typeFunctionParamDescription1_field12-->
<!--typeFunctionParamName1_field13-->row<!--/typeFunctionParamName1_field13-->
<!--typeFunctionParamType1_field13-->dxTreeListRowObject<!--/typeFunctionParamType1_field13-->
<!--typeFunctionParamDescription1_field13-->
The row [properties](/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/). Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.
<!--/typeFunctionParamDescription1_field13-->
<!--typeFunctionParamName1_field14-->isSelected<!--/typeFunctionParamName1_field14-->
<!--typeFunctionParamType1_field14-->Boolean<!--/typeFunctionParamType1_field14-->
<!--typeFunctionParamDescription1_field14-->
Indicates whether the row is selected. Available if **rowType** is *"data"* or *"detail"*.
<!--/typeFunctionParamDescription1_field14-->
<!--typeFunctionParamName1_field15-->isExpanded<!--/typeFunctionParamName1_field15-->
<!--typeFunctionParamType1_field15-->Boolean<!--/typeFunctionParamType1_field15-->
<!--typeFunctionParamDescription1_field15-->
Indicates whether the row is expanded or collapsed. Available if **rowType** is *"data"* or *"detail"*.
<!--/typeFunctionParamDescription1_field15-->
<!--typeFunctionParamName1_field16-->cellElement<!--/typeFunctionParamName1_field16-->
<!--typeFunctionParamType1_field16-->dxElement<!--/typeFunctionParamType1_field16-->
<!--typeFunctionParamDescription1_field16-->
The cell's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field16-->
<!--typeFunctionParamName1_field17-->watch<!--/typeFunctionParamName1_field17-->
<!--typeFunctionParamType1_field17-->function()<!--/typeFunctionParamType1_field17-->
<!--typeFunctionParamDescription1_field17-->
Allows tracking a variable and performing actions when it changes. Applies when [repaintChangesOnly](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#repaintChangesOnly) is **true**.       
This function has the following parameters:     

- **getter(data)**: Function        
A function that returns the variable that should be tracked.

- **handler(newValue)**: Function       
A function called when this variable changes.
<!--/typeFunctionParamDescription1_field17-->
<!--typeFunctionParamName1_field18-->oldValue<!--/typeFunctionParamName1_field18-->
<!--typeFunctionParamType1_field18-->any<!--/typeFunctionParamType1_field18-->
<!--typeFunctionParamDescription1_field18-->
The cell's previous raw value.
<!--/typeFunctionParamDescription1_field18-->
