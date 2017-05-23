DevExtreme data visualization widgets raise the following export-related events.

- [exporting](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#exporting)  
Allows you to request export details or prevent export.

- [exported](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#exported)  
Allows you to notify an end user when export is completed.

- [fileSaving](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#fileSaving)        
Allows you to access exported data in the <a href="https://en.wikipedia.org/wiki/Binary_large_object" target="_blank">BLOB</a> format and/or prevent it from being saved in a file on the user's local storage.

You can handle these events with functions. If the handling functions are not going to be changed at runtime, assign them to the [onExporting](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onExporting), [onExported](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onExported) and [onFileSaving](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onFileSaving) options when you configure the widget.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
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

Otherwise, or if you need several handlers for a single event, subscribe to the export-related events using the [on(eventName, eventHandler)](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#oneventName_eventHandler) method.

    <!--JavaScript-->
    var exportedHandler1 = function (e) {
        // First handler of the "exported" event
    };

    var exportedHandler2 = function (e) {
        // Second handler of the "exported" event
    };

    $("#chartContainer").dxChart("instance")
        .on("exported", exportedHandler1)
        .on("exported", exportedHandler2);

#####See Also#####
- [Handle Events](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/)