<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Legend click event<!--/d-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->EVENT<!--/type-->
<!--fp1d-->Event argument<!--/fp1d-->
<!--fp1_field1d-->Widget itself.<!--/fp1_field1d-->
<!--fp1_field2d-->Widget container.<!--/fp1_field2d-->
<!--fp1_field3d-->An extended jQuery event.<!--/fp1_field3d-->
<!--fp1_field4d-->Item argument. The argument to which the currently clicked legend item belongs.<!--/fp1_field4d-->
===========================================================================

<!--shortDescription-->
Fires when an item on the chart legend is clicked.
<!--/shortDescription-->

<!--fullDescription-->
To access the [point(s)](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/) that corresponds to the clicked legend item, get the series first using the [getAllSeries()](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#getAllSeries), [getSeriesByName(seriesName)](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#getSeriesByNameseriesName) or [getSeriesByPos(seriesIndex)](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#getSeriesByPosseriesIndex) method. Then call the [getPointsByArg(pointArg)](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Series/Methods/#getPointsByArgpointArg) method of the series.

    <!--JavaScript-->$("#pieChartContainer").dxPieChart("instance").on(
        "legendClick": function (e) {
            var points = getAllSeries()[0].getPointsByArg(e.target);
            // ...
        }
    );

#####See Also#####
- [Handle Events - jQuery](/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_jQuery/#Handle_Events)
- [Handle Events - AngularJS](/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_AngularJS/#Handle_Events)
- [Handle Events - Knockout](/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_Knockout/#Handle_Events)
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#instance">widget instance</a>.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->object<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->jQueryEvent<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->jQuery-event object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The jQuery event.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->target<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->String|Number<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The argument of the point(s) that corresponds to the clicked legend item.
<!--/typeFunctionParamDescription1_field4-->
