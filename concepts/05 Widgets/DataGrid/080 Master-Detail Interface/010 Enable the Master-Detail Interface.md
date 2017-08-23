To enable the master-detail interface, assign **true** to the [masterDetail](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail/).[enabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail/#enabled) option. This will display a **master-detail expand button** on the left side of each row. The master-detail expand button is used to display the detail section of a master row. Unless you [define a detail section markup](/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/#Define_Detail_Section_Markup), the detail section is empty.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		masterDetail: {
			enabled: true
		}
	});

![](/Content/images/doc/17_2/DataGrid/MasterDetail_Empty.png)