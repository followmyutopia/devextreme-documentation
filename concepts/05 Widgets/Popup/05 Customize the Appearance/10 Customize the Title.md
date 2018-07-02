By default, the **Popup** allocates a part of its area to the title, regardless of whether you specified the title text or did not. To hide the title, set the [showTitle](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#showTitle) option to **false**. Besides the text, the title area also contains a button that closes the **Popup**. To hide this button alone, assign **false** to the [showCloseButton](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#showCloseButton) option. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#popupContainer").dxPopup({
            showTitle: false,
            visible: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-popup
        [showTitle]="false"
        [(visible)]="isPopupVisible">
    </dx-popup>

    <!--TypeScript-->
    import { DxPopupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isPopupVisible: boolean = true;
    }
    @NgModule({
        imports: [
            // ...
            DxPopupModule
        ],
        // ...
    })

---

If you need to define the title completely, specify a template for it as shown in the following code:

---
##### jQuery

    <!--HTML-->
    <div id="popupContainer">
        <p>Popup content</p>
        <div data-options="dxTemplate: { name: 'title' }">
            <p>Title template</p>
        </div>
    </div>

    <!--JavaScript-->
    $(function() {
        $("#popupContainer").dxPopup({
            titleTemplate: "title"
        });
    });

##### Angular

    <!--HTML-->
    <dx-popup
        [(visible)]="isPopupVisible"
        titleTemplate="title">
        <div *dxTemplate="let data of 'content'">
            <p>Popup content</p>
        </div>
        <div *dxTemplate="let data of 'title'">
            <p>Title template</p>
        </div>
    </dx-popup>

    <!--TypeScript-->
    import { DxPopupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isPopupVisible: boolean = true;
    }
    @NgModule({
        imports: [
            // ...
            DxPopupModule
        ],
        // ...
    })

---

You can switch title templates on the fly just as you can do with content templates. Refer to the [Switching Templates On the Fly](/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Customize_the_Content/#Switching_Templates_On_the_Fly) topic for more information.

#####See Also#####
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
- [Popup - Customize the Content](/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Customize_the_Content/)
- [Popup - Specify Toolbar Items](/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Specify_Toolbar_Items/)
- [Popup - Color the Shading of the Background](/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Color_the_Shading_of_the_Background/)
- [Popup Demos](/Demos/WidgetsGallery/#demo/dialogs_and_notifications-popup-overview)
- [Popup API Reference](/Documentation/ApiReference/UI_Widgets/dxPopup/)

[tags]popup, title, show title, title template, close button