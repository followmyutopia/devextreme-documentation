If you do not explicitly specify certain columns' [width](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#width), the **DataGrid** tries to distribute the available space equally among columns at startup. As a result, cell values may appear truncated. To guarantee a minimum width for a column, use the [minWidth](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#minWidth) option. Note that all mentioned settings may cause horizontal scrolling if columns cannot fit into the widget's width.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
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
    <dx-data-grid ...
        [columnMinWidth]="100">
        <dxi-column dataField="Title" [width]="200"></dxi-column>
        <dxi-column dataField="Address" [minWidth]="150"></dxi-column>
    </dx-data-grid>
    
---

Set the [columnAutoWidth](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#columnAutoWidth) option to **true** to make all columns adjust their widths to their content.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columnAutoWidth: true
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ...
        [columnAutoWidth]="true">
    </dx-data-grid>
    
---

The widget allows a user to resize columns in two different modes: by changing the width of the next column or the width of the widget. To enable this functionality and set the mode, specify the [allowColumnResizing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#allowColumnResizing) and [columnResizingMode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#columnResizingMode) options, respectively. Note that you can prevent a specific column from being resized by assigning **false** to its [allowResizing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowResizing) option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            allowColumnResizing: true,
            columnResizingMode: 'widget', // or 'nextColumn'
            columns: [{
                dataField: "Title",
                allowResizing: false
            }, 
            // ...
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ...
        [allowColumnResizing]="true"
        columnResizingMode="widget"> <!-- or 'nextColumn' -->
        <dxi-column dataField="Title" [allowResizing]="false"></dxi-column>
    </dx-data-grid>
    
---

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ColumnResizing/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [DataGrid - Column Reordering](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Reordering/)
