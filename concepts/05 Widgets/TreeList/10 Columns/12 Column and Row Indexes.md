The following indexes can be used in methods and callback functions: 

- **Initial Column Index** (or simply **Column Index**)        
    Equals the column's index in the [columns](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/) array. 

- **Visible Column Index**      
    Depends on the column's current location in the **TreeList** and changes dynamically when columns are [reordered](/Documentation/Guide/Widgets/TreeList/Columns/Column_Reordering/).

    ![DevExtreme HTML5 JavaScript TreeList Visible Column Index](/Content/images/doc/19_1/TreeList/visual_elements/columnIndexes.png)

    This index is not equal to the index set in the **column**.[visibleIndex](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#visibleIndex) option. The latter is used to reorder columns.

- **Row Index**         
    Equals a row's order among rendered rows. This index starts from 0 and increases by 1 per row including group rows.

    ![DevExtreme HTML5 JavaScript TreeList Row Index](/Content/images/doc/19_1/TreeList/visual_elements/rowIndexes.png)

    [note] Rendered rows can be outside the viewport, for example, if [scrolling](/Documentation/Guide/Widgets/TreeList/Scrolling/) or [row rendering mode](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/scrolling/#rowRenderingMode) is virtual. To get the row index, use the [getRowIndexByKey](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#getRowIndexByKeykey) method or **rowIndex** field in callback functions like [onRowClick](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onRowClick), [onCellClick](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onCellClick), etc.
