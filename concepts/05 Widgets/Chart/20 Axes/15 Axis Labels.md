Axis labels display values indicated by [major axis ticks](/Documentation/Guide/Widgets/Chart/Axes/Axis_Ticks/).

![DevExtreme HTML5 JavaScript Charts AxisLabels](/Content/images/doc/18_2/ChartJS/visual_elements/axis_labels.png)

You can configure axis labels using the [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/label/) object. It comprises options that specify the [alignment](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/label/#alignment), [font](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/label/font/), [text](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/label/#customizeText), and other attributes of axis labels. Pay particular attention to the [displayMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/label/#displayMode) option that allows you to rotate or stagger axis labels.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: { // or valueAxis, or commonAxisSettings
                label: {
                    displayMode: "stagger",
                    staggeringSpacing: 10
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis> <!-- or dxi-value-axis, or dxo-common-axis-settings -->
            <dxo-label
                displayMode="stagger"
                [staggeringSpacing]="10">
            </dxo-label>
        </dxo-argument-axis>
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

Another noteworthy option is [overlappingBehavior](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/label/overlappingBehavior/). It allows you to decide how axis labels should behave when they overlap each other.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: { // or valueAxis, or commonAxisSettings
                label: {
                    overlappingBehavior: "rotate",
                    rotationAngle: 45
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis> <!-- or dxi-value-axis, or dxo-common-axis-settings -->
            <dxo-label
                overlappingBehavior="rotate"
                [rotationAngle]="45">
            </dxo-label>
        </dxo-argument-axis>
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

#####See Also#####
- [Axis Ticks](/Documentation/Guide/Widgets/Chart/Axes/Axis_Ticks/)
- [Axis Titles](/Documentation/Guide/Widgets/Chart/Axes/Axis_Titles/)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

[tags]chart, axis labels, display mode, displayMode, overlapping behavior, overlappingBehavior