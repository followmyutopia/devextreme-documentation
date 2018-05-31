A pane is a chart area containing series. If there are many series in the **Chart**, they can be distributed between multiple panes.

![DevExtreme HTML5 JavaScript Charts Panes](/Content/images/doc/18_2/ChartJS/visual_elements/pane.png)

Panes are configured by the [panes](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/panes/) option. For a single-pane chart, this option accepts an object that configures the [background color](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/panes/#backgroundColor) and the [border](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/panes/border/) of the pane.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            panes: {
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
        <dxi-panes backgroundColor="yellow">
            <dxo-border
                [visible]="true"
                [width]="2">
            </dxo-border>
        </dxi-panes>
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

For a multi-pane chart, the **panes** option accepts an array. For further details, refer to the [Multi-Pane Chart](/Documentation/Guide/Widgets/Chart/Panes/Multi-Pane_Chart/) topic.

#####See Also#####
- [Multiple Panes Demo](/Demos/WidgetsGallery/Demo/Charts/MultiplePanes/jQuery/Light/)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

[tags]chart, panes, overview, single-pane chart