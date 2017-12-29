To execute certain commands before or after the **Popover** was shown/hidden, handle the [showing](/Documentation/ApiReference/UI_Widgets/dxPopover/Events/#showing), [shown](/Documentation/ApiReference/UI_Widgets/dxPopover/Events/#shown), [hiding](/Documentation/ApiReference/UI_Widgets/dxPopover/Events/#hiding) or [hidden](/Documentation/ApiReference/UI_Widgets/dxPopover/Events/#hidden) event. If the event handling function is not going to be changed during the lifetime of the widget, assign it to the corresponding **on*EventName*** option when you configure the widget.

---
##### jQuery 

    <!--JavaScript-->$(function () {
        $("#popoverContainer").dxPopover({
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

##### Angular

    <!--HTML-->
    <dx-popover ...
        (onShowing)="onShowing($event)"
        (onShown)="onShown($event)"
        (onHiding)="onHiding($event)"
        (onHidden)="onHidden($event)">
    </dx-popover>

    <!--TypeScript-->
    import { DxPopoverModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        onShowing (e) {
            // Handler of the "showing" event
        },
        onShown (e) {
            // Handler of the "shown" event
        },
        onHiding (e) {
            // Handler of the "hiding" event
        },
        onHidden (e) {
            // Handler of the "hidden" event
        }
    }
    @NgModule({
        imports: [
            // ...
            DxPopoverModule
        ],
        // ...
    })

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Popover()
        // ...
        .OnShowing("popover_onShowing")
        .OnShown("popover_onShown")
        .OnHiding("popover_onHiding")
        .OnHidden("popover_onHidden")
    )

    <script type="text/javascript">
        function popover_onShowing (e) {
            // Handler of the "showing" event
        },
        function popover_onShown (e) {
            // Handler of the "shown" event
        },
        function popover_onHiding (e) {
            // Handler of the "hiding" event
        },
        function popover_onHidden (e) {
            // Handler of the "hidden" event
        }
    </script>

---

If you are going to change event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the events using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxPopover/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var hiddenEventHandler1 = function (e) {
        // First handler of the "hidden" event
    };

    var hiddenEventHandler2 = function (e) {
        // Second handler of the "hidden" event
    };

    $("#popoverContainer").dxPopover("instance")
        .on('hidden', hiddenEventHandler1)
        .on('hidden', hiddenEventHandler2);

#####See Also#####
#include common-link-handleevents
- [Popover - Customize the Content](/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Customize_the_Content/)
- [Popover - Resize and Relocate](/Documentation/Guide/Widgets/Popover/Resize_and_Relocate/)
- [Popover Demos](/Demos/WidgetsGallery/#demo/dialogs_and_notifications-popover-overview)