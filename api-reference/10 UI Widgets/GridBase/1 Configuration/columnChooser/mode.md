===========================================================================
<!--default-->'dragAndDrop'<!--/default-->
<!--acceptValues-->'dragAndDrop' | 'select'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how a user manages columns using the column chooser.
<!--/shortDescription-->

<!--fullDescription-->
In drag-and-drop mode, a user moves column headers to and from the column chooser by drag-and-drop. In select mode, the user selects column headers in the column chooser using check boxes. The select mode is designed primarily for touch-enabled devices. On mouse-equipped platforms, either mode is suitable.

#include common-ref-enum with {
    enum: "`GridColumnChooserMode`",
    values: "`DragAndDrop` and `Select`"
}
<!--/fullDescription-->