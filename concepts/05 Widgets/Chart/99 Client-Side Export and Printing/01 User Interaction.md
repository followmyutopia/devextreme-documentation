To export or print a widget, a user clicks the *"Exporting/Printing"* button and selects a command from the drop-down menu. The **Print** command opens the browser's **Print** window that lets the user select preferred printing settings and send the print job to the printer. The other commands save a file of the selected format in the user's local storage.

<img src="/Content/images/doc/17_1/ChartJS/Client-Side-Export_exportMenu.png" alt="DevExtreme HTML5 DataVisualization Charts Export Print" style="vertical-align:middle"/>

To enable both export and printing, assign *true* to the [export](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/export/) | **enabled** option. If you need only export to be available to the user, disable printing by assigning *false* to the **export** | [printingEnabled](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/export/#printingEnabled) option.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            export: {
                enabled: true,
                printingEnabled: false
            }
        });
    });

If you want to restrict the set of formats available for export, change the **export** | [formats](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/export/#formats) array. You can also specify the default name for the exported file using the [fileName](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/export/#fileName) option.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            export: {
                enabled: true,
                formats: ["PNG", "JPEG"],
                fileName: "exported_chart"
            }
        });
    });

To support export and printing in **IE9** and **Safari on MacOS**, you need to set up a proxy on your server. For details, see the [Set Up a Server-Side Proxy](/Documentation/Guide/Widgets/Chart/Client-Side_Export_and_Printing/#Set_Up_a_Server-Side_Proxy) topic.
