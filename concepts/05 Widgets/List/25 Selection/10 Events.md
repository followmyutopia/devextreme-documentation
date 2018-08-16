The **List** widget fires the [selectionChanged](/Documentation/ApiReference/UI_Widgets/dxList/Events/#selectionChanged) event when an item is selected or when the selection is cancelled. The widget also fires the [selectAllValueChanged](/Documentation/ApiReference/UI_Widgets/dxList/Events/#selectAllValueChanged) event when the [*"Select All"*](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectAllMode) check box has changed its value. If the functions that handle these events are not going to be changed during the lifetime of the widget, assign them to the corresponding **on*EventName*** options when you configure the widget.

---
#####jQuery

    <!--JavaScript-->$(function () {
        $("#listContainer").dxList({
            // ...
            onSelectionChanged: function(e) {
                var addedItems = e.addedItems;
                var removedItems = e.removedItems;
                // Handler of the "selectionChanged" event
            },
            onSelectAllValueChanged: function(e) {
                var newCheckBoxValue = e.value;
                // Handler of the "selectAllValueChanged" event
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-list ...
        (onSelectionChanged)="onSelectionChanged($event)"
        (onSelectAllValueChanged)="onSelectAllValueChanged($event)">
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onSelectionChanged (e) {
            let addedItems = e.addedItems;
            let removedItems = e.removedItems;
            // Handler of the "selectionChanged" event
        }
        onSelectAllValueChanged (e) {
            let newCheckBoxValue = e.value;
            // Handler of the "selectAllValueChanged" event
        }
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/List/ListSelection/jQuery/Light/"
}

If you are going to change the event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to this event using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxList/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var selectionChangedEventHandler1 = function(e) {
        // First handler of the "selectionChanged" event
    };

    var selectionChangedEventHandler2 = function(e) {
        // Second handler of the "selectionChanged" event
    };

    $("#listContainer").dxList("instance")
        .on("selectionChanged", selectionChangedEventHandler1)
        .on("selectionChanged", selectionChangedEventHandler2);

#####See Also#####
- [Widget Basics - Handle Events](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events)
- [List API Reference](/Documentation/ApiReference/UI_Widgets/dxList/)