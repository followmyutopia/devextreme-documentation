A series is a collection of related data points. The most important characteristic of a series is its type. The **PieChart** provides **Pie** and **Doughnut** series types; the only difference  between them is the **Doughnut** has a blank center.

<div class="simulator-desktop-container" data-view="/Content/Applications/19_2/DataVisualization/Guides/PieChartSeriesTypes/pie.html, /Content/Applications/19_2/DataVisualization/Guides/PieChartSeriesTypes/pie.js"></div>

The **Pie** series type is used by default, but you can change it to **Doughnut** using the [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#type) option. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#pieChartContainer").dxPieChart({
            type: "doughnut" // or "donut"
        });
    });

##### Angular

    <!--HTML-->
    <dx-pie-chart
        type="doughnut"> <!-- or "donut" -->
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

---

Use the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/) option to configure a series. Pass an object to this option if you have only one series, or an array of objects when you have multiple series. In the latter case, you can also specify settings common for all series in the [commonSeriesSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/commonSeriesSettings/) object, for example: 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#pieChartContainer").dxPieChart({
            commonSeriesSettings: {
                argumentField: "year"
            },
            series: [{
                valueField: "men"
            }, {
                valueField: "women"
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-pie-chart>
        <dxo-common-series-settings
            argumentField="year">
        </dxo-common-series-settings>
        <dxi-series valueField="men"></dxi-series>
        <dxi-series valueField="women"></dxi-series>
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

---

Settings specified for a series apply to all its points. If you need to customize an individual point, assign a function to the [customizePoint](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#customizePoint) option. This function must return an object with options for the point that you want to customize.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#pieChartContainer").dxPieChart({
            series: {
                color: "blue"
            },
            // All series points with the value more than 100 turn red
            // Other series points remain blue
            customizePoint: function (pointInfo) {
                return pointInfo.value > 100 ? { color: "red" } : { }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-pie-chart
        [customizePoint]="customizePoint">
        <dxi-series color="blue"></dxi-series>
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // All series points with the value more than 100 turn red
        // Other series points remain blue
        customizePoint (pointInfo: any) {
            return pointInfo.value > 100 ? { color: 'red' } : { }
        };
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

---

Refer to other topics in this section for details on main series features.

#####See Also#####
- [Series Hover](/Documentation/Guide/Widgets/PieChart/Series/Hover/)
- [Series Selection](/Documentation/Guide/Widgets/PieChart/Series/Selection/)
- [Access a Point Using the API](/Documentation/Guide/Widgets/PieChart/Series/Access_a_Point_Using_the_API/)
- [Bind Series to Data](/Documentation/Guide/Widgets/PieChart/Data_Binding/Bind_Series_to_Data/)
