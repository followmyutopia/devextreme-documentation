When a tooltip becomes shown or hidden, the **{WidgetName}** raises the [tooltipShown](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Events/#tooltipShown) or [tooltipHidden](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Events/#tooltipHidden) event that you can handle with a function. If the handling function is not going to be changed during the widget's lifetime, assign it to the [onTooltipShown](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Configuration/#onTooltipShown) or [onTooltipHidden](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Configuration/#onTooltipHidden) option respectively, when you configure the widget.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            onTooltipShown: function (e) {
                var point = e.target;
                // Handler of the "tooltipShown" event
            },
            onTooltipHidden: function (e) {
                var point = e.target;
                // Handler of the "tooltipHidden" event
            }
        });
    });

##### Angular

    <!--HTML--><dx-{widget-name} ...
        (onTooltipShown)="onTooltipShown($event)"
        (onTooltipHidden)="onTooltipHidden($event)">
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from 'devextreme-angular';
    // ...
    export class AppComponent {
        onTooltipShown (e) {
            var point = e.target;
            // Handler of the "tooltipShown" event
        },
        onTooltipHidden (e) {
            var point = e.target;
            // Handler of the "tooltipHidden" event
        }
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

---

If you are going to change the event handlers at runtime or if you need to attach several handlers to a single event, subscribe to this event using the [on(eventName, eventHandler)](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var tooltipShownHandler1 = function (e) {
        var point = e.target;
        // First handler of the "tooltipShown" event
    };

    var tooltipShownHandler2 = function (e) {
        var point = e.target;
        // Second handler of the "tooltipShown" event
    };

    $("#{widgetName}Container").dx{WidgetName}("instance")
        .on("tooltipShown", tooltipShownHandler1)
        .on("tooltipShown", tooltipShownHandler2);

#####See Also#####
#include common-link-handleevents