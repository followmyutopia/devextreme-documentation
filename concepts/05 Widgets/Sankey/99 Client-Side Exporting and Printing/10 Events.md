DevExtreme data visualization widgets raise the following exporting-related events:

- [exporting](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Events/#exporting)  
Allows you to request export details or prevent exporting.

- [exported](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Events/#exported)  
Allows you to notify an end user when exporting is completed.

- [fileSaving](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Events/#fileSaving)        
Allows you to access exported data in the <a href="https://en.wikipedia.org/wiki/Binary_large_object" target="_blank">BLOB</a> format and/or prevent it from being saved on the user's device.

You can handle these events with functions. If the handling functions are not going to be changed at runtime, assign them to the [onExporting](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#onExporting), [onExported](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#onExported) and [onFileSaving](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#onFileSaving) options when you configure the widget.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#sankeyContainer").dxSankey({
            // ...
            onExporting: function(e) {
                // Handler of the "exporting" event
            },
            onExported: function(e) {
                // Handler of the "exported" event
            },
            onFileSaving: function(e) {
                // Handler of the "fileSaving" event
            }
        });
    });


##### Angular

    <!--HTML--><dx-sankey ...
        (onExporting)="onExporting($event)"
        (onExported)="onExported($event)"
        (onFileSaving)="onFileSaving($event)">
    </dx-sankey>

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onExporting(e) {
            // Handler of the "exporting" event
        };
        onExported(e) {
            // Handler of the "exported" event
        };
        onFileSaving(e) {
            // Handler of the "fileSaving" event
        }
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

---

Otherwise (or if you need several handlers for a single event), subscribe to the exporting-related events using the [on(eventName, eventHandler)](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var exportedHandler1 = function(e) {
        // First handler of the "exported" event
    };

    var exportedHandler2 = function(e) {
        // Second handler of the "exported" event
    };

    $("#sankeyContainer").dxSankey("instance")
        .on("exported", exportedHandler1)
        .on("exported", exportedHandler2);

#####See Also#####
#include common-link-handleevents
