You can use the **Funnel** widget to create a pyramid chart. Change the [algorithm](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#algorithm) option to *"dynamicHeight"* and the [inverted](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#inverted) option to **true**.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            algorithm: "dynamicHeight",
            inverted: true
        });
    });

##### Angular

    <!--HTML--><dx-funnel ...
        algorithm="dynamicHeight"
        [inverted]="true">
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


#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/PyramidChart/jQuery/Light/"
}

#####See Also#####
- [Funnel Items Overview](/Documentation/Guide/Widgets/Funnel/Funnel_Items/Overview/)
