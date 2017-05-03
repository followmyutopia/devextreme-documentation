[note]Before accessing a series point, you must gain access to its series. You can learn the details in the [Access a Series Using the API](/Documentation/Guide/Widgets/Chart/Series/Access_a_Series_Using_the_API/) topic.

To access series points, use the following methods. All of them return one or several objects whose fields and methods are described in the [Point](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/) section of the API reference.

- [getAllPoints()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/Methods/#getAllPoints)        
Gets all points of the series.

        <!--JavaScript-->var series = $("#chartContainer").dxChart("getSeriesByName", "Series 1");
        var seriesPoints = series.getAllPoints();

- [getPointsByArg(pointArg)](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/Methods/#getPointsByArgpointArg)      
Gets those points of the series that has a specific argument. Returns more than one point for [range](/Documentation/Guide/Widgets/Chart/Series_Types/#Range_Area) and [financial](/Documentation/Guide/Widgets/Chart/Series_Types/#Candle_Stick) series.

        <!--JavaScript-->var seriesPoints = series.getPointsByArg("China");

- [getPointByPos(positionIndex)](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/Methods/#getPointByPospositionIndex)          
Gets a point by its index in the series. The index is zero-based.

        <!--JavaScript-->var seriesPoint = series.getPointByPos(0);

- [getVisiblePoints()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/Methods/#getVisiblePoints)          
Gets those points of the series that fall into the range from [min](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#min) to [max](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#max) axis values.

        <!--JavaScript-->var visiblePoints = series.getVisiblePoints();

Apart from the API methods, you can access a series point in the event handlers. For example, the [onPointClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onPointClick) event handler gets the clicked series point in the argument.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            onPointClick: function (e) {
                var point = e.target;
                // ...
            }
        });
    });

[note] Each [Point](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/) object contains a reference to its parent series in the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/Fields/#series) field.

#####See Also#####
- [Access a Series Using the API](/Documentation/Guide/Widgets/Chart/Series/Access_a_Series_Using_the_API/)
- [Access a Point Label Using the API](/Documentation/Guide/Widgets/Chart/Point_Labels/Access_a_Point_Label_Using_the_API/)
- [Widget Basics - Call Methods](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/)

[tags]chart, series point, get points, getAllPoints, get point by argument, getPointsByArg, get point by index, getPointByPos, get visible points, getVisiblePoints