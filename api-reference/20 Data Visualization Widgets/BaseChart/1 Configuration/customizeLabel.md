<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->function(pointInfo)<!--/type-->
===========================================================================

<!--shortDescription-->
Customizes the appearance of an individual point label.
<!--/shortDescription-->

<!--fullDescription-->
By default, all point labels in a chart are identical, but you can specify a unique appearance for individual labels using the **customizeLabel** function. This function should return an object with options that will be changed for a certain label. See the [label]({basewidgetpath}/Configuration/series/label) object for information about all options available for changing.

The **customizeLabel** function accepts an object providing information about the series point that the label belongs to. This object contains the following fields.

<div class="simple-table">
    <table>
        <thead>
            <tr>
                <th>Field</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="text-align:left">argument</td>
                <td>The argument of the series point.</td>
            </tr>
            <tr>
                <td style="text-align:left">value</td>
                <td>The value of the series point.</td>
            </tr>
            <tr>
                <td style="text-align:left">tag</td>
                <td>The <a href="{basewidgetpath}/Configuration/series/#tagField">tag</a> of the series point.</td>
            </tr>
            <tr>
                <td style="text-align:left">series</td>
                <td>The <a href="{basewidgetpath}/Chart_Elements/Series/">series</a> that includes the series point.</td>
            </tr>
            <tr>
                <td style="text-align:left">index</td>
                <td>The index of the series point in the points array.</td>
            </tr>
        </tbody>
    </table>
</div>

In the [*range bar*](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeBarSeries/) and [*range area*](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeAreaSeries/) series, the **value** field is replaced by the following fields.

<div class="simple-table">
    <table>
        <thead>
            <tr>
                <th>Field</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="text-align:left">rangeValue1</td>
                <td>The <a href="/Documentation/17_2/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#rangeValue1Field">first value</a> of the series point.</td>
            </tr>
            <tr>
                <td style="text-align:left">rangeValue2</td>
                <td>The <a href="/Documentation/17_2/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#rangeValue2Field">second value</a> of the series point.</td>
            </tr>
        </tbody>
    </table>
</div>

In the financial series ([*candlestick*](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/CandleStickSeries/) and [*stock*](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StockSeries/)), the **value** field is replaced by the following fields.

<div class="simple-table">
    <table>
        <thead>
            <tr>
                <th>Field</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="text-align:left">openValue</td>
                <td>The <a href="/Documentation/17_2/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#openValueField">open value</a> of the series point.</td>
            </tr>
            <tr>
                <td style="text-align:left">closeValue</td>
                <td>The <a href="/Documentation/17_2/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#closeValueField">close value</a> of the series point.</td>
            </tr>
            <tr>
                <td style="text-align:left">lowValue</td>
                <td>The <a href="/Documentation/17_2/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#lowValueField">low value</a> of the series point.</td>
            </tr>
            <tr>
                <td style="text-align:left">highValue</td>
                <td>The <a href="/Documentation/17_2/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#highValueField">high value</a> of the series point.</td>
            </tr>
            <tr>
                <td style="text-align:left">reductionValue</td>
                <td>The <a href="/Documentation/17_2/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/reduction/">reduction</a> value of the series point.</td>
            </tr>
        </tbody>
    </table>
</div>

[note]All fields listed in this description are also exposed by the **this** object.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsadvancedfeaturescustomizepoints/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->
<!--typeFunctionParamName1-->pointInfo<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information defining the series point the label belongs to.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->dxChartSeriesTypes_CommonSeries_label<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A configuration object for the point label.
<!--/typeFunctionReturnDescription-->