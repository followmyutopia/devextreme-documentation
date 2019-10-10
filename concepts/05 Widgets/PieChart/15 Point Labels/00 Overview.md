Each series point can be accompanied with a label that displays the point's value or custom data.

![DevExtreme HTML5 JavaScript PieChart SeriesPointLabels](/Content/images/doc/19_2/PieChart/visual_elements/point_labels.png)

To configure point labels, use the [label](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label/label.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/') object. You can declare it as follows.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            series: [{
                label: {
                    // Settings for all point labels of an individual series
                }
            }, {
                // ...  
            }],
            commonSeriesSettings: {
                label: {
                    // Settings for all point labels in the PieChart
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart ... >
        <dxi-series>
            <dxo-label ... >
                <!-- Settings for all point labels of an individual series -->
            </dxo-label>
        </dxi-series>
        <dxo-common-series-settings ... >
            <dxo-label ... >
                <!-- Settings for all point labels in the PieChart -->
            </dxo-label>
        </dxo-common-series-settings>
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

Point labels are not visible by default. To make them visible, assign **true** to the **label**.**visible** option. With this configuration, point labels are displayed detached from their respective series points. You can make the connection between labels and points more evident by making label connectors visible. For this purpose, assign **true** to the **label**.[connector](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label/connector/connector.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/connector/').**visible** option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            series: {
                label: {
                    visible: true,
                    connector: {
                        visible: true
                    }
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart ... >
        <dxi-series>
            <dxo-label [visible]="true">
                <dxo-connector [visible]="true"></dxo-connector>
            </dxo-label>
        </dxi-series>
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

For details on other options of point labels, refer to the [label](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label/label.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/') section of the API reference and to other topics in this section.

#####See Also#####
- [Customize Labels](/concepts/05%20Widgets/PieChart/15%20Point%20Labels/05%20Customize%20Labels.md '/Documentation/Guide/Widgets/PieChart/Point_Labels/Customize_Labels/')
- [Resolve Label Overlapping](/concepts/05%20Widgets/PieChart/15%20Point%20Labels/10%20Resolve%20Overlapping.md '/Documentation/Guide/Widgets/PieChart/Point_Labels/Resolve_Overlapping/')
- [PieChart Demos](/Demos/WidgetsGallery/Demo/Charts/Pie/jQuery/Light/)