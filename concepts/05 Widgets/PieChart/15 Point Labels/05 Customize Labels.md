[note] This topic focuses on options that customize the text of point labels and allow you to customize an individual label. There are other options that customize labels, such as [backgroundColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/#backgroundColor), [font](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/font/), [border](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/border/), etc., but their purpose and application is rather obvious, and for this reason, they are not detailed in this topic. For more information on them, please refer to the [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/) section of the API reference.

If you need to change the text displayed by point labels, declare the [customizeText](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/#customizeText) function. It must return a string value. The argument of this function contains information about the point whose label is being customized. In the following example, the **customizeText** function instructs point labels to display both the argument and value of a point.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            series: {
                label: {
                    visible: true,
                    customizeText: function (pointInfo) {
                        return pointInfo.argument + ': ' + pointInfo.value;
                    }
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart ... >
        <dxi-series>
            <dxo-label
                [visible]="true"
                [customizeText]="customizeText">
            </dxo-label>
        </dxi-series>
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        customizeText (pointInfo: any) {
            return pointInfo.argument + ': ' + pointInfo.value;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/PieWithCustomLabels/jQuery/Light/"
}

You can also customize an individual label. For this purpose, assign a function to the [customizeLabel](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#customizeLabel) option. This function must return an object with options for the label that you want to customize. Note that the **customizeLabel** option should be declared at the root level of the **PieChart** configuration.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            series: {
                label: {
                    visible: true,
                    backgroundColor: 'blue'
                }
            },
            // All point labels with the value more than 100 turn red
            // Other point labels remain blue
            customizeLabel: function (pointInfo) {
                return pointInfo.value > 100 ? { backgroundColor: 'red' } : { }
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart
        [customizeLabel]="customizeLabel">
        <dxi-series>
            <dxo-label
                [visible]="true"
                backgroundColor="blue">
            </dxo-label>
        </dxi-series>
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // All point labels with the value more than 100 turn red
        // Other point labels remain blue
        customizeLabel (pointInfo: any) {
            return pointInfo.value > 100 ? { backgroundColor: 'red' } : { }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

---

#####See Also#####
- [Resolve Label Overlapping](/Documentation/Guide/Widgets/PieChart/Point_Labels/Resolve_Overlapping/)
- [Access a Label Using the API](/Documentation/Guide/Widgets/PieChart/Point_Labels/Access_a_Label_Using_the_API/)
