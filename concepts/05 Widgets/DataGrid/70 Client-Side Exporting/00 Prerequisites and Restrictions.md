Client-side exporting requires a third-party library called [JSZip](https://stuk.github.io/jszip/). In a modular environment, it is included in the DevExtreme dependencies and activated automatically in most applications. However, this does not apply to apps created with Angular CLI 6+. In such apps, you need to [register](https://github.com/DevExpress/devextreme-angular/blob/master/docs/setup-3rd-party-dependencies.md#jszip-library-registration) JSZip.

If your app does not use modules, reference the library in your page *before* the DevExtreme files:

    <!--HTML-->
    <!-- A CDN link -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.5/jszip.min.js"></script>
    <!-- or a local script -->
    <script type="text/javascript" src="js/jszip.min.js"></script>
    <!-- ... -->
    <!-- DevExtreme files are referenced here -->

The following restrictions apply when exporting data on the client side:

- Only XLSX files are supported.
- Exported files omit modifications the [cell](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#cellTemplate) and [row](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#rowTemplate) templates, [master-detail interface](/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/), and [data mapping](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Data_Transformation/Item_Mapping) make. You can use [calculated columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue) instead of the latter.
- Excel limits the number of grouping levels to 7, while in the **DataGrid** it is unlimited.
- Excel's data format support is limited to the [predefined formats](/Documentation/ApiReference/Common/Object_Structures/format/#type) with the exception of *"largeNumber", "quarterAndYear", "second", "millisecond", "quarter", "hour"*, and *"minute"*.
- Client-side exporting in **Safari on MacOS** is possible only through a [proxy on the server](/Documentation/Guide/Widgets/DataGrid/Client-Side_Exporting/#Set_Up_a_Server-Side_Proxy).

