The legend can be aligned in the horizontal or vertical direction using the [horizontalAlignment](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/legend/#horizontalAlignment) or [verticalAlignment](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/legend/#verticalAlignment) option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            legend: {
                horizontalAlignment: "center", // or "left" | "right"
                verticalAlignment: "top" // or "bottom"
            }
        });
    });

##### Angular

    <!--HTML--><dx-funnel>
        <dxo-legend
            horizontalAlignment="center" <!-- or "left" | "right" -->
            verticalAlignment="top"> <!-- or "bottom" -->
        </dxo-legend>
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

---

Below, you can try out these options in action.

<div class="simulator-desktop-container" data-view="/Content/Applications/18_2/DataVisualization/Guides/FunnelLegend/relocateTheLegend.html, /Content/Applications/18_2/DataVisualization/Guides/FunnelLegend/relocateTheLegend.js, /Content/Applications/18_2/DataVisualization/Guides/FunnelLegend/relocateTheLegend.css"></div>

#####See Also#####
- [Rearrange Legend Items](/Documentation/Guide/Widgets/Funnel/Legend/Rearrange_Legend_Items/)
- [Funnel Demos](/Demos/WidgetsGallery/Demo/Charts/FunnelChart/jQuery/Light/)
