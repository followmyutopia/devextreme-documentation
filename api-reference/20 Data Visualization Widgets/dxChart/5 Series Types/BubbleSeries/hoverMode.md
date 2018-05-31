===========================================================================
<!--default-->'onlyPoint'<!--/default-->
<!--acceptValues-->'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none'<!--/acceptValues-->
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
                <td><i>"onlyPoint"</i></td>
                <td><img src="/Content/images/doc/18_2/ChartJS/hoverMode/series/bubble/onlyPoint.png" /></td>
            </tr>
            <tr>
                <td><i>"allSeriesPoints"</i></td>
                <td><img src="/Content/images/doc/18_2/ChartJS/hoverMode/series/bubble/allSeriesPoints.png" /></td>
            </tr>
            <tr>
                <td><i>"allArgumentPoints"</i></td>
                <td><img src="/Content/images/doc/18_2/ChartJS/hoverMode/series/bubble/allArgumentPoints.png" /></td>
            </tr>
            <tr>
                <td><i>"none"</i></td>
                <td><img src="/Content/images/doc/18_2/ChartJS/hoverMode/series/bubble/none.png" /></td>
            </tr>
        </tbody>
    </table>
</div>
<div style="height:5px"></div>

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `ChartSeriesHoverMode` enum with one of the following values: `OnlyPoint`, `AllSeriesPoints`, `AllArgumentPoints`, and `None`. Note that although this enum accepts more values, only the listed ones can be applied to a bubble series.

#####See Also#####
- [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/BubbleSeries/hoverStyle/) - specifies the appearance of series in the hover state.
<!--/fullDescription-->