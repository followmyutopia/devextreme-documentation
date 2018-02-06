Bar series visualize data as a collection of bars. Those bars can be displayed side by side, as in the **Bar** series type, or can be put in stacks, as in the **Stacked Bar** and **Full-Stacked Bar** series types.

<div class="simulator-desktop-container" data-view="/Content/Applications/18_1/DataVisualization/Guides/ChartSeriesTypes/bar.html, /Content/Applications/18_1/DataVisualization/Guides/ChartSeriesTypes/bar.js"></div>

To specify one or another series type, assign its name to the **series[]**.[type](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#type) option. You can configure:

- Each series individually using the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/) array;
- All series in the **Chart** using the [commonSeriesSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/) object;
- All series of a specific type using objects nested in **commonSeriesSettings**: **bar**, **stackedbar**, and **fullstackedbar**.

<!---->

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#chartContainer").dxChart({
            series: [{
                type: "bar"
            }, {
                // ...
            }],
            commonSeriesSettings: {
                bar: { ... },
                stackedbar: { ... },
                fullstackedbar: { ... }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ... >
        <dxi-series type="bar"></dxi-series>
        <dxi-series ... ></dxi-series>
        ...
        <dxo-common-series-settings>
            <dxo-bar ... ></dxo-bar>
            <dxo-stackedbar ... ></dxo-stackedbar>
            <dxo-fullstackedbar ... ></dxo-fullstackedbar>
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

Refer to the [BarSeries](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/BarSeries/), [StackedBarSeries](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StackedBarSeries/), or [FullStackedBarSeries](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/FullStackedBarSeries/) section of the API Reference for a full list of options available to a specific series type. Most these options are self-explanatory, yet several of them are worth special mention.

- [minBarSize](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#minBarSize)      
Specifies the minimum height of bars in a series; allows you to keep bars big enough for user interaction.
- [stack](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#stack) (for stacked series)        
Allows you to distribute bars of a single argument between several side-by-side stacks.

<a href="/Demos/WidgetsGallery/Demo/Charts/StandardBar/jQuery/Light/" class="button orange small fix-width-155" target="_blank">Bar Series Demos</a>

#####See Also#####
- [Series Points](/Documentation/Guide/Widgets/Chart/Series_Points/Overview/)
- [Bind Series to Data](/Documentation/Guide/Widgets/Chart/Data_Binding/Bind_Series_to_Data/)
- [Range Series](/Documentation/Guide/Widgets/Chart/Series_Types/Range_Series/)
