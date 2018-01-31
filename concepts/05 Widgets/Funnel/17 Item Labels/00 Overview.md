A label that displays the item's value or custom data can accompany each funnel item.

![Funnel Item Labels](/Content/images/doc/18_1/funnel/visual_elements/item-labels.png)

Options that configure item labels are collected in the [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/label/) object. Refer to its description in the API reference or to other topics in this section for details on item label settings.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            label: {
                // Settings for all item labels
            }
        });
    });

##### Angular

    <!--HTML--><dx-funnel ... >
        <dxo-label ... >
            <!-- Settings for all item labels -->
        </dxo-label>
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

#####See Also#####
- [Customize Labels](/Documentation/Guide/Widgets/Funnel/Item_Labels/Customize_Labels/)
- [Relocate Labels](/Documentation/Guide/Widgets/Funnel/Item_Labels/Relocate_Labels/)
- [Funnel Demos](/Demos/WidgetsGallery/Demo/Charts/FunnelChart/jQuery/Light/)
