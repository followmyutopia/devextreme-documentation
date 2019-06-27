The legend is a component that helps a user identify funnel items. The legend contains several items, one per funnel item, each consisting of a colored marker and text showing the funnel item's argument.

![Funnel Legend](/Content/images/doc/19_2/Funnel/visual_elements/legend.png)

Options that configure the legend's appearance, location, and content are collected in the [legend](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/legend/) object. To make the legend visible, set the **legend**.**visible** option to **true**.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            legend: {
                visible: true
            }
        });
    });

##### Angular

    <!--HTML--><dx-funnel ... >
        <dxo-legend [visible]="true"></dxo-legend>
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

#####See Also#####
- [Relocate the Legend](/Documentation/Guide/Widgets/Funnel/Legend/Relocate_the_Legend/)
- [Rearrange Legend Items](/Documentation/Guide/Widgets/Funnel/Legend/Rearrange_Legend_Items/)
- [User Interaction with the Legend](/Documentation/Guide/Widgets/Funnel/Legend/User_Interaction/)