The **Chart** exposes the following methods for accessing a series. All of them return one or several objects whose fields and methods are described in the [Series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/) section of the API reference.

- [getAllSeries()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#getAllSeries)        
Gets all series of the **Chart**.

        <!--JavaScript-->var seriesCollection = $("#chartContainer").dxChart("getAllSeries");

- [getSeriesByName(seriesName)](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#getSeriesByNameseriesName)       
Gets a series by its [name](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#name).

        <!--JavaScript-->var series = $("#chartContainer").dxChart("getSeriesByName", "Series 1");

- [getSeriesByPos(seriesIndex)](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#getSeriesByPosseriesIndex)       
Gets a series by its index in the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/) array. The index is zero-based.

        <!--JavaScript-->var series = $("#chartContainer").dxChart("getSeriesByPos", 0);

Apart from the API methods, you can access a series in the event handlers. For example, the [onSeriesClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onSeriesClick) event handler gets the clicked series in the argument.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            onSeriesClick: function (e) {
                var series = e.target;
                // ...
            }
        });
    });

Once you get the series, you can access its child points. For further information, refer to the [Access a Series Point Using the API](/Documentation/Guide/Widgets/Chart/Series_Points/Access_a_Series_Point_Using_the_API/) topic.

#####See Also#####
- [Show and Hide a Series](/Documentation/Guide/Widgets/Chart/Series/Show_and_Hide_a_Series/)
- [Widget Basics - Call Methods](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/)

[tags]chart, series, get series, getAllSeries, get series by name, getSeriesByName, get series by index, getSeriesByPos