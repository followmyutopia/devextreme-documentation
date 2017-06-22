The **TreeList** widget raises the [selectionChanged](/Documentation/ApiReference/UI_Widgets/dxTreeList/Events/#selectionChanged) event when a row is selected or when the selection is cancelled. If the function that handles this event is going to remain unchanged, assign it to the [onSelectionChanged](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onSelectionChanged) option when you configure the widget.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            onSelectionChanged: function(e) { // Handler of the "selectionChanged" event
                var currentSelectedRowKeys = e.currentSelectedRowKeys;
                var currentDeselectedRowKeys = e.currentDeselectedRowKeys;
                var allSelectedRowKeys = e.selectedRowKeys;
                var allSelectedRowsData = e.selectedRowsData;
                // ...
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-tree-list ...
        (onSelectionChanged)="onSelectionChanged($event)">
    </dx-tree-list>

    <!--JavaScript-->
    export class AppComponent {
        onSelectionChanged (e) { // Handler of the "selectionChanged" event
            let currentSelectedRowKeys = e.currentSelectedRowKeys;
            let currentDeselectedRowKeys = e.currentDeselectedRowKeys;
            let allSelectedRowKeys = e.selectedRowKeys;
            let allSelectedRowsData = e.selectedRowsData;
            // ...
        }
    }
    
---

If you are going to change the event handler at runtime, or if you need to attach several handlers to the event, subscribe to it using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var selectionChangedEventHandler1 = function(e) {
        // First handler of the "selectionChanged" event
    };

    var selectionChangedEventHandler2 = function(e) {
        // Second handler of the "selectionChanged" event
    };

    $("#treeListContainer").dxTreeList("instance")
        .on("selectionChanged", selectionChangedEventHandler1)
        .on("selectionChanged", selectionChangedEventHandler2);

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/)
