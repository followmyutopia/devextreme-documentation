When a tooltip becomes shown or hidden, the **Chart** fires the [tooltipShown](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#tooltipShown) or [tooltipHidden](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#tooltipHidden) event that you can handle with a function. If the handling function is not going to be changed during the lifetime of the widget, assign it to the [onTooltipShown](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onTooltipShown) or [onTooltipHidden](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onTooltipHidden) option respectively, when you configure the widget.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
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

    <!--HTML--><dx-chart
        (onTooltipShown)="onTooltipShown($event)"
        (onTooltipHidden)="onTooltipHidden($event)">
    </dx-chart>

    <!--JavaScript-->
    export class AppComponent {
        onTooltipShown (e) {
            let point = e.target;
            // Handler of the "tooltipShown" event
        },
        onTooltipHidden (e) {
            let point = e.target;
            // Handler of the "tooltipHidden" event
        }
    }

---

If you are going to change the event handlers at runtime or if you need to attach several handlers to a single event, subscribe to this event using the [on(eventName, eventHandler)](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#oneventName_eventHandler) method.  This approach is more typical of jQuery.

    <!--JavaScript-->
    var tooltipShownHandler1 = function (e) {
        var point = e.target;
        // First handler of the "tooltipShown" event
    };

    var tooltipShownHandler2 = function (e) {
        var point = e.target;
        // Second handler of the "tooltipShown" event
    };

    $("#chartContainer").dxChart("instance")
        .on("tooltipShown", tooltipShownHandler1)
        .on("tooltipShown", tooltipShownHandler2);

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

[tags]chart, tooltip, handle events, tooltipShown, tooltipHidden
