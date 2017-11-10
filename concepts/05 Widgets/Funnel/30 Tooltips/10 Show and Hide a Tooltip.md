Each funnel item allows you to show its tooltip programmatically by calling the **showTooltip()** method of the [Item](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Item/) object. You can access this object [with the API methods](/Documentation/Guide/Widgets/Funnel/Funnel_Items/Access_a_Funnel_Item_Using_the_API/) or in item event handlers, such as [onItemClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#onItemClick), [onHoverChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#onHoverChanged), etc. The latter is demonstrated in the following code. To hide the tooltip, call the **hideTooltip()** method of the widget's instance.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            // Shows the tooltip only when a user clicks a funnel item
            onItemClick: function (e) {
                e.item.showTooltip();
            },
            // Hides the tooltip once the user moves the pointer away from the funnel item
            onHoverChanged: function (e) {
                if (!e.item.isHovered()) {
                    e.component.hideTooltip();
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-funnel ...
        (onItemClick)="onItemClick($event)"
        (onHoverChanged)="onHoverChanged($event)">
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // Shows the tooltip only when a user clicks a funnel item
        onItemClick (e) {
            e.item.showTooltip();
        },
        // Hides the tooltip once the user moves the pointer away from the funnel item
        onHoverChanged (e) {
            if (!e.item.isHovered()) {
                e.component.hideTooltip();
            }
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