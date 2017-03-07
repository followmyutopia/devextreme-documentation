This type of Store is helpful when you use an HTML5 Web Storage (also known as **window.localStorage**) for storing your data. To provide a minimal configuration for a [LocalStore](/Documentation/ApiReference/Data_Layer/LocalStore/), specify its **type** and **name** options as demonstrated below.

	<!--JavaScript-->var pivotGridDataSource = {
		store: {
			type: 'local',
			name: 'myLocalStore'
		}
	};

After you have created a data source configuration object, you need to bind it to your grid. Refer to the [Bind Data](/Documentation/Guide/Widgets/PivotGrid/Data_Binding/#Bind_Data) section to learn how to do this.
