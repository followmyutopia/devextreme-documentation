The **Popup** has two toolbars: top and bottom. Items on these toolbars can be plain text or widgets. To configure the items, populate the [toolbarItems](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/toolbarItems/) array with objects. Each object configures an individual toolbar item. For example, the following code adds two toolbar items to the **Popup**: one is plain text, another is the [Button](/Documentation/Guide/Widgets/Button/) widget. They both occupy the top toolbar, because their [toolbar](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/toolbarItems/#toolbar) option assumes its default value.

---
##### jQuery

    <!--HTML-->
    <div id="popupContainer">
        <p>Popup content</p>
    </div>

    <!--JavaScript-->
    $(function() {
        $("#popupContainer").dxPopup({
            title: "Popup Title",
            visible: true,
            toolbarItems: [{
                text: "Title",
                location: "before"
            }, {
                widget: "dxButton",
                location: "after",
                options: { 
                    text: "Refresh", 
                    onClick: function() {
                        // ...
                    }
                }
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-popup
        title="Popup Title"
        [(visible)]="isPopupVisible">
        <dxi-toolbar-item
            text="Title"
            location="before">
        </dxi-toolbar-item>
        <dxi-toolbar-item
            widget="dxButton"
            location="after"
            [options]="{
                text: 'Refresh',
                onClick: refresh
            }">
        </dxi-toolbar-item>
    </dx-popup>

    <!--TypeScript-->
    import { DxPopupModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isPopupVisible: boolean = true;
        refresh () {
            // ...
        }
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

#####See Also#####
- [Popup - Customize the Content](/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Customize_the_Content/)
- [Popup - Customize the Title](/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Customize_the_Title/)
- [Popup - Color the Shading of the Background](/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Color_the_Shading_of_the_Background/)
- [Popup Demos](/Demos/WidgetsGallery/#demo/dialogs_and_notifications-popup-overview)
- [Popup API Reference](/Documentation/ApiReference/UI_Widgets/dxPopup/)

[tags]popup, overlay, customize, toolbar items, top toolbar, bottom toolbar