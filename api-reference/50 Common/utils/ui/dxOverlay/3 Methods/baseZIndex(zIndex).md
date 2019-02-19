===================================================================
<!--module-->ui/overlay<!--/module-->
<!--export-->dxOverlay.baseZIndex<!--/export-->
===================================================================

<!--shortDescription-->
Specifies the base z-index for all overlay widgets.
<!--/shortDescription-->

<!--paramName1-->zIndex<!--/paramName1-->
<!--paramType1-->Number<!--/paramType1-->
<!--paramDescription1-->
The z-index value.
<!--/paramDescription1-->

<!--fullDescription-->
The z-index of all overlay widgets located on a page is calculated based on the value passed to this method. Since an overlay widget is added, its z-index is increased by one relative to a previously added overlay widget.

The following example demonstrates how to call the method.

    DevExpress.ui.dxOverlay.baseZIndex(2000);
    // ===== or when using modules =====
    import * as overlay from 'devextreme/ui/overlay';
    overlay.baseZIndex(2000);

By default, the base z-index for all overlay widgets except **Toast** is 1500.

[note]The base z-index for **Toast** widgets is greater than the value specified by this method by 8000. For example, if you pass 2000 to the **baseZIndex** method, the **Toast** base z-index is 10000.

The method affects the following widgets.

- [LoadPanel](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/)
- [Popover](/Documentation/ApiReference/UI_Widgets/dxPopover/)
- [Popup](/Documentation/ApiReference/UI_Widgets/dxPopup/)
- [Toast](/Documentation/ApiReference/UI_Widgets/dxToast/)
- [Tooltip](/Documentation/ApiReference/UI_Widgets/dxTooltip/)
<!--/fullDescription-->