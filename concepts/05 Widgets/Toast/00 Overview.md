The **Toast** is a widget that provides pop-up notifications.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/dialogs_and_notifications-toast-overview"
}

The **Toast** widget does not need to be created on the page before it can be shown. You can simply call the [notify(message, type, displayTime)](/Documentation/ApiReference/Common/utils/ui/#notifymessage_type_displayTime) method with values for the [message](/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#message), [type](/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#type) and [displayTime](/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#displayTime) options passed as the arguments.

---
#####jQuery

    <!--JavaScript-->DevExpress.ui.notify("Connection problem", "error", 3000)

#####Angular

    <!--TypeScript-->
    import notify from 'devextreme/ui/notify';
    // ...
    export class AppComponent {
        showToast() {
            notify("Connection problem", "error", 3000);
        }
    }
    @NgModule({
         imports: [
             // ...
         ],
         // ...
     })

---

If you need to specify other **Toast** options, call the same method, but this time [pass an object as the argument](/Documentation/ApiReference/Common/utils/ui/#notifyoptions). In this object, you can set [any Toast option](/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/).

---
#####jQuery

    <!--JavaScript-->DevExpress.ui.notify({
        message: "Connection problem",
        type: "error",
        displayTime: 3000,
        height: 100
    });

#####Angular

    <!--TypeScript-->
    import notify from 'devextreme/ui/notify';
    // ...
    export class AppComponent {
        showToast() {
            notify({
                message: "Connection problem",
                type: "error",
                displayTime: 3000,
                height: 100
            });
        }
    }
    @NgModule({
         imports: [
             // ...
         ],
         // ...
     })

---

If you are going to reuse the **Toast**, then create it on the page using the following code. Note that in this code, the [Button](/Documentation/Guide/Widgets/Button/Overview/) widget invokes the **Toast**.

---
#####jQuery

    <!--HTML--><div id="toastContainer"></div>
    <div id="buttonContainer"></div>

    <!--JavaScript-->$(function() {
        $("#toastContainer").dxToast({
            message: "Connection problem",
            type: "error"
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
    </dx-toast>
    <dx-button
        text="Show the Toast"
        (onClick)="isVisible = true">
    </dx-button>

    <!--TypeScript-->
    import { DxButtonModule, DxToastModule } from 'devextreme-angular';
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

The appearance of the **Toast** is predefined by its [type](/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#type). Depending on the mood of the message that the **Toast** displays, the **type** can be *"info"*, *"warning"*, *"error"* or *"success"*. There is also the *"custom"* **type** that allows you to define a custom appearance for the **Toast**. Find more information about this in the [Customize the Content](/Documentation/Guide/Widgets/Toast/Customize_the_Content/) article.

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [Toast - Show and Hide](/Documentation/Guide/Widgets/Toast/Show_and_Hide_the_Toast/)
- [Toast - Customize the Content](/Documentation/Guide/Widgets/Toast/Customize_the_Content/)
- [Toast - Resize and Relocate](/Documentation//Guide/Widgets/Toast/Resize_and_Relocate/)
- [Toast API Reference](/Documentation/ApiReference/UI_Widgets/dxToast/)

[tags]toast, overview, overlay