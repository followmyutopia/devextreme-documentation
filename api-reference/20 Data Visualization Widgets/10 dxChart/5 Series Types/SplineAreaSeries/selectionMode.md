<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'includePoints'<!--/default-->
<!--acceptValues-->'includePoints' | 'excludePoints' | 'none'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies series elements to be highlighted when a user selects a series.
<!--/shortDescription-->

<!--fullDescription-->
[note]Though not provided out of the box, the selection capability can be implemented using the widget API. Refer to the [onSeriesClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onSeriesClick) option description for details.

When a user selects a series, it may react in one of the following ways depending on the value of the **selectionMode** option.

<div class="simple-table">
    <table>
        <thead>
            <tr>
                <th>selectionMode</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><i>"includePoints"</i></td>
                <td><img src="/Content/images/doc/17_1/ChartJS/hoverMode/series/splinearea/includePoints.png" /></td>
            </tr>
            <tr>
                <td><i>"excludePoints"</i></td>
                <td><img src="/Content/images/doc/17_1/ChartJS/hoverMode/series/splinearea/excludePoints.png" /></td>
            </tr>
            <tr>
                <td><i>"none"</i></td>
                <td><img src="/Content/images/doc/17_1/ChartJS/hoverMode/series/splinearea/none.png" /></td>
            </tr>
        </tbody>
    </table>
</div>
<div style="height:5px"></div>

[note]Points in spline area series are hidden by default. To make them visible, assign *true* to the **point** | **visible** option.

When configuring the widget using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), specify this option using the `ChartSeriesSelectionMode` enum with one of the following values: `IncludePoints`, `ExcludePoints`, and `None`. Note that although this enum accepts more values, only the listed ones can be applied to a spline area series.

#####See Also#####
- [seriesSelectionMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#seriesSelectionMode) - specifies whether only one or several series can stay selected.
- **series** | [selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/SplineAreaSeries/selectionStyle/) - specifies the appearance of a series in the selected state.
- **series** | **point** | [selectionMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/SplineAreaSeries/point/#selectionMode) - specifies the selection mode of series points.
- [seriesSelectionChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#seriesSelectionChanged) - an event that fires after the selection state of a series has been changed.
<!--/fullDescription-->