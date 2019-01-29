**Range Area** and **Range Bar** series emphasize the difference between a point's high and low value using a shaded area or a set of bars respectively.

<div class="simulator-desktop-container" data-view="/Content/Applications/19_1/DataVisualization/Guides/ChartSeriesTypes/range.html, /Content/Applications/19_1/DataVisualization/Guides/ChartSeriesTypes/range.js"></div>

Assign *"rangearea"* or *"rangebar"* to the **series[]**.[type](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#type) option to specify the corresponding series type. You can configure:

- Each series individually using the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/) array;
- All series in the **Chart** using the [commonSeriesSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/) object;
- All **Range Area** or **Range Bar** series using the **commonSeriesSettings**.**rangearea** or **commonSeriesSettings**.**rangebar** object respectively.

Note that the range series require two value fields: [rangeValue1Field](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#rangeValue1Field) and [rangeValue2Field](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#rangeValue2Field).

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#chartContainer").dxChart({
            series: [{
                type: "rangearea",
                rangeValue1Field: "low",
                rangeValue2Field: "high"
            }, {
                // ...
            }],
            commonSeriesSettings: {
                rangearea: { ... },
                rangebar: { ... }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ... >
        <dxi-series
            type="rangearea"
            rangeValue1Field="low"
            rangeValue2Field="high">
        </dxi-series>
        <dxi-series ... ></dxi-series>
        ...
        <dxo-common-series-settings>
            <dxo-rangearea ... ></dxo-rangearea>
            <dxo-rangebar ... ></dxo-rangebar>
        </dxo-common-series-settings>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

See the [RangeAreaSeries](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeAreaSeries/) and [RangeBarSeries](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeBarSeries/) API Reference sections for a full list of options available to a range series.

<a href="/Demos/WidgetsGallery/Demo/Charts/RangeBar/jQuery/Light/" class="button orange small fix-width-155" target="_blank">Range Series Demos</a>

#####See Also#####
- [Series](/Documentation/Guide/Widgets/Chart/Series/Overview/)
- [Area Series](/Documentation/Guide/Widgets/Chart/Series_Types/Area_Series/)
- [Bar Series](/Documentation/Guide/Widgets/Chart/Series_Types/Bar_Series/)
- [Bind Series to Data](/Documentation/Guide/Widgets/Chart/Data_Binding/Bind_Series_to_Data/)
