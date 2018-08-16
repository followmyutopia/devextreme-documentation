DevExtreme data visualization widgets raise the following exporting-related events.

- [exporting](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Events/#exporting)  
Allows you to request exporting details or prevent exporting.

- [exported](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Events/#exported)  
Allows you to notify an end user when exporting is completed.

- [fileSaving](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Events/#fileSaving)        
Allows you to access exported data in the <a href="https://en.wikipedia.org/wiki/Binary_large_object" target="_blank">BLOB</a> format and/or prevent it from being saved in a file on the user's local storage.

You can handle these events with functions. If the handling functions are not going to be changed at runtime, assign them to the [onExporting](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#onExporting), [onExported](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#onExported) and [onFileSaving](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#onFileSaving) options when you configure the widget.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
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

    <!--HTML--><dx-funnel ...
        (onExporting)="onExporting($event)"
        (onExported)="onExported($event)"
        (onFileSaving)="onFileSaving($event)">
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
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
            DxFunnelModule
        ],
        // ...
    })

---

Otherwise, or if you need several handlers for a single event, subscribe to the exporting-related events using the [on(eventName, eventHandler)](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var exportedHandler1 = function (e) {
        // First handler of the "exported" event
    };

    var exportedHandler2 = function (e) {
        // Second handler of the "exported" event
    };

    $("#funnelContainer").dxFunnel("instance")
        .on("exported", exportedHandler1)
        .on("exported", exportedHandler2);

#####See Also#####
#include common-link-handleevents