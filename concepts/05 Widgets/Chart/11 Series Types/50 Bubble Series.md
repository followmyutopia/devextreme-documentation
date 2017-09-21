The **Bubble** series type visualizes data as individual points of different sizes called "bubbles". Because **Bubble** series have the additional size characteristic, they can convey more information than, for example, [Line](/Documentation/Guide/Widgets/Chart/Series_Types/Line_Series/) or [Scatter](/Documentation/Guide/Widgets/Chart/Series_Types/Scatter_Series/) series.

<div class="simulator-desktop-container" data-view="/Content/Applications/17_2/DataVisualization/Guides/ChartSeriesTypes/bubble.html, /Content/Applications/17_2/DataVisualization/Guides/ChartSeriesTypes/bubble.js"></div>

Assign *"bubble"* to the **series[]**.[type](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#type) option to specify the **Bubble** series type. You can configure:

- Each series individually using the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/) array;
- All series in the **Chart** using the [commonSeriesSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/) object;
- All **Bubble** series using the **commonSeriesSettings**.**bubble** object.

Note that **Bubble** series require an additional data field that provides size values. Assign its name to the **series[]**.[sizeField](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#sizeField) option. Based on the size values, the widget calculates the actual bubble sizes in pixels, ranging between [minBubbleSize](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#minBubbleSize) and [maxBubbleSize](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#maxBubbleSize).

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#chartContainer").dxChart({
            series: [{
                type: "bubble",
                sizeField: "size"
            }, {
                // ...
            }],
            commonSeriesSettings: {
                bubble: { ... }
            },
            minBubbleSize: 14, // in pixels
            maxBubbleSize: 0.3 // in fractions of the widget's height or width, depending on which is smaller
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart
        [minBubbleSize]="14"
        [maxBubbleSize]="0.3">
        <dxi-series type="bubble" sizeField="size"></dxi-series>
        <dxi-series ... ></dxi-series>
        ...
        <dxo-common-series-settings>
            <dxo-bubble ... ></dxo-bubble>
        </dxo-common-series-settings>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from 'devextreme-angular';
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

Refer to the [BubbleSeries](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/BubbleSeries/) section of the API Reference for a full list of options available to a **Bubble** series.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Bubble/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

#####See Also#####
- [Series Points](/Documentation/Guide/Widgets/Chart/Series_Points/Overview/)
- [Bind Series to Data](/Documentation/Guide/Widgets/Chart/Data_Binding/Bind_Series_to_Data/)
