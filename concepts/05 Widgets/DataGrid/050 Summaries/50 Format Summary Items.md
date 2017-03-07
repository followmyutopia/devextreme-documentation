If you need the summary items to look different in the UI, you can utilize the following customization options.

* **Value Format**      
Use the [valueFormat](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#valueFormat) option to specify what kind of data is represented by the summary item.

* **Text Format**       
To accompany the summary value with a text, use the [displayFormat](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#displayFormat) option. If you need a full control on a string that will be shown in UI, use the [customizeText](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#customizeText) function. The summary value is passed into this function and can be changed.

A sample format configuration for the **variance** aggregate function created in the [Custom Aggregate Functions](/Documentation/Guide/Widgets/DataGrid/Summaries/#Custom_Aggregate_Functions) topic is shown below.

    <!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		summary: {
			totalItems: [{
				// ...
				valueFormat: {
					type: 'exponential',
					precision: 3
				},
				displayFormat: 'Variance: {0}'
			}]
			// ...
		}
	});