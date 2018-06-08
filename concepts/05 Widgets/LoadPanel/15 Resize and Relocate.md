To change the size of the **LoadPanel**, specify the **height** and **width** options.

---
##### jQuery

    <!--JavaScript-->$(function() {
		$("#loadPanelContainer").dxLoadPanel({
            closeOnOutsideClick: true,
            height: 300,
            width: 500
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
        [height]="300"
        [width]="500">
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

If you need to position the **LoadPanel** against a specific element on your page, set the [position](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#position) option.

---
##### jQuery

    <!--JavaScript-->$(function() {
		$("#loadPanelContainer").dxLoadPanel({
            closeOnOutsideClick: true,
            position: {
                my: "left",
                at: "left",
                of: "#targetElement"
            }
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
        [(visible)]="isLoadPanelVisible">
        <dxo-position
            my="left"
            at="left"
            of="#targetElement">
        </dxo-position>
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

This configuration of the **position** option reads as follows: "place **my** _left_ side **at** the _left_ side **of** the *"#targetElement"*.

#####See Also#####
- [LoadPanel - Customize the Appearance](/Documentation/Guide/Widgets/LoadPanel/Customize_the_Appearance/)
- [LoadPanel Demos](/Demos/WidgetsGallery/#demo/dialogs_and_notifications-load_panel-overview)
- [LoadPanel API Reference](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/)

[tags]loadPanel, load panel, overlay, size, height, width, position