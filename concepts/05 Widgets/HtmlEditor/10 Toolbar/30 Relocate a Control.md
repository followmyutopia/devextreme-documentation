Toolbar controls are aligned to the left (right if [rtlEnabled](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/#rtlEnabled) is **true**) and preserve the order they have in the **items** array.  Use the [location](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#location) option to override the order.

This option accepts the *"before"*, *"center"*, and *"after"* values that specify a toolbar control's location relative to that of other controls. In the code below, it is used to order controls as follows: `alignLeft`, `alignRight`, `color`, `background`, `undo`, and `redo`. Note that `alignLeft` and `alignRight` assume the default value, *"before"*.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#htmlEditorContainer").dxHtmlEditor({
            toolbar: {
                items: [
                    { formatName: "undo", location: "after" }, 
                    { formatName: "redo", location: "after" },
                    "alignLeft", "alignRight",
                    { formatName: "color", location: "center" }, 
                    { formatName: "background", location: "center" }
                ]
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-html-editor>
        <dxo-toolbar>
            <dxi-item formatName="undo" location="after"></dxi-item>
            <dxi-item formatName="redo" location="after"></dxi-item>
            <dxi-item formatName="alignLeft"></dxi-item>
            <dxi-item formatName="alignRight"></dxi-item>
            <dxi-item formatName="color" location="center"></dxi-item>
            <dxi-item formatName="background" location="center"></dxi-item>
        </dxo-toolbar>
    </dx-html-editor>

    <!--TypeScript-->
    import { DxHtmlEditorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxHtmlEditorModule
        ],
        // ...
    })

---

If the toolbar cannot fit all the controls, some of them are collected in the overflow menu. Use the [locateInMenu](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#locateInMenu) option to change this behavior:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#htmlEditorContainer").dxHtmlEditor({
            toolbar: {
                items: [
                    // ...
                    { formatName: "undo", locateInMenu: "always" }, 
                    { formatName: "color", locateInMenu: "never" }
                ]
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-html-editor>
        <dxo-toolbar>
            <!-- ... -->
            <dxi-item formatName="undo" locateInMenu="always"></dxi-item>
            <dxi-item formatName="color" locateInMenu="never"></dxi-item>
        </dxo-toolbar>
    </dx-html-editor>

    <!--TypeScript-->
    import { DxHtmlEditorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxHtmlEditorModule
        ],
        // ...
    })

---