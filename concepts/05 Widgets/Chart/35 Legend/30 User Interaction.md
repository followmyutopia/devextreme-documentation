A user can interact with the legend by pausing on legend items. When a user does this, the series that corresponds to the legend item being paused on becomes highlighted. To disable this capability, set the [hoverMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#hoverMode) option to *"none"*.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
			// ...
			legend: {
                hoverMode: "none"
            }
        });
    });

Series that consist of several elements rather than just series points ([Line-](/Documentation/Guide/Widgets/Chart/Series/Series_Types/Line_Series/) and [Area-like](/Documentation/Guide/Widgets/Chart/Series/Series_Types/Area_Series/), [Range Area](/Documentation/Guide/Widgets/Chart/Series/Series_Types/Range_Series/#Range_Area)) can be highlighted _without_ the series points. For this, set the **hoverMode** option to *"excludePoints"*. For other series, this setting has the same effect as *"none"*.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
			// ...
			legend: {
                hoverMode: "excludePoints"
            }
        });
    });

Pausing on a legend item causes the [seriesHoverChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#seriesHoverChanged) event to raise. Refer to the [Series Hover Events](/Documentation/Guide/Widgets/Chart/Series/Hover/#Events) topic for details on handling this event.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/HoverMode/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

In addition, a user can click legend items. By default, the widget does not react to a click, but you can instruct it to by handling the [legendClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#legendClick) event. If the handling function is not going to be changed at runtime, assign it to the [onLegendClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onLegendClick) option when you configure the widget. Otherwise, or if you need several handlers for the **legendClick** event, subscribe to it using the [on(eventName, eventHandler)](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#oneventName_eventHandler) method.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
			// ...
			onLegendClick: function (e) {
                var series = e.target;
                // Event handling commands go here
            }
        });

        // ===== or =====
        var legendClickEventHandler1 = function (e) {
            var series = e.target;
            // First handler of the "legendClick" event
        };

        var legendClickEventHandler2 = function (e) {
            var series = e.target;
            // Second handler of the "legendClick" event
        };

        $("#chartContainer").dxChart("instance")
            .on("legendClick", legendClickEventHandler1)
            .on("legendClick", legendClickEventHandler2);
    });

#####See Also#####
- [Handle Events](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/)
- [Relocate the Legend](/Documentation/Guide/Widgets/Chart/Legend/Relocate_the_Legend/)
- [Rearrange Legend Items](/Documentation/Guide/Widgets/Chart/Legend/Rearrange_Legend_Items/)
- [Chart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/HoverMode/jQuery/Light/)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

[tags]chart, legend, hover, hoverMode, legend click, onLegendClick
