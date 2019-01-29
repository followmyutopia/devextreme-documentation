A grid is a set of mutually-crossing vertical and horizontal lines that stretch throughout the entire chart. Visually, grid lines can be considered extensions of [major ticks](/Documentation/Guide/Widgets/Chart/Axes/Axis_Ticks/). The grid improves the readability of chart data.

![DevExtreme HTML5 JavaScript Charts GridLines](/Content/images/doc/19_1/ChartJS/visual_elements/grid_lines.png)

Grid lines can be configured using one of the following objects.

- **argumentAxis**.[grid](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/grid/)     
Settings for the grid lines that ascend from the argument axis.

- **valueAxis**.[grid](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/grid/)         
Settings for the grid lines that ascend from the value axis.

- **commonAxisSettings**.[grid](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/grid/)         
Settings for all grid lines in the **Chart**.

Note that axis-specific settings override common settings.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: {
                grid: {
                    // high priority
                }
            },
            valueAxis: {
                grid: {
                    // high priority
                }
            },
            commonAxisSettings: {
                grid: {
                    // low priority
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis>
            <dxo-grid>
                <!-- high priority -->
            </dxo-grid>
        </dxo-argument-axis>
        <dxi-value-axis>
            <dxo-grid>
                <!-- high priority -->
            </dxo-grid>
        </dxi-value-axis>
        <dxo-common-axis-settings>
            <dxo-grid>
                <!-- low priority -->
            </dxo-grid>
        </dxo-common-axis-settings>
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

[tags]chart, grid, minor grid, grid lines