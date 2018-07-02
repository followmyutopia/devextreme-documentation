Specify the **height** and **width** options to change the **LoadPanel**'s size:

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

The [container](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#container) option specifies the **LoadPanel**'s container. The container is shaded when the **LoadPanel** is visible; the **LoadPanel** inherits styles from the container and is scrolled with. To position the widget near a specific element, use the [position](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#position) option:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#loadPanelContainer").dxLoadPanel({
            closeOnOutsideClick: true,
            container: "#container",
            position: { my: "left", at: "left", of: "#targetElement" }
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
        container="#container"
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

This configuration of the **position** option reads as follows: "place **my** _left_ side **at** the _left_ **of** the *"#targetElement"*.

#####See Also#####
- [Customize the Appearance](/Documentation/Guide/Widgets/LoadPanel/Customize_the_Appearance/)
- [LoadPanel Demos](/Demos/WidgetsGallery/#demo/dialogs_and_notifications-load_panel-overview)

[tags]loadPanel, load panel, overlay, size, height, width, position
