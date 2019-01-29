===========================================================================
<!--default-->'onlyPoint'<!--/default-->
<!--acceptValues-->'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies series elements to be highlighted when a user selects a bubble.
<!--/shortDescription-->

<!--fullDescription-->
[note]Though not provided out of the box, the selection capability can be implemented using the widget API. Refer to the [onPointClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onPointClick) option description for details.

When a user selects a bubble, its series may react in one of the following ways depending on the value of the **selectionMode** option.

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
                <td><i>"onlyPoint"</i></td>
                <td><img src="/Content/images/doc/19_1/ChartJS/hoverMode/series/bubble/onlyPoint.png" /></td>
            </tr>
            <tr>
                <td><i>"allSeriesPoints"</i></td>
                <td><img src="/Content/images/doc/19_1/ChartJS/hoverMode/series/bubble/allSeriesPoints.png" /></td>
            </tr>
            <tr>
                <td><i>"allArgumentPoints"</i></td>
                <td><img src="/Content/images/doc/19_1/ChartJS/hoverMode/series/bubble/allArgumentPoints.png" /></td>
            </tr>
            <tr>
                <td><i>"none"</i></td>
                <td><img src="/Content/images/doc/19_1/ChartJS/hoverMode/series/bubble/none.png" /></td>
            </tr>
        </tbody>
    </table>
</div>
<div style="height:5px"></div>

#include common-ref-enum with {
    enum: "`ChartSeriesSelectionMode`",
    values: "`OnlyPoint`, `AllSeriesPoints`, `AllArgumentPoints`, and `None`"
} Note that although this enum accepts more values, only the listed ones can be applied to a bubble series.

#####See Also#####
- [pointSelectionMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#pointSelectionMode) - specifies whether only one or several bubbles can stay selected.
- **series**.[selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/BubbleSeries/selectionStyle/) - specifies the appearance of bubbles in the selected state.
- [pointSelectionChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#pointSelectionChanged) - an event that fires after the selection state of a bubble has been changed.
<!--/fullDescription-->