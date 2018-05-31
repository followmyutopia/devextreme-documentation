To ensure proper operation by the **Exporter**, several options should be specified.

- Assign a [jQuery selector](http://api.jquery.com/category/selectors/) to the [sourceContainer](/Documentation/ApiReference/Data_Visualization_Widgets/dxExporter/Configuration/#sourceContainer) option. This selector should specify the div element that contains the widget you wish to export.

- Specify the URL of your server using the [serverUrl](/Documentation/ApiReference/Data_Visualization_Widgets/dxExporter/Configuration/#serverUrl) option. In this example, it is *'http://127.0.0.1:3003'*.

- Additionally you can alter the default file name using the [fileName](/Documentation/ApiReference/Data_Visualization_Widgets/dxExporter/Configuration/#fileName) option, change the set of available formats using the [exportFormat](/Documentation/ApiReference/Data_Visualization_Widgets/dxExporter/Configuration/#exportFormat) option and enable/disable the entire export menu or only the printing button using the [showMenu](/Documentation/ApiReference/Data_Visualization_Widgets/dxExporter/Configuration/#showMenu) and [printingEnabled](/Documentation/ApiReference/Data_Visualization_Widgets/dxExporter/Configuration/#printingEnabled) options.

Now everything is ready for you to try the **Exporter** widget. Hover over the ![Exporter Icon ChartJS](/Content/images/doc/18_2/ChartJS/ExporterFormat.png) icon and choose the appropriate format to export your widget. In addition, you can change the print parameters within the Print window. To call this window, click the ![Exporter Icon ChartJS](/Content/images/doc/18_2/ChartJS/ExporterPrint.png) icon.

As you can see, the **Exporter** widget is very easy to use and presents your charts even when scripts are disabled.