Regardless of the approach you've chosen to provide data, after implementing a data source, bind it to the **PivotGrid** widget using the [dataSource](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource) option as demonstrated below. 

It is also recommended that you declare the [fields](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) array and describe data from the DataSource for the **PivotGrid** widget there.

	<!--JavaScript-->var pivotGridDataSource = {
		store: {
			//...
		},		
		fields: [{
			//...
		},
		//...
		],
	};
	
	var dxPivotGridOptions = {
		dataSource: pivotGridDataSource
	};