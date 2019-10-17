You can use the **Funnel** widget to create a pyramid chart. Change the [algorithm](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/algorithm.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#algorithm') option to *"dynamicHeight"* and the [inverted](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/inverted.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#inverted') option to **true**.

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
    import { DxFunnelModule } from "devextreme-angular";
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
    url: "/Demos/WidgetsGallery/Demo/Charts/PyramidChart/"
}

#####See Also#####
- [Funnel Items Overview](/concepts/05%20Widgets/Funnel/14%20Funnel%20Items/00%20Overview.md '/Documentation/Guide/Widgets/Funnel/Funnel_Items/Overview/')
