Crosshair is a pointer represented by two mutually-crossing lines stretched over the entire chart plot. The crosshair helps a user identify values of the [series points](/Documentation/Guide/Widgets/Chart/Series_Points/Overview/) precisely. When enabled, the crosshair follows the cursor and snaps to the nearest series point.

![DevExtreme HTML5 JavaScript Charts Crosshair](/Content/images/doc/17_2/ChartJS/visual_elements/crosshair.png)

To enable the crosshair, set the **crosshair**.[enabled](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/#enabled) option to **true**. To show the crosshair labels, do the same with the **crosshair**.[label](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/label/).**visible** option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            crosshair: {
                enabled: true,
                label: {
                    visible: true
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-crosshair [enabled]="true">
            <dxo-label [visible]="true"></dxo-label>
        </dxo-crosshair>
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

For information about all options of the crosshair and its labels, visit the [crosshair](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/) section of the API reference.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Crosshair/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

[tags]chart, crosshair, pointer
