Follow the steps below to enable exporting.

- Add a link to the JSZip library to your app/site. Learn where you can get it from topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

 
        <!--HTML-->
        <script type="text/javascript" src="js/jszip.min.js"></script>


    [note]Reference the **jszip.min.js** script *before* the DevExtreme scripts.

- Set the grid's [export](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/) | [enabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/#enabled) option to **true**.

- Specify a default name for the resulting file using the **export** | [fileName](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/#fileName) option.

<!--...-->

	<!--JavaScript-->var gridOptions = {
		//...
		export : {
			enabled: true,
			fileName: 'myGrid'
		}
	}

[note]Exporting is performed using client-side API in browsers. However, some browsers (including **IE9** and **Safari on Mac OS**) do not implement an API for saving files, thus the exporting feature will not work correctly without the use of additional services. Refer to the [Set up Server-side Proxy](/Documentation/Guide/Widgets/DataGrid/Client-Side_Export/#Set_up_Server-side_Proxy) section for details.

When export is enabled, an Export button is displayed above the grid.

![DevExtreme DataGrid Exporting](/Content/images/doc/17_2/DataGrid/Export.png)

Pressing this button, an end user can export grid data in the required format.

When a possibility to export only the currently selected rows is needed, set the **export** | [allowExportSelectedData](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/#allowExportSelectedData) option to **true**. End users will be given a choice between exporting the total grid or selected rows only.

![DevExtreme DataGrid Exporting Selected Rows](/Content/images/doc/17_2/DataGrid/Export_SelectedRows.png)

Changes caused by the [cell template](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#cellTemplate), [row template](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#rowTemplate), [master-detail interface](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Master-Detail_Interface) and [data mapping](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Data_Transformation/Item_Mapping) will be omitted in the exported file. 

[note]Instead of data mapping, you can use [calculated columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue), which will be included in the exported file.
