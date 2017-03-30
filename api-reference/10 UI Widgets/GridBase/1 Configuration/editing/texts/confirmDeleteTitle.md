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
Specifies text to be displayed in the title of a confirmation window. Setting this option makes sense only when the [edit mode]({basewidgetpath}/Configuration/editing/#mode) is *"row"*.
<!--/shortDescription-->

<!--fullDescription-->
A confirmation window appears when a user clicks a delete button, which accompanies each grid record if a user is [enabled to remove]({basewidgetpath}/Configuration/editing/#allowDeleting) records. This window also appears when the [deleteRow(rowIndex)]({basewidgetpath}/Methods/#deleteRowrowIndex) method is called. The confirmation window is entitled with text specified by the **confirmDeleteTitle** option and contains a message specified by the [confirmDeleteMessage]({basewidgetpath}/Configuration/editing/texts/#confirmDeleteMessage) option. To prevent the confirmation window from appearing, assign an empty string to the latter option.
<!--/fullDescription-->