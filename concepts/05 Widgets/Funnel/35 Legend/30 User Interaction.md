A user can interact with the legend by hovering the pointer over legend items. This causes the [onHoverChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#onHoverChanged) event handler to execute. Refer to the [Funnel Item Hover Events](/Documentation/Guide/Widgets/Funnel/Funnel_Items/Hover/#Events) topic for details.

In addition, a user can click legend items. The widget does not react to this by default, but you can instruct it to by handling the [legendClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Events/#legendClick) event. If the handling function is not going to be changed at runtime, assign it to the [onLegendClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#onLegendClick) option when you configure the widget. Otherwise, or if you need several handlers for the **legendClick** event, subscribe to it using the [on(eventName, eventHandler)](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            onLegendClick: function (e) {
                var item = e.item;
                // Event handling commands go here
            }
        });

        // ===== or =====
        var legendClickEventHandler1 = function (e) {
            var item = e.item;
            // First handler of the "legendClick" event
        };

        var legendClickEventHandler2 = function (e) {
            var item = e.item;
            // Second handler of the "legendClick" event
        };

        $("#funnelContainer").dxFunnel("instance")
            .on("legendClick", legendClickEventHandler1)
            .on("legendClick", legendClickEventHandler2);
    });

##### Angular

    <!--HTML--><dx-funnel ...
        (onLegendClick)="onLegendClick($event)">
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        onLegendClick (e) {
            var item = e.item;
            // Event handling commands go here
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-handleevents
