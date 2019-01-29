When the **Chart** visualizes local data, loading is instant. But when the **Chart** is bound to a remote data source, loading may take a considerable amount of time. To keep the viewer's attention, the **Chart** can display a loading indicator.

![DevExtreme HTML5 JavaScript Charts LoadingIndicator](/Content/images/doc/19_1/ChartJS/visual_elements/loading_indicator.png)

To activate the loading indicator, assign **true** to the [loadingIndicator](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/loadingIndicator/).**show** option. Once data is loaded, the loading indicator will be hidden automatically.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            loadingIndicator: {
                show: true
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-loading-indicator [show]="true"></dxo-loading-indicator>
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

If you need to show or hide the loading indicator at runtime, call the [showLoadingIndicator()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#showLoadingIndicator) or [hideLoadingIndicator()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#hideLoadingIndicator) method.

---
##### jQuery

    <!--JavaScript-->var chart = $("#chartContainer").dxChart("instance");
    chart.showLoadingIndicator();
    chart.hideLoadingIndicator();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxChartModule, DxChartComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxChartComponent) chart: DxChartComponent;
        showLoadingIndicator () {
            this.chart.instance.showLoadingIndicator();
        };
        hideLoadingIndicator () {
            this.chart.instance.hideLoadingIndicator();
        };
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

#####See Also#####
- [Chart Demos](/Demos/WidgetsGallery/Demo/Charts/ClientSideDataProcessing/jQuery/Light/)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

[tags]chart, load indicator, loading indicator
