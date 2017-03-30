<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'Are you sure you want to delete this record?'<!--/default-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a message to be displayed by a confirmation window. Setting this option makes sense only when the [edit mode]({basewidgetpath}/Configuration/editing/#mode) is *"row"*.
<!--/shortDescription-->

<!--fullDescription-->
A confirmation window appears when a user clicks a delete button, which accompanies each grid record if a user is [enabled to remove]({basewidgetpath}/Configuration/editing/#allowDeleting) records. This window also appears when the [deleteRow(rowIndex)]({basewidgetpath}/Methods/#deleteRowrowIndex) method is called. The confirmation window is entitled with text specified by the [confirmDeleteTitle]({basewidgetpath}/Configuration/editing/texts/#confirmDeleteTitle) option and contains a message specified by the **confirmDeleteMessage** option. To prevent the confirmation window from appearing, assign an empty string to the latter option.
<!--/fullDescription-->