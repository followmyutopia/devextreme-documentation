<!--id-->dxMenuBase.Options.selectionMode<!--/id-->
===========================================================================
<!--default-->none<!--/default-->
<!--acceptValues-->'none' | 'single'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the selection mode supported by the menu.
<!--/shortDescription-->

<!--fullDescription-->
To select an item on click and to visually display the selection, set the [selectByClick](/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#selectByClick) option to **true**. Note that in this case the **selectionMode** should be *"single"*.

#include common-ref-enum with {
    enum: "`MenuSelectionMode`",
    values: "`Single` and `None`"
}
<!--/fullDescription-->