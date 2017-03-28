The selection capability is not provided out of the box, but it can be implemented using the [seriesClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#seriesClick) event. The following code gives an example for the scenario when a click on a series selects it, and a subsequent click on the same series clears the selection. To check whether the series is already selected, its [isSelected()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/Methods/#isSelected) method is called.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
			// ...
			onSeriesClick: function (e) {
                var series = e.target;
                if (series.isSelected()) {
                    series.clearSelection();
                } else {
                    series.select();
                }
            }
        });
    });

There are series that consist of points only, for example, [_bar_](/Documentation/Guide/Widgets/Chart/Series_Types/#Bar) and [_candle stick_](/Documentation/Guide/Widgets/Chart/Series_Types/#Candle_Stick). For these series, subscribe to the [pointClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#pointClick) event instead of **seriesClick**.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
			// ...
            onPointClick: function (e) {
                var series = e.target.series;
                if (series.isSelected()) {
                    series.clearSelection();
                } else {
                    series.select();
                }
            }
        });
    });

In the previous code examples, selection was cleared of a specific series. If you need to clear selection of all series, call the [clearSelection()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#clearSelection) method in the **Chart** instance.

    <!--JavaScript-->$("#chartContainer").dxChart("clearSelection");

#####See Also#####
- [Access a Series Using the API](/Documentation/Guide/Widgets/Chart/Series/Access_a_Series_Using_the_API/)
- [Widget Basics - Handle Events](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/)
- [Widget Basics - Call Methods](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/)
- [Point Selection Using the API](/Documentation/Guide/Widgets/Chart/Series_Points/Selection/#API)
