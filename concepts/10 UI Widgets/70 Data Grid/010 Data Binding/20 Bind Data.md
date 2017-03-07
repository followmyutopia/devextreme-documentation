Regardless of the approach you've chosen to providing data, after implementing a data source, bind it to the **DataGrid** widget using the [dataSource](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource) option as demonstrated below.

	<!--JavaScript-->$(function () {
		$("#gridContainer").dxDataGrid({
			dataSource: gridDataSource
		});
	});

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridcolumnsgeneratingbydatasource/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>