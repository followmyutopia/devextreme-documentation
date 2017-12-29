A multi-pane chart distributes a collection of series between several panes, thus presenting data in a clear and uncluttered way.

![DevExtreme HTML5 JavaScript Charts Panes](/Content/images/doc/17_2/ChartJS/visual_elements/panes.png)

To configure a multi-pane chart, follow the steps below.

1. **Create and name the panes**         
Declare several objects in the [panes](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/panes/) array. Each object configures a single pane. Then, give each pane a unique [name](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/panes/#name).

    ---
    ##### jQuery

        <!--JavaScript-->$(function() {
            $("#chartContainer").dxChart({
                // ...
                panes: [
                    { name: 'topPane' },
                    { name: 'bottomPane' }
                ]
            });
        });

    ##### Angular

        <!--HTML--><dx-chart ... >
            <dxi-panes name="topPane"></dxi-panes>
            <dxi-panes name="bottomPane"></dxi-panes>
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

2. **Bind value axes to panes**         
If a **Chart** has multiple panes, it most likely has [multiple value axes](/Documentation/Guide/Widgets/Chart/Axes/Multi-Axis_Chart/).
Bind each of them to a pane using the [pane](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#pane) option.

    ---
    ##### jQuery

        <!--JavaScript-->$(function() {
            $("#chartContainer").dxChart({
                // ...
                valueAxis: [
                    { pane: 'topPane' },
                    { pane: 'bottomPane' }
                ]
            });
        });

    ##### Angular

        <!--HTML--><dx-chart ... >
            ...
            <dxi-value-axis pane="topPane"></dxi-value-axis>
            <dxi-value-axis pane="bottomPane"></dxi-value-axis>
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

3. **Bind series to panes**        
Bind each series to a pane using the [pane](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#pane) option like you did for value axes in the previous step. If the **pane** option is missing from the series configuration, such a series will be bound to the [defaultPane](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#defaultPane).

    ---
    ##### jQuery

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
                    // This series will be bound to the default pane
                }]
            });
        });

    ##### Angular

        <!--HTML--><dx-chart ...
            defaultPane="topPane">
            ...
            <dxi-series pane="topPane"></dxi-series>
            <dxi-series pane="bottomPane"></dxi-series>
            <dxi-series pane="topPane"></dxi-series>
            <dxi-series>
                <!-- This series will be bound to the default pane -->
            </dxi-series>
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

If all panes in a multi-pane chart should have uniform settings, you can specify them in the [commonPaneSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonPaneSettings/) object.

---
##### jQuery

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

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-common-pane-settings
            backgroundColor="yellow">
            <dxo-border
                [visible]="true"
                [width]="2">
            </dxo-border>
        </dxo-common-pane-settings>
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

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/MultiplePanes/jQuery/Light/"
}

#####See Also#####
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

[tags]chart, panes, multi-pane chart, commonPaneSettings