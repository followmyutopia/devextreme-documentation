The following indexes can be used in methods and callback functions: 

- **Initial Column Index** (or simply **Column Index**)        
    Equals the column's index in the [columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) array. 

- **Visible Column Index**      
    Depends on the column's current location in the **DataGrid** and changes dynamically when columns are [reordered](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Reordering/) or data is [grouped](/Documentation/Guide/Widgets/DataGrid/Grouping/).

    ![DevExtreme HTML5 JavaScript DataGrid Visible Column Index](/Content/images/doc/17_2/DataGrid/GridColumnIndexes.png)

    Do not confuse the visible column index with the index specified using the **column**.[visibleIndex](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#visibleIndex) option. The latter is used in column reordering.

- **Row Index**         
    Starts from 0 and increases by 1 per row including group rows. With [paging](/Documentation/Guide/Widgets/DataGrid/Paging/), the index resets on each page.

    ![DevExtreme HTML5 JavaScript DataGrid Row Index](/Content/images/doc/17_2/DataGrid/GridRows_RowIndexes.png)