<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'nearestPoint'<!--/default-->
<!--acceptValues-->'nearestPoint' | 'includePoints' | 'excludePoints' | 'none'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies series elements to be highlighted when a user points to a series.
<!--/shortDescription-->

<!--fullDescription-->
When a user points to a series, it may react in one of the following ways depending on the value of the **hoverMode** option.

<div class="simple-table">
    <table>
        <thead>
            <tr>
                <th>hoverMode</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><i>"nearestPoint"</i></td>
                <td><img src="/Content/images/doc/17_2/ChartJS/hoverMode/series/steparea/nearestPoint.png" /></td>
            </tr>
            <tr>
                <td><i>"includePoints"</i></td>
                <td><img src="/Content/images/doc/17_2/ChartJS/hoverMode/series/steparea/includePoints.png" /></td>
            </tr>
            <tr>
                <td><i>"excludePoints"</i></td>
                <td><img src="/Content/images/doc/17_2/ChartJS/hoverMode/series/steparea/excludePoints.png" /></td>
            </tr>
            <tr>
                <td><i>"none"</i></td>
                <td><img src="/Content/images/doc/17_2/ChartJS/hoverMode/series/steparea/none.png" /></td>
            </tr>
        </tbody>
    </table>
</div>
<div style="height:5px"></div>

[note]Points in step area series are hidden by default. To make them visible, assign **true** to the **point**.**visible** option.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `ChartSeriesHoverMode` enum with one of the following values: `NearestPoint`, `IncludePoints`, `ExcludePoints`, and `None`. Note that although this enum accepts more values, only the listed ones can be applied to a step area series.

#####See Also#####
- [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StepAreaSeries/hoverStyle/) - specifies the appearance of series in the hover state.
- **point**.[hoverMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StepAreaSeries/point/#hoverMode) - specifies the hover mode of series points.
<!--/fullDescription-->