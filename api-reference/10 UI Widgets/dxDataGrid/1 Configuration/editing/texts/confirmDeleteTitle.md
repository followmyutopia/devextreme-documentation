<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->''<!--/default-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies text to be displayed in the title of a confirmation window. Setting this option makes sense only when the [edit mode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#mode) is *"row"*.
<!--/shortDescription-->

<!--fullDescription-->
A confirmation window appears when a user clicks a delete button, which accompanies each grid record if a user is [enabled to remove](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#allowDeleting) records. This window also appears when the [deleteRow(rowIndex)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#deleteRowrowIndex) method is called. The confirmation window is entitled with text specified by the **confirmDeleteTitle** option and contains a message specified by the [confirmDeleteMessage](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/texts/#confirmDeleteMessage) option. To prevent the confirmation window from appearing, assign an empty string to the latter option.
<!--/fullDescription-->