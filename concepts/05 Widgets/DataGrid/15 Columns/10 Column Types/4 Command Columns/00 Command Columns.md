The **DataGrid** provides the following command columns:

- **Adaptive column**       
Contains ellipsis buttons that expand/collapse [adaptive detail rows](/Documentation/Guide/Widgets/DataGrid/Columns/Adaptability/). Appears if [columnHidingEnabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#columnHidingEnabled) is **true** or [hidingPriority](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#hidingPriority) is set for at least one column and only when certain columns do not fit into the screen or container size.

- **Selection column**    
Contains checkboxes that select rows. Appears when **selection**.[mode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#mode) is *"multiple"* and [showCheckBoxesMode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#showCheckBoxesMode) is not *"none"*.

- **Group expand column**     
Contains arrow buttons that expand/collapse [groups](/Documentation/Guide/Widgets/DataGrid/Grouping/).

- **Detail expand column**     
Contains arrow buttons that expand/collapse [detail sections](/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/).

- **Buttons column (custom command column)**    
Contains buttons that perform custom actions. See [Create a Column with Custom Buttons](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Command_Columns/#Create_a_Column_with_Custom_Buttons).

- **Editing column**        
A type of buttons column. Contains editing controls. See [Customize the Editing Column](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Command_Columns/#Customize_the_Editing_Column).

![DevExtreme HTML5 JavaScript DataGrid CommandColumns EditingColumn AdaptiveColumn](/Content/images/doc/19_2/DataGrid/Command_Columns.png)
