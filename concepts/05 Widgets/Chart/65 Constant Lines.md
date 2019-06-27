A constant line is a straght line that extends over the entire **Chart** and indicates an axis value. Constant lines are always perpendicular to the axis to which they belong. 

![DevExtreme HTML5 JavaScript Charts ConstantLines](/Content/images/doc/19_2/ChartJS/visual_elements/constant_lines.png)

To configure the constant lines, declare the [constantLines](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/constantLines/) array in the [argumentAxis](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/) or [valueAxis](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/) object. This array should contain objects, and each one of them configures a single constant line. A constant line demands at least the [value](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/constantLines/#value) option to be set. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: {
                constantLines: [
                    { value: 100 },
                    { value: 50 }
                ]
            },
            valueAxis: {
                constantLines: [
                    { value: 40 },
                    { value: 70 }
                ]
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis>
            <dxi-constant-line [value]="100"></dxi-constant-line>
            <dxi-constant-line [value]="50"></dxi-constant-line>
        </dxo-argument-axis>
        <dxi-value-axis>
            <dxi-constant-line [value]="40"></dxi-constant-line>
            <dxi-constant-line [value]="70"></dxi-constant-line>
        </dxi-value-axis>
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

If several constant lines should have a uniform style, you can specify it using one of the following objects.

- **argumentAxis**.[constantLineStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/constantLineStyle/)         
Style for constant lines belonging to the argument axis.

- **valueAxis**.[constantLineStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/constantLineStyle/)         
Style for constant lines belonging to the value axis.

- **commonAxisSettings**.[constantLineStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/constantLineStyle/)         
Style for all constant lines in the **Chart**.

Note that individual settings override axis-specific settings which, in turn, override common settings.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: {
                constantLines: [
                    // high priority
                ],
                constantLineStyle: {
                    // middle priority
                }
            },
            valueAxis: {
                constantLines: [
                    // high priority
                ],
                constantLineStyle: {
                    // middle priority
                }
            },
            commonAxisSettings: {
                constantLineStyle: {
                    // low priority
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis>
            <dxi-constant-line ... >
                <!-- high priority -->
            </dxi-constant-line>
            <dxo-constant-line-style ... >
                <!-- middle priority -->
            </dxo-constant-line-style>
        </dxo-argument-axis>
        <dxi-value-axis>
            <dxi-constant-line ... >
                <!-- high priority -->
            </dxi-constant-line>
            <dxo-constant-line-style ... >
                <!-- middle priority -->
            </dxo-constant-line-style>
        </dxi-value-axis>
        <dxo-common-axis-settings>
            <dxo-constant-line-style ... >
                <!-- low priority -->
            </dxo-constant-line-style>
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

For information about all options of the constant lines, visit the [constantLines](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/constantLines/) section of the API reference.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/ServerSideDataProcessing/Knockout/Light/"
}

#####See Also#####
- [Grid](/Documentation/Guide/Widgets/Chart/Grid/)
- [Strips](/Documentation/Guide/Widgets/Chart/Strips/)

[tags]chart, constant lines
