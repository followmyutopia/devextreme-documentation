This type of store is helpful when you use an HTML5 Web Storage (also known as **window.localStorage**) for storing your data. To provide a minimal configuration for a LocalStore, specify its **type** and **name** options as demonstrated below.

	<!--JavaScript-->var gridDataSource = {
		store: {
			type: 'local',
			name: 'myLocalStore'
		}
	};

In addition, you can specify the store's [key](/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#key) option to gain read-write access to data. A LocalStore has many more options available for configuring. For a full list, refer to the [LocalStore](/Documentation/ApiReference/Data_Layer/LocalStore/) reference section.

After you have created a data source configuration object, you need to bind it to your grid. Refer to the [Bind Data](/Documentation/Guide/UI_Widgets/Data_Grid/Data_Binding/#Bind_Data) section to learn how to do this.
