[note] This topic focuses on options that customize the text of item labels. There are other options that customize labels, such as [backgroundColor](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/label/backgroundColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/label/#backgroundColor'), [font](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/label/font/font.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/label/font/'), [border](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/label/border/border.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/label/border/'), etc., but their purpose and application is rather obvious, and for this reason, they are not detailed in this topic. For more information on them, please refer to the [label](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/label/label.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/label/') section of the API reference.

If you need to change the text displayed by funnel items, declare the [customizeText](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/label/customizeText.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/label/#customizeText') function. It must return a string value. The argument of this function contains information about the item whose label is being customized. In the following example, this function instructs item labels to display both the argument and value of a funnel item.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            label: {
                customizeText: function (itemInfo) {
                    return itemInfo.item.argument + ': ' + itemInfo.value;
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-funnel ... >
        <dxo-label
            [customizeText]="customizeText">
        </dxo-label>
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        customizeText (itemInfo) {
            return itemInfo.item.argument + ': ' + itemInfo.value;
        }
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
- [Funnel Demos](/Demos/WidgetsGallery/Demo/Charts/FunnelChart/jQuery/Light/)
