The following indexes can be used in methods and callback functions: 

- **Initial Column Index** (or simply **Column Index**)        
    Equals the column's index in the [columns](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/) array. 

- **Visible Column Index**      
    Depends on the column's current location in the **TreeList** and changes dynamically when columns are [reordered](/Documentation/Guide/Widgets/TreeList/Columns/Column_Reordering/).

    ![DevExtreme HTML5 JavaScript TreeList Visible Column Index](/Content/images/doc/17_2/TreeList/visual_elements/columnIndexes.png)

    Do not confuse the visible column index with the index specified using the **column**.[visibleIndex](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#visibleIndex) option. The latter is used in column reordering.

- **Row Index**         
    Starts from 0 and increases by 1 per row. 

    ![DevExtreme HTML5 JavaScript TreeList Row Index](/Content/images/doc/17_2/TreeList/visual_elements/rowIndexes.png)