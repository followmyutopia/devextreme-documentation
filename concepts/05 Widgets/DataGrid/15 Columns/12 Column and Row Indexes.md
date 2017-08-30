The following indexes can be used in methods and callback functions: 

- **Initial Column Index** (or simply **Column Index**)        
    Equals the column's index in the [columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) array. 

- **Visible Column Index**      
    Depends on the column's current location in the **DataGrid** and changes dynamically when columns are [reordered](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Reordering/) or data is [grouped](/Documentation/Guide/Widgets/DataGrid/Grouping/).

    ![DevExtreme HTML5 JavaScript DataGrid Visible Column Index](/Content/images/doc/17_1/DataGrid/GridColumnIndexes.png)

- **Row Index**         
    Starts from 0 and increases by 1 per row including group rows. With [paging](/Documentation/Guide/Widgets/DataGrid/Paging/), the index resets on each page.

    ![DevExtreme HTML5 JavaScript DataGrid Row Index](/Content/images/doc/17_1/DataGrid/GridRows_RowIndexes.png)