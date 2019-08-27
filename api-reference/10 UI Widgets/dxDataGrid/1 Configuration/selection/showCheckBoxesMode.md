---
id: dxDataGrid.Options.selection.showCheckBoxesMode
acceptValues: 'always' | 'none' | 'onClick' | 'onLongTap'
type: String
default: 'onClick'
---
---
##### shortDescription
Specifies when to display check boxes in rows. Applies only if **selection**.[mode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#mode) is *"multiple"*.

---
The selection behavior in multiple mode depends on the check boxes' visibility. Selection is proper multiple only when check boxes are visible. In other cases, the selection behavior resembles the single mode: clicking (or tapping) a row selects it, but cancels the selection of other rows. However, a user still can select multiple rows in this mode using a click and hold, or long tap.

Check boxes can change their visibility state at runtime. The following list describes how they behave in different modes:

- *"onClick"*   
Check boxes appear once a user clicks anywhere in the selection column, or if two or more rows are selected [programmatically](/Documentation/Guide/Widgets/DataGrid/Selection/#API/Initial_and_Runtime_Selection) or using [keyboard shortcuts](/Documentation/Guide/Widgets/DataGrid/Keyboard_Support/). Check boxes disappear once rows selection is canceled.

- *"onLongTap"*     
The selection column with all the check boxes appears and disappears on long tap, and on click and hold.

- *"always"*    
The selection column with all the check boxes is always visible. A user can select a row by clicking the check box or its grid cell, but not the row itself.

- *"none"*  
Check boxes are always hidden, which means that selection is always single-like in this mode.

[Keyboard shortcuts](/Documentation/Guide/Widgets/DataGrid/Keyboard_Support/) work identically regardless of the chosen mode.

#include common-ref-enum with {
    enum: "`GridSelectionShowCheckBoxesMode`",
    values: "`OnClick`, `OnLongTap`, `Always`, and `None`"
}

#####See Also#####
- [Selection - User Interaction](/Documentation/Guide/Widgets/DataGrid/Selection/#User_Interaction)