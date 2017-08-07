By default, the **ActionSheet** comes up from the bottom of the page. If you set the [usePopover](/Documentation/ApiReference/UI_Widgets/dxActionSheet/Configuration/#usePopover) option to *true*, the action sheet will pop over a certain element on the page. Use the [target](/Documentation/ApiReference/UI_Widgets/dxActionSheet/Configuration/#target) option to specify this element.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#actionSheetContainer").dxActionSheet({
            dataSource: actionSheetData,
            usePopover: true,
            target: "#actionSheetTarget"
        });
    });

##### Angular

    <!--HTML-->
    <dx-action-sheet
        [dataSource]="actionSheetData"
        [usePopover]="true"
        target="#actionSheetTarget">
    </dx-action-sheet>

---

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Action_Sheet/PopoverMode/jQuery/iOS/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>

#####See Also#####
- [ActionSheet - Customize Item Appearance](/Documentation/Guide/Widgets/ActionSheet/Customize_Item_Appearance/)
- [ActionSheet API Reference](/Documentation/ApiReference/UI_Widgets/dxActionSheet/)
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)

[tags]action sheet, actionSheet, display mode, target element