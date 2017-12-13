To execute certain commands before or after the **ContextMenu** was opened/closed, handle the [showing](/Documentation/ApiReference/UI_Widgets/dxContextMenu/Events/#showing), [shown](/Documentation/ApiReference/UI_Widgets/dxContextMenu/Events/#shown), [hiding](/Documentation/ApiReference/UI_Widgets/dxContextMenu/Events/#hiding) or [hidden](/Documentation/ApiReference/UI_Widgets/dxContextMenu/Events/#hidden) event. If the event handling function is not going to be changed during the lifetime of the widget, assign it to the corresponding **on*EventName*** option when you configure the widget.

---
#####jQuery

    <!--JavaScript-->$(function () {
        $("#contextMenuContainer").dxContextMenu({
            // ...
            onShowing: function (e) {
                // Handler of the "showing" event
            },
            onShown: function (e) {
                // Handler of the "shown" event
            },
            onHiding: function (e) {
                // Handler of the "hiding" event
            },
            onHidden: function (e) {
                // Handler of the "hidden" event
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-context-menu ...
        (onShowing)="handleShowingEvent($event)"
        (onShown)="handleShownEvent($event)"
        (onHiding)="handleHidingEvent($event)"
        (onHidden)="handleHiddenEvent($event)">
    </dx-context-menu>

    <!--TypeScript-->
    import { DxContextMenuModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
        handleShowingEvent (e) {
            // Handler of the "showing" event
        }
        handleShownEvent (e) {
            // Handler of the "shown" event
        }
        handleHidingEvent (e) {
            // Handler of the "hiding" event
        }
        handleHiddenEvent (e) {
            // Handler of the "hidden" event
        }
    }
    @NgModule({
         imports: [
             // ...
             DxContextMenuModule
         ],
         // ...
     })

---

If you are going to change event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the events using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxContextMenu/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var hiddenEventHandler1 = function (e) {
        // First handler of the "hidden" event
    };

    var hiddenEventHandler2 = function (e) {
        // Second handler of the "hidden" event
    };

    $("#contextMenuContainer").dxContextMenu("instance")
        .on('hidden', hiddenEventHandler1)
        .on('hidden', hiddenEventHandler2);

#####See Also#####
#include common-link-handleevents
- [ContextMenu - Access the Clicked Item](/Documentation/Guide/Widgets/ContextMenu/Access_the_Clicked_Item/)
- [Toast Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogs_and_notifications-toast-overview)
- [Toast API Reference](/Documentation/ApiReference/UI_Widgets/dxToast/)