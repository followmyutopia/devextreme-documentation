If you need to use a 3rd-party loading indicator inside the **LoadPanel**, assign its URL to the [indicatorSrc](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#indicatorSrc) option.

---
##### jQuery

    <!--JavaScript-->$(function() {
		$("#loadPanelContainer").dxLoadPanel({
            closeOnOutsideClick: true,
            indicatorSrc: "https://js.devexpress.com/Content/data/loadingIcons/rolling.svg" 
        });
        
        $("#buttonContainer").dxButton({
            text: "Show the Load Panel", 
            onClick: function () {
                $("#loadPanelContainer").dxLoadPanel("show");
            } 
        });
    });

##### Angular

    <!--HTML-->
    <dx-load-panel
        [closeOnOutsideClick]="true"
        [(visible)]="isLoadPanelVisible"
        [indicatorSrc]="indicatorUrl">
    </dx-load-panel>
    <dx-button
        text="Show the Load Panel"
        (onClick)="isLoadPanelVisible = true">
    </dx-button>

    <!--TypeScript-->
    import { DxLoadPanelModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isLoadPanelVisible: boolean = false;
        indicatorUrl: string = "https://js.devexpress.com/Content/data/loadingIcons/rolling.svg";
    }
    @NgModule({
        imports: [
            // ...
            DxLoadPanelModule,
            DxButtonModule
        ],
        // ...
    })

---

In case you do not need any loading indicator to be shown at all, assign **false** to the [showIndicator](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#showIndicator) option.

---
##### jQuery

    <!--JavaScript-->$(function() {
		$("#loadPanelContainer").dxLoadPanel({
            closeOnOutsideClick: true,
            showIndicator: false
        });
        
        $("#buttonContainer").dxButton({
            text: "Show the Load Panel", 
            onClick: function () {
                $("#loadPanelContainer").dxLoadPanel("show");
            } 
        });
    });

##### Angular

    <!--HTML-->
    <dx-load-panel
        [closeOnOutsideClick]="true"
        [(visible)]="isLoadPanelVisible"
        [showIndicator]="false">
    </dx-load-panel>
    <dx-button
        text="Show the Load Panel"
        (onClick)="isLoadPanelVisible = true">
    </dx-button>

    <!--TypeScript-->
    import { DxLoadPanelModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isLoadPanelVisible: boolean = false;
    }
    @NgModule({
        imports: [
            // ...
            DxLoadPanelModule,
            DxButtonModule
        ],
        // ...
    })

---

#####See Also#####
- [LoadPanel - Change the Text](/Documentation/Guide/Widgets/LoadPanel/Customize_the_Appearance/Change_the_Text/)
- [LoadPanel - Hide the Pane](/Documentation/Guide/Widgets/LoadPanel/Customize_the_Appearance/Hide_the_Pane/)
- [LoadPanel - Color the Shading of the Background](/Documentation/Guide/Widgets/LoadPanel/Customize_the_Appearance/Color_the_Shading_of_the_Background/)
- [LoadPanel - Resize and Relocate](/Documentation/Guide/Widgets/LoadPanel/Resize_and_Relocate/)
- [LoadPanel Demos](/Demos/WidgetsGallery/#demo/dialogs_and_notifications-load_panel-overview)
- [LoadPanel API Reference](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/)

[tags]loadPanel, load panel, overlay, loading indicator, customize indicator, hide indicator