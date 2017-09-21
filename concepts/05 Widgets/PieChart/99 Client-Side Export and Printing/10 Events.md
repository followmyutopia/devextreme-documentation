DevExtreme data visualization widgets raise the following export-related events.

- [exporting](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Events/#exporting)  
Allows you to request export details or prevent export.

- [exported](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Events/#exported)  
Allows you to notify an end user when export is completed.

- [fileSaving](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Events/#fileSaving)        
Allows you to access exported data in the <a href="https://en.wikipedia.org/wiki/Binary_large_object" target="_blank">BLOB</a> format and/or prevent it from being saved in a file on the user's local storage.

You can handle these events with functions. If the handling functions are not going to be changed at runtime, assign them to the [onExporting](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#onExporting), [onExported](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#onExported) and [onFileSaving](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#onFileSaving) options when you configure the widget.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
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

    <!--HTML--><dx-pie-chart ...
        (onExporting)="onExporting($event)"
        (onExported)="onExported($event)"
        (onFileSaving)="onFileSaving($event)">
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from 'devextreme-angular';
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
            DxPieChartModule
        ],
        // ...
    })

---

Otherwise, or if you need several handlers for a single event, subscribe to the export-related events using the [on(eventName, eventHandler)](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var exportedHandler1 = function (e) {
        // First handler of the "exported" event
    };

    var exportedHandler2 = function (e) {
        // Second handler of the "exported" event
    };

    $("#pieChartContainer").dxPieChart("instance")
        .on("exported", exportedHandler1)
        .on("exported", exportedHandler2);

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Handling_Events_and_Defining_Callbacks)