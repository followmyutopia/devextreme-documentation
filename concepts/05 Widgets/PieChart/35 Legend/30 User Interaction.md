A user can interact with the legend by pausing on legend items. When a user does this, the point(s) that corresponds to the legend item being paused on becomes highlighted. To disable this capability, set the [hoverMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/legend/#hoverMode) option to *"none"*.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            legend: {
                hoverMode: "none"
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart>
        <dxo-legend hoverMode="none"></dxo-legend>
    </dx-pie-chart>

---

Pausing on a legend item causes the [pointHoverChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Events/#pointHoverChanged) event to raise. Refer to the [Series Hover Events](/Documentation/Guide/Widgets/PieChart/Series/Hover/#Events) topic for details on handling this event.

In addition, a user can click legend items. The widget does not react to this by default, but you can instruct it to by handling the [legendClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Events/#legendClick) event. If the handling function is not going to be changed at runtime, assign it to the [onLegendClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#onLegendClick) option when you configure the widget. Otherwise, or if you need several handlers for the **legendClick** event, subscribe to it using the [on(eventName, eventHandler)](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            onLegendClick: function (e) {
                var points = e.points;
                // Event handling commands go here
            }
        });

        // ===== or =====
        var legendClickEventHandler1 = function (e) {
            var points = e.points;
            // First handler of the "legendClick" event
        };

        var legendClickEventHandler2 = function (e) {
            var points = e.points;
            // Second handler of the "legendClick" event
        };

        $("#pieChartContainer").dxPieChart("instance")
            .on("legendClick", legendClickEventHandler1)
            .on("legendClick", legendClickEventHandler2);
    });

##### Angular

    <!--HTML--><dx-pie-chart ...
        (onLegendClick)="onLegendClick($event)">
    </dx-pie-chart>

    <!--TypeScript-->
    export class AppComponent {
        onLegendClick (e) {
            let points = e.points;
            // Event handling commands go here
        }
    }

---

<a href='/Demos/WidgetsGallery/Demo/Charts/Pie/jQuery/Light/' class='button orange small fix-width-155' target='_blank'>View Demo</a>

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/)
