When the **Popup** is shown, the area beneath it can be shaded. To enable this behavior, assign **true** to the [shading](/api-reference/10%20UI%20Widgets/dxOverlay/1%20Configuration/shading.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#shading') option. The shading color is specified by the [shadingColor](/api-reference/10%20UI%20Widgets/dxOverlay/1%20Configuration/shadingColor.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#shadingColor') option.

---
##### jQuery

    <!--HTML-->
    <div id="popupContainer">
        <p>Popup content</p>
    </div>

    <!--JavaScript-->$(function() {
		$("#popupContainer").dxPopup({
            title: "Popup Title",
            visible: true,
            shading: true,
            shadingColor: "rgba(0, 0, 0, 0.2)"
        });
    });

##### Angular

    <!--HTML-->
    <dx-popup
        title="Popup Title"
        [(visible)]="isPopupVisible"
        [shading]="true"
        shadingColor="rgba(0, 0, 0, 0.2)">
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

Note that the default shading color is transparent.

#####See Also#####
- [Popup - Customize the Content](/concepts/05%20Widgets/Popup/05%20Customize%20the%20Appearance/05%20Customize%20the%20Content/Customize%20the%20Content.md '/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Customize_the_Content/')
- [Popup - Customize the Title](/concepts/05%20Widgets/Popup/05%20Customize%20the%20Appearance/10%20Customize%20the%20Title.md '/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Customize_the_Title/')
- [Popup - Specify Toolbar Items](/concepts/05%20Widgets/Popup/05%20Customize%20the%20Appearance/20%20Specify%20Toolbar%20Items.md '/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Specify_Toolbar_Items/')
- [Popup Demos](/Demos/WidgetsGallery/Demo/Popup/Overview/)
- [Popup API Reference](/api-reference/10%20UI%20Widgets/dxPopup/dxPopup.md '/Documentation/ApiReference/UI_Widgets/dxPopup/')

[tags]popup, overlay, shading, background, shading color