When a funnel item's hover state is being changed, the **Funnel** raises the [hoverChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Events/#hoverChanged) event that you can handle with a function. If the handling function is not going to be changed during the lifetime of the widget, assign it to the [onHoverChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#onHoverChanged) option when you configure the widget. To check whether the pointer entered or left a funnel item, call the item's [isHovered()](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Item/Methods/#isHovered) method.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            onHoverChanged: function (e) {
                if (e.item.isHovered()) {
                    // Commands to execute when the pointer enters the item
                } else {
                    // Commands to execute when the pointer leaves the item
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-funnel ...
        (onHoverChanged)="onHoverChanged($event)">
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        onHoverChanged (e) {
            if (e.item.isHovered()) {
                // Commands to execute when the pointer enters the item
            } else {
                // Commands to execute when the pointer leaves the item
            }
        };
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

---

If you are going to change the event handler at runtime or if you need to attach several handlers to the **hoverChanged** event, subscribe to this event using the [on(eventName, eventHandler)](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var hoverChangedHandler1 = function (e) {
        // First handler of the "hoverChanged" event
    };

    var hoverChangedHandler2 = function (e) {
        // Second handler of the "hoverChanged" event
    };

    $("#funnelContainer").dxFunnel("instance")
        .on("hoverChanged", hoverChangedHandler1)
        .on("hoverChanged", hoverChangedHandler2);

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Handling_Events_and_Defining_Callbacks)
