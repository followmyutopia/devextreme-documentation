To change the size of the **Toast**, specify the [height](/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#height) and [width](/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#width) options.

---
#####jQuery

    <!--HTML--><div id="toastContainer"></div>
    <div id="buttonContainer"></div>

    <!--JavaScript-->$(function() {
        $("#toastContainer").dxToast({
            message: "Connection problem",
            type: "error",
            height: 55,
            width: 300
        });

        $("#buttonContainer").dxButton({
            text: "Show the Toast", 
            onClick: function () {
                $("#toastContainer").dxToast("show");
            } 
        });
    });

#####Angular

    <!--HTML-->
    <dx-toast
        [(visible)]="isVisible"
        type="error"
        message="Connection problem"
        [height]="55"
        [width]="300">
    </dx-toast>
    <dx-button
        text="Show the Toast"
        (onClick)="isVisible = true">
    </dx-button>

    <!--TypeScript-->
    import { DxToastModule, DxButtonModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        isVisible: boolean = false;
    }
    @NgModule({
         imports: [
             DxButtonModule,
             DxToastModule,
             // ...
         ],
         // ...
     })

---

If you need to position the **Toast** against a specific element on your page, set the [position](/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#position) option.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#toastContainer").dxToast({
            message: "Connection problem",
            type: "error",
            position: {
                my: "left",
                at: "left",
                of: "#targetElement"
            }
        });

        $("#buttonContainer").dxButton({
            text: "Show the Toast", 
            onClick: function () {
                $("#toastContainer").dxToast("show");
            } 
        });
    });


#####Angular

    <!--HTML-->
    <dx-toast
        [(visible)]="isVisible"
        type="error"
        message="Connection problem">
        <dxo-position
            my="left"
            at="left"
            of="#targetElement">
        </dxo-position>
    </dx-toast>
    <dx-button
        text="Show the Toast"
        (onClick)="isVisible = true">
    </dx-button>

    <!--TypeScript-->
    import { DxToastModule, DxButtonModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        isVisible: boolean = false;
    }
    @NgModule({
         imports: [
             DxButtonModule,
             DxToastModule,
             // ...
         ],
         // ...
     })

---

This configuration of the **position** option reads as follows: "place **my** _left_ side **at** the _left_ side **of** the *"#targetElement"*.

#####See Also#####
- [Toast - Customize the Content](/Documentation/Guide/Widgets/Toast/Customize_the_Content/)
- [Toast Demos](/Demos/WidgetsGallery/#demo/dialogs_and_notifications-toast-overview)
- [Toast API Reference](/Documentation/ApiReference/UI_Widgets/dxToast/)

[tags]toast, overlay, template, size, height, width, position