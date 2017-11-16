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


<a href='/Demos/WidgetsGallery/Demo/Charts/PyramidChart/jQuery/Light/' class='button orange small fix-width-155' target='_blank'>View Demo</a>

#####See Also#####
- [Funnel Items Overview](/Documentation/Guide/Widgets/Funnel/Funnel_Items/Overview/)
