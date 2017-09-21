If you do not explicitly specify certain columns' [width](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#width), the **TreeList** distributes the available space equally among columns at startup. As a result, cell values may appear truncated. Use the [columnMinWidth](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#columnMinWidth) option to specify a minimum width for all columns and the [minWidth](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#minWidth) for an individual column. Note that all these settings may cause horizontal scrolling if columns cannot fit into the widget's width.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columnMinWidth: 100,
            columns: [{
                dataField: "Title",
                width: 200
            }, {
                dataField: "Address",
                minWidth: 150
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ...
        [columnMinWidth]="100">
        <dxi-column dataField="Title" [width]="200"></dxi-column>
        <dxi-column dataField="Address" [minWidth]="150"></dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---

Set the [columnAutoWidth](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#columnAutoWidth) option to **true** to make all columns adjust their widths to their content.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columnAutoWidth: true
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ...
        [columnAutoWidth]="true">
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---

The widget allows a user to resize columns in two different modes: by changing the next column's width or the widget's width. To enable this functionality and set the mode, specify the [allowColumnResizing](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#allowColumnResizing) and [columnResizingMode](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#columnResizingMode) options, respectively. Note that you can prevent a specific column from being resized by assigning **false** to its [allowResizing](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#allowResizing) option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            allowColumnResizing: true,
            columnResizingMode: 'widget', // or 'nextColumn'
            columns: [{
                dataField: "Title",
                allowResizing: false
            }, // ...
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ...
        [allowColumnResizing]="true"
        columnResizingMode="widget"> <!-- or 'nextColumn' -->
        <dxi-column dataField="Title" [allowResizing]="false"></dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/Resizing/AngularJS/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [TreeList - Column Reordering](/Documentation/Guide/Widgets/TreeList/Columns/Column_Reordering/)
