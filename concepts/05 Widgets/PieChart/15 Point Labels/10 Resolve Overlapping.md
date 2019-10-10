In multi-series charts, point labels often overlap. To decide how to resolve overlapping, specify the [resolveLabelOverlapping](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/resolveLabelOverlapping.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#resolveLabelOverlapping') option. It allows you to hide certain labels, or slightly shift them, or keep them as they are (i.e. overlapping).

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            resolveLabelOverlapping: 'shift' // or 'hide' | 'none'
        });
    });

##### Angular

    <!--HTML-->
    <dx-pie-chart ...
        resolveLabelOverlapping="shift"> <!-- or 'hide' | 'none' -->
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

---

Another way to deal with overlapping labels is to hide all labels of a specific series once their count exceeds a certain limit. Mostly, this feature is useful if the series accepts new points at runtime. To specify the limit on point labels, assign a number to the [maxLabelCount](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/maxLabelCount.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/#maxLabelCount') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            series: [{
                // ...
                maxLabelCount: 10
            }, {
                // ...
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-pie-chart ... >
        <dxi-series [maxLabelCount]="10" ... ></dxi-series>
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
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
    url: "/Demos/WidgetsGallery/Demo/Charts/PieWithResolvedLabelOverlapping/jQuery/Light/"
}

#####See Also#####
- [Adaptive Layout](/concepts/05%20Widgets/PieChart/89%20Adaptive%20Layout.md '/Documentation/Guide/Widgets/PieChart/Adaptive_Layout/')
- [Relocate Labels](/concepts/05%20Widgets/PieChart/15%20Point%20Labels/07%20Relocate%20Labels.md '/Documentation/Guide/Widgets/PieChart/Point_Labels/Relocate_Labels/')
- [Equally-Sized Pies](/concepts/05%20Widgets/PieChart/95%20Equally-Sized%20Pies.md '/Documentation/Guide/Widgets/PieChart/Equally-Sized_Pies/')