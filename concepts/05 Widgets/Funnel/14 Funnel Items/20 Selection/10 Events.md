When a funnel item's selection state is being changed, the **Funnel** raises the [selectionChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Events/#selectionChanged) event that you can handle with a function. If the handling function is not going to be changed during the lifetime of the widget, assign it to the [onSelectionChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#onSelectionChanged) option when you configure the widget. To check whether a funnel item was selected or the selection was cleared, call the item's [isSelected()](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Item/Methods/#isSelected) method.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            onSelectionChanged: function (e) {
                if (e.item.isSelected()) {
                    // Commands to execute when the item is selected
                } else {
                    // Commands to execute when the selection is cleared
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-funnel ...
        (onSelectionChanged)="onSelectionChanged($event)">
    </dx-funnel>

    <!--JavaScript-->
    import { DxFunnelModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        onSelectionChanged (e) {
            if (e.item.isSelected()) {
                // Commands to execute when the item is selected
            } else {
                // Commands to execute when the selection is cleared
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

If you are going to change the event handler at runtime, or if you need to attach several handlers to the **selectionChanged** event, subscribe to this event using the [on(eventName, eventHandler)](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var selectionChangedHandler1 = function (e) {
        // First handler of the "selectionChanged" event
    };

    var selectionChangedHandler2 = function (e) {
        // Second handler of the "selectionChanged" event
    };

    $("#funnelContainer").dxFunnel("instance")
        .on("selectionChanged", selectionChangedHandler1)
        .on("selectionChanged", selectionChangedHandler2);

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Handling_Events_and_Defining_Callbacks)
