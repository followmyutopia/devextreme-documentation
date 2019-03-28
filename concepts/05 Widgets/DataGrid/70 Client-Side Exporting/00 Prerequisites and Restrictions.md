Client-side export requires a third-party library called [JSZip](https://stuk.github.io/jszip/). In a modular environment, it is included in the DevExtreme dependencies and is activated automatically in most of the applications. However, this does not apply to apps created with Angular CLI 6+. In such apps, you need to [register JSZip](/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/#Register_3rd-Party_Dependencies_in_Angular_CLI_6+/JSZip_Registration).

If your app does not use modules, reference the library on your page *before* the DevExtreme files:

    <!--HTML-->
    <!-- A CDN link -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.5/jszip.min.js"></script>
    <!-- or a local script -->
    <script type="text/javascript" src="js/jszip.min.js"></script>
    <!-- ... -->
    <!-- DevExtreme files are referenced here -->

The following restrictions apply when exporting data on the client side:

- Only XLSX files are supported.
- Only visible columns are exported.<sup>*</sup>
- Modifications made in the [cell](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#cellTemplate) and [row](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#rowTemplate) templates, [master-detail interface](/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/), and [data mapping](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Data_Transformation/Item_Mapping) are omitted. You can use [calculated columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue) instead of the latter.
- Excel limits the number of grouping levels to 7, while in the **DataGrid** it is unlimited.
- Client-side export in **Safari on MacOS** is possible only through a [proxy on the server](/Documentation/Guide/Widgets/DataGrid/Client-Side_Exporting/#Set_Up_a_Server-Side_Proxy).

<div style="font-size:12px;margin-bottom:10px;margin-left:25px">
    <sup>*</sup> - See the <a href="/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExporting">onExporting</a> option description for a workaround.<br />
</div>
