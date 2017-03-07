<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Area hover mode<!--/d-->
===========================================================================
<!--default-->'nearestPoint'<!--/default-->
<!--acceptValues-->'nearestPoint' | 'includePoints' | 'excludePoints' | 'none'<!--/acceptValues-->
<!--type-->string<!--/type-->
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
                <td><img src="/Content/images/doc/16_1/ChartJS/hoverMode/series/area/nearestPoint.png" /></td>
            </tr>
            <tr>
                <td><i>"includePoints"</i></td>
                <td><img src="/Content/images/doc/16_1/ChartJS/hoverMode/series/area/includePoints.png" /></td>
            </tr>
            <tr>
                <td><i>"excludePoints"</i></td>
                <td><img src="/Content/images/doc/16_1/ChartJS/hoverMode/series/area/excludePoints.png" /></td>
            </tr>
            <tr>
                <td><i>"none"</i></td>
                <td><img src="/Content/images/doc/16_1/ChartJS/hoverMode/series/area/none.png" /></td>
            </tr>
        </tbody>
    </table>
</div>

[note]Points in area series are hidden by default. To make them visible, assign *true* to the **point** | **visible** option.

#####See Also#####
- [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/AreaSeries/hoverStyle/) - specifies the appearance of series in the hover state.
- **point** | [hoverMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/AreaSeries/point/#hoverMode) - specifies the hover mode of series points.
<!--/fullDescription-->