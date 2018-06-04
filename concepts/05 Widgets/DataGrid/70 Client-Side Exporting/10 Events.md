The **DataGrid** raises the following export-related events:

- [exporting](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#exporting)  
Allows you to request export details or prevent export. Can also be used to adjust grid columns before exporting.

- [exported](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#exported)  
Allows you to notify an end user when exporting is completed.

- [fileSaving](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#fileSaving)        
Allows you to access the exported data in the [BLOB](https://en.wikipedia.org/wiki/Binary_large_object) format and/or prevent it from being saved on the user's local storage.

You can handle these events with functions. Assign the handling functions to the [onExporting](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExporting), [onExported](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExported) and [onFileSaving](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onFileSaving) options when you configure the widget if they are going to remain unchanged at runtime.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            onExporting: function (e) {
                // Handler of the "exporting" event
            },
            onExported: function (e) {
                // Handler of the "exported" event
            },
            onFileSaving: function (e) {
                // Handler of the "fileSaving" event
            }
        });
    });


##### Angular

    <!--HTML--><dx-data-grid ...
        (onExporting)="onExporting($event)"
        (onExported)="onExported($event)"
        (onFileSaving)="onFileSaving($event)">
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        onExporting (e) {
            // Handler of the "exporting" event
        };
        onExported (e) {
            // Handler of the "exported" event
        };
        onFileSaving (e) {
            // Handler of the "fileSaving" event
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

Otherwise (or if you need several handlers for a single event), subscribe to the export-related events using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var exportedHandler1 = function (e) {
        // First handler of the "exported" event
    };

    var exportedHandler2 = function (e) {
        // Second handler of the "exported" event
    };

    $("#dataGridContainer").dxDataGrid("instance")
        .on("exported", exportedHandler1)
        .on("exported", exportedHandler2);

#####See Also#####
#include common-link-handleevents
