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

<img src="/Content/images/doc/18_2/{WidgetName}/visual_elements/column-chooser_draganddrop-mode.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget {WidgetName} ColumnChooser" style="margin-right:60px" /> <img src="/Content/images/doc/18_2/{WidgetName}/visual_elements/column-chooser_select-mode.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget {WidgetName} ColumnChooser" style="margin-right:90px" />

[note] When the mode is *"select"*, the column chooser does not hide column headers from the [group panel](/Documentation/Guide/Widgets/DataGrid/Grouping/#User_Interaction/Group_Data) (does not ungroup data).

#include common-ref-enum with {
    enum: "`GridColumnChooserMode`",
    values: "`DragAndDrop` and `Select`"
}
<!--/fullDescription-->