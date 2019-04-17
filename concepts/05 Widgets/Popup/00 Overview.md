The **Popup** widget is a pop-up window overlaying the current view. 

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/dialogs_and_notifications-popup-overview"
}

The following code adds a simple **Popup** to your page, along with a [Button](/Documentation/Guide/Widgets/Button/Overview/) that invokes it. The simplest configuration of the **Popup** requires the content and [title](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#title) to be specified. 

---
##### jQuery

    <!--HTML-->
    <div id="popupContainer">
        <p>Popup content</p>
    </div>
    <div id="buttonContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#popupContainer").dxPopup({
            title: "Popup Title"
        });
                
        $("#buttonContainer").dxButton({
            text: "Show the Popup", 
            onClick: function () {
                $("#popupContainer").dxPopup("show");
            } 
        });
    });

##### Angular

    <!--HTML-->
    <dx-popup
        title="Popup Title"
        [(visible)]="isPopupVisible">
        <div *dxTemplate="let data of 'content'">
            <p>Popup content</p>
        </div>
    </dx-popup>
    <dx-button
        text="Show the Popup"
        (onClick)="isPopupVisible = true">
    </dx-button>

    <!--TypeScript-->
    import { DxPopupModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isPopupVisible: boolean = false;
    }
    @NgModule({
        imports: [
            // ...
            DxPopupModule,
            DxButtonModule
        ],
        // ...
    })

---

There are several ways to specify the content of the **Popup**. Learn more in the [Customize the Content](/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Customize_the_Content/) article. The **Popup** can also be displayed with a toolbar. For detailed information, see the [Specify Toolbar Items](/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Specify_Toolbar_Items/) topic. 

#####See Also#####
#include common-link-configurewidget
- [Popup - Customize the Appearance](/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Customize_the_Content/)
- [Popup - Show and Hide the Popup](/Documentation/Guide/Widgets/Popup/Show_and_Hide_the_Popup/)
- [Popup - Resize and Relocate](/Documentation/Guide/Widgets/Popup/Resize_and_Relocate/)
- [Popup API Reference](/Documentation/ApiReference/UI_Widgets/dxPopup/)

[tags]popup, overview, overlay
