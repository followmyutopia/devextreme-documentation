To execute certain commands before or after the **Tooltip** was shown/hidden, handle the [showing](/Documentation/ApiReference/UI_Widgets/dxTooltip/Events/#showing), [shown](/Documentation/ApiReference/UI_Widgets/dxTooltip/Events/#shown), [hiding](/Documentation/ApiReference/UI_Widgets/dxTooltip/Events/#hiding) or [hidden](/Documentation/ApiReference/UI_Widgets/dxTooltip/Events/#hidden) event. If the event handling function is not going to be changed during the lifetime of the widget, assign it to the corresponding **on*EventName*** option when you configure the widget.

---
##### jQuery 

    <!--JavaScript-->$(function () {
        $("#tooltipContainer").dxTooltip({
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
    <dx-tooltip ...
        (onShowing)="onShowing($event)"
        (onShown)="onShown($event)"
        (onHiding)="onHiding($event)"
        (onHidden)="onHidden($event)">
    </dx-tooltip>

    <!--TypeScript-->
    import { DxTooltipModule } from 'devextreme-angular';
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
            DxTooltipModule
        ],
        // ...
    })

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Tooltip()
        // ...
        .OnShowing("tooltip_onShowing")
        .OnShown("tooltip_onShown")
        .OnHiding("tooltip_onHiding")
        .OnHidden("tooltip_onHidden")
    )

    <script type="text/javascript">
        function tooltip_onShowing (e) {
            // Handler of the "showing" event
        },
        function tooltip_onShown (e) {
            // Handler of the "shown" event
        },
        function tooltip_onHiding (e) {
            // Handler of the "hiding" event
        },
        function tooltip_onHidden (e) {
            // Handler of the "hidden" event
        }
    </script>

---

If you are going to change event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the events using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxTooltip/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var hiddenEventHandler1 = function (e) {
        // First handler of the "hidden" event
    };

    var hiddenEventHandler2 = function (e) {
        // Second handler of the "hidden" event
    };

    $("#tooltipContainer").dxTooltip("instance")
        .on('hidden', hiddenEventHandler1)
        .on('hidden', hiddenEventHandler2);

#####See Also#####
#include common-link-handleevents
- [Tooltip - Customize the Content](/Documentation/Guide/Widgets/Tooltip/Customize_the_Content/)
- [Tooltip - Resize and Relocate](/Documentation//Guide/Widgets/Tooltip/Resize_and_Relocate/)
- [Tooltip Demos](/Demos/WidgetsGallery/#demo/dialogs_and_notifications-tooltip-overview)
- [Tooltip API Reference](/Documentation/ApiReference/UI_Widgets/dxTooltip/)