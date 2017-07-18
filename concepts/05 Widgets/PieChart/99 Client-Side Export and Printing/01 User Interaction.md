To export or print the **PieChart**, a user clicks the *"Exporting/Printing"* button and selects a command from the drop-down menu. The **Print** command opens the browser's **Print** window that lets the user select preferred printing settings and send the print job to the printer. The other commands save a file of the selected format in the user's local storage.

![DevExtreme HTML5 JavaScript PieChart Export Menu](/Content/images/doc/17_2/PieChart/visual_elements/export_menu.png)

To enable both export and printing, assign **true** to the [export](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/export/).**enabled** option. If you need only export to be available to the user, disable printing by assigning *false* to the **export**.[printingEnabled](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/export/#printingEnabled) option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            export: {
                enabled: true,
                printingEnabled: false
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart ... >
        <dxo-export
            [enabled]="true"
            [printingEnabled]="false">
        </dxo-export>
    </dx-pie-chart>

---

If you want to restrict the set of formats available for export, change the **export**.[formats](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/export/#formats) array. You can also specify the default name for the exported file using the [fileName](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/export/#fileName) option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            export: {
                enabled: true,
                formats: ["PNG", "JPEG"],
                fileName: "exported_chart"
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart ... >
        <dxo-export
            [enabled]="true"
            [formats]="['PNG', 'JPEG']"
            fileName="exported_chart">
        </dxo-export>
    </dx-pie-chart>

---

To support export and printing in **IE9** and **Safari on MacOS**, you need to set up a proxy on your server. For details, see the [Set Up a Server-Side Proxy](/Documentation/Guide/Widgets/PieChart/Client-Side_Export_and_Printing/#Set_Up_a_Server-Side_Proxy) topic.
