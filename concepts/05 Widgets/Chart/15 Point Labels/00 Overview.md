Each [series point](/Documentation/Guide/Widgets/Chart/Series_Points/Overview/) can be accompanied with a label that displays the point's value(s) or custom data.

![DevExtreme HTML5 JavaScript Charts SeriesPoints](/Content/images/doc/17_1/ChartJS/visual_elements/point_labels.png)

To configure point labels, use the fields of the [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/label/) object. This object can be declared as follows.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            series: [{
                label: {
                    // Settings for all point labels of an individual series
                }
            }, {
                // ...  
            }],
            stackedline: { // or any other series type
                label: {
                    // Settings for all point labels belonging to Stacked Line series
                }
            },
            commonSeriesSettings: {
                label: {
                    // Settings for all point labels in the Chart
                }
            }
        });
    });

Point labels are not visible by default. To make them visible, assign *true* to the **label** | **visible** option. With this configuration, point labels are displayed detached from their respective series points. You can make the connection between labels and points more evident by making label connectors visible. For this purpose, assign *true* to the **label** | [connector](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/label/connector/) | **visible** option.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
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

For details on other options of point labels, refer to the [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/label/) section of the API reference and to other topics in this section.

#####See Also#####
- [Customize Point Labels](/Documentation/Guide/Widgets/Chart/Point_Labels/Customize_Point_Labels/)
- [Resolve Label Overlapping](/Documentation/Guide/Widgets/Chart/Point_Labels/Resolve_Overlapping/)
- [Chart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/CustomizePointsAndLabels/jQuery/Light/)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

[tags]chart, point labels, overview, common label settings, label connector