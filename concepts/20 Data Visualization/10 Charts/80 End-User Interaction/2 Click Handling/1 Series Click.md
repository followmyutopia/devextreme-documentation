You can handle a series click. To do this, implement a callback function and assign it to the chart's **onSeriesClick** option.

    <!--JavaScript-->var chartOptions = {
        onSeriesClick: function (info) {
            //...
        }
    };

The **onSeriesClick** callback function accepts an object that contains information on the click event. Fields of this object are described in the [onSeriesClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onSeriesClick) option description. Among these fields, you can find the clicked series. An object that represents this series is described in the [Series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/) section.

[note]There are series that consist of points only, e.g., the _bar-like_ and _candleStick_ series of the **Chart** widget, and the _pie_ and _doughnut_ series of the **PieChart** widget. The **onSeriesClick** function is not called when clicking a point (a bar or a slice) in these types of series. To handle click for these series, implement the **onPointClick** callback function and access the series of the clicked point (see the [Point Click](/Documentation/Guide/Data_Visualization/Charts/End-User_Interaction/#Click_Handling/Point_Click) topic).
