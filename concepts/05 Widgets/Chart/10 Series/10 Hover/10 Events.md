When a user pauses on a series, the **Chart** fires the [seriesHoverChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#seriesHoverChanged) event that you can handle with a function. If the handling function is not going to be changed during the lifetime of the widget, assign it to the [onSeriesHoverChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onSeriesHoverChanged) option when you configure the widget. To check whether the pointer entered or left a series, call the [isHovered()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/Methods/#isHovered) method in the series.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            onSeriesHoverChanged: function (e) {
                var series = e.target;
                if (series.isHovered()) {
                    // Commands to execute when the series is hovered over
                } else {
                    // Commands to execute when the series is hovered out
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart
        (onSeriesHoverChanged)="onSeriesHoverChanged($event)">
    </dx-chart>

    <!--TypeScript-->
    export class AppComponent {
        onSeriesHoverChanged (e) {
            let series = e.target;
            if (series.isHovered()) {
                // Commands to execute when the series is hovered over
            } else {
                // Commands to execute when the series is hovered out
            }
        };
    }

---

If you are going to change the event handler at runtime or if you need to attach several handlers to the **seriesHoverChanged** event, subscribe to this event using the [on(eventName, eventHandler)](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var seriesHoverChangedHandler1 = function (e) {
        var series = e.target;
        // First handler of the "seriesHoverChanged" event
    };

    var seriesHoverChangedHandler2 = function (e) {
        var series = e.target;
        // Second handler of the "seriesHoverChanged" event
    };

    $("#chartContainer").dxChart("instance")
        .on("seriesHoverChanged", seriesHoverChangedHandler1)
        .on("seriesHoverChanged", seriesHoverChangedHandler2);

[note]There are series that consist of points only, for example, [bar](/Documentation/Guide/Widgets/Chart/Series_Types/Bar_Series/) or [financial](/Documentation/Guide/Widgets/Chart/Series_Types/Financial_Series/) series. For these series, subscribe to the [pointHoverChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#pointHoverChanged) event instead of **seriesHoverChanged** (see the [Point Hover Events](/Documentation/Guide/Widgets/Chart/Series_Points/Hover/#Events) topic).

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Handling_Events_and_Defining_Callbacks)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)
