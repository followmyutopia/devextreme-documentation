The following indexes can be used in methods and callback functions: 

- **Initial Column Index** (or simply **Column Index**)        
    Equals the column's index in the [columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) array. 

- **Visible Column Index**      
    Depends on the column's current location in the **DataGrid** and changes dynamically when columns are [reordered](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Reordering/) or data is [grouped](/Documentation/Guide/Widgets/DataGrid/Grouping/).

    ![DevExtreme HTML5 JavaScript DataGrid Visible Column Index](/Content/images/doc/18_2/DataGrid/visual_elements/columnIndexes.png)

    This index is not equal to the index set in the **column**.[visibleIndex](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#visibleIndex) option. The latter is used to reorder columns.

- **Row Index**         
    Equals a row's order among rendered rows. This index starts from 0 and increases by 1 per row (includes group rows).

    ![DevExtreme HTML5 JavaScript DataGrid Row Index](/Content/images/doc/18_2/DataGrid/visual_elements/rowIndexes.png)

    [note] Rendered rows can be outside the viewport, for example, if [scrolling](/Documentation/Guide/Widgets/DataGrid/Scrolling/) is virtual or infinite or [row rendering mode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/scrolling/#rowRenderingMode) is virtual. To get the row index, use the [getRowIndexByKey](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getRowIndexByKeykey) method or **rowIndex** field in callback functions like [onRowClick](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowClick), [onCellClick](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onCellClick), etc.
