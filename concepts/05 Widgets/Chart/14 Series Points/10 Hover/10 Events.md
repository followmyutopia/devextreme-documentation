When a user pauses on a series point, the **Chart** fires the [pointHoverChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#pointHoverChanged) event that you can handle with a function. If the handling function is not going to be changed during the lifetime of the widget, assign it to the [onPointHoverChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onPointHoverChanged) option when you configure the widget. To check whether the pointer entered or left a series, call the [isHovered()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/Methods/#isHovered) method of the series.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            onPointHoverChanged: function (e) {
                var point = e.target;
                if (point.isHovered()) {
                    // Commands to execute when the point is hovered over
                } else {
                    // Commands to execute when the point is hovered out
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart
        (onPointHoverChanged)="onPointHoverChanged($event)">
    </dx-chart>

    <!--TypeScript-->
    export class AppComponent {
        onPointHoverChanged (e) {
            let point = e.target;
            if (point.isHovered()) {
                // Commands to execute when the point is hovered over
            } else {
                // Commands to execute when the point is hovered out
            }
        };
    }

---

If you are going to change the event handler at runtime or if you need to attach several handlers to the **pointHoverChanged** event, subscribe to this event using the [on(eventName, eventHandler)](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var pointHoverChangedHandler1 = function (e) {
        var point = e.target;
        // First handler of the "pointHoverChanged" event
    };

    var pointHoverChangedHandler2 = function (e) {
        var point = e.target;
        // Second handler of the "pointHoverChanged" event
    };

    $("#chartContainer").dxChart("instance")
        .on("pointHoverChanged", pointHoverChangedHandler1)
        .on("pointHoverChanged", pointHoverChangedHandler2);

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/)
- [Series Hover Events](/Documentation/Guide/Widgets/Chart/Series/Hover/#Events)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)
