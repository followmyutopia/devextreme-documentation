A multi-pane chart distributes a collection of series between several panes, thus presenting data in a clear and uncluttered way.

![DevExtreme HTML5 JavaScript Charts Panes](/Content/images/doc/17_2/ChartJS/visual_elements/panes.png)

To configure a multi-pane chart, follow the steps below.

1. **Create and name the panes**         
Declare several objects in the [panes](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/panes/) array. Each object configures a single pane. Then, give each pane a unique [name](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/panes/#name).

        <!--JavaScript-->$(function() {
            $("#chartContainer").dxChart({
                // ...
                panes: [
                    { name: 'topPane' },
                    { name: 'bottomPane' }
                ]
            });
        });

2. **Bind value axes to panes**         
If a **Chart** has multiple panes, it most likely has [multiple value axes](/Documentation/Guide/Widgets/Chart/Axes/Multi-Axis_Chart/).
Bind each of them to a pane using the [pane](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#pane) option.

        <!--JavaScript-->$(function() {
            $("#chartContainer").dxChart({
                // ...
                valueAxis: [
                    { pane: 'topPane' },
                    { pane: 'bottomPane' }
                ]
            });
        });

3. **Bind series to panes**        
Bind each series to a pane using the [pane](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#pane) option like you did for value axes in the previous step. If the **pane** option is missing from the series configuration, such a series will be bound to the [defaultPane](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#defaultPane).

        <!--JavaScript-->$(function() {
            $("#chartContainer").dxChart({
                // ...
                defaultPane: 'topPane',
                series: [{
                    pane: 'topPane'
                }, {
                    pane: 'bottomPane'
                }, {
                    pane: 'topPane'
                }, {
                    // this series will be bound to the default pane
                }]
            });
        });

If all panes in a multi-pane chart should have uniform settings, you can specify them in the [commonPaneSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonPaneSettings/) object.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            commonPaneSettings: {
                backgroundColor: 'yellow',
                border: {
                    visible: true,
                    width: 2
                }
            }
        });
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/MultiplePanes/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

#####See Also#####
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

[tags]chart, panes, multi-pane chart, commonPaneSettings