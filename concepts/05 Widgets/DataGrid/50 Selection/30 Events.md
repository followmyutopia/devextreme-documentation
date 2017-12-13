The **DataGrid** widget raises the [selectionChanged](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#selectionChanged) event when a row is selected, or the selection is cleared. If the function that handles this event is going to remain unchanged, assign it to the [onSelectionChanged](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onSelectionChanged) option when you configure the widget. Note that information on selected and deselected rows is passed to the handler only when selection is not [deferred](/Documentation/Guide/Widgets/DataGrid/Enhance_Performance_on_Large_Datasets/#Deferred_Selection).

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
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
    <dx-data-grid ...
        (onSelectionChanged)="onSelectionChanged($event)">
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        onSelectionChanged (e) { // Handler of the "selectionChanged" event
            let currentSelectedRowKeys = e.currentSelectedRowKeys;
            let currentDeselectedRowKeys = e.currentDeselectedRowKeys;
            let allSelectedRowKeys = e.selectedRowKeys;
            let allSelectedRowsData = e.selectedRowsData;
            // ...
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---

If you are going to change the event handler at runtime, or if you need to attach several handlers to the event, subscribe to it using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var selectionChangedEventHandler1 = function(e) {
        // First handler of the "selectionChanged" event
    };

    var selectionChangedEventHandler2 = function(e) {
        // Second handler of the "selectionChanged" event
    };

    $("#dataGridContainer").dxDataGrid("instance")
        .on("selectionChanged", selectionChangedEventHandler1)
        .on("selectionChanged", selectionChangedEventHandler2);

#####See Also#####
#include common-link-handleevents
