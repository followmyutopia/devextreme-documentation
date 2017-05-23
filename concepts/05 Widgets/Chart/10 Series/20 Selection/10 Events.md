When a user selects a series, the **Chart** fires the [seriesSelectionChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#seriesSelectionChanged) event that you can handle with a function. If the handling function is not going to be changed during the lifetime of the widget, assign it to the [onSeriesSelectionChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onSeriesSelectionChanged) option when you configure the widget. To check whether a series was selected or the selection was cleared, call the [isSelected()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/Methods/#isSelected) method of the series.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            onSeriesSelectionChanged: function (e) {
                var series = e.target;
                if (series.isSelected()) {
                    // Commands to execute when the series is selected
                } else {
                    // Commands to execute when the selection is cleared
                }
            }
        });
    });

If you are going to change the event handler at runtime or if you need to attach several handlers to the **seriesSelectionChanged** event, subscribe to this event using the [on(eventName, eventHandler)](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#oneventName_eventHandler) method.

    <!--JavaScript-->
    var seriesSelectionChangedHandler1 = function (e) {
        var series = e.target;
        // First handler of the "seriesSelectionChanged" event
    };

    var seriesSelectionChangedHandler2 = function (e) {
        var series = e.target;
        // Second handler of the "seriesSelectionChanged" event
    };

    $("#chartContainer").dxChart("instance")
        .on("seriesSelectionChanged", seriesSelectionChangedHandler1)
        .on("seriesSelectionChanged", seriesSelectionChangedHandler2);

[note]There are series that consist of points only, for example, [_bar_](/Documentation/Guide/Widgets/Chart/Series_Types/#Bar) and [_candle stick_](/Documentation/Guide/Widgets/Chart/Series_Types/#Candle_Stick). For these series, subscribe to the [pointSelectionChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#pointSelectionChanged) event instead of **seriesSelectionChanged** (see the [Point Selection Events](/Documentation/Guide/Widgets/Chart/Series_Points/Selection/#Events) topic).

#####See Also#####
- [Widget Basics - Handle Events](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events)
- [Point Selection Events](/Documentation/Guide/Widgets/Chart/Series_Points/Selection/#Events)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)
