Each series point can be accompanied with a label that displays the point's value or custom data.

![DevExtreme HTML5 JavaScript PieChart SeriesPointLabels](/Content/images/doc/17_2/PieChart/visual_elements/point_labels.png)

To configure point labels, use the [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/) object. You can declare it as follows.

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

---

Point labels are not visible by default. To make them visible, assign **true** to the **label**.**visible** option. With this configuration, point labels are displayed detached from their respective series points. You can make the connection between labels and points more evident by making label connectors visible. For this purpose, assign **true** to the **label**.[connector](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/connector/).**visible** option.

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

---

For details on other options of point labels, refer to the [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/) section of the API reference and to other topics in this section.

#####See Also#####
- [Customize Labels](/Documentation/Guide/Widgets/PieChart/Point_Labels/Customize_Labels/)
- [Resolve Label Overlapping](/Documentation/Guide/Widgets/PieChart/Point_Labels/Resolve_Overlapping/)
- [PieChart Demos](/Demos/WidgetsGallery/Demo/Charts/Pie/jQuery/Light/)