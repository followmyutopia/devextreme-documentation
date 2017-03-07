This type of store is great when you need a simple data source with the data lifetime equaling the lifetime of your application. An ArrayStore is created from an array of plain objects. **DataGrid** creates it automatically when such an array is specified for it (see [Using an Array of Objects](/Documentation/Guide/UI_Widgets/Data_Grid/Data_Binding/#Provide_Data/Using_an_Array_of_Objects)). However, you may need to create an ArrayStore explicitly if you require handling the events of data loading, updating, etc., in a special way on the store level. The code snippet below illustrates the minimal configuration of an ArrayStore that can be used to provide data for the **DataGrid** widget.

	<!--JavaScript-->var gridDataSource = {
		store: {
			type: 'array',
			data: [
				{ author: 'D. Adams', title: "The Hitchhiker's Guide to the Galaxy", year: 1979, genre: 'Comedy, sci-fi' },
				{ author: 'K. Vonnegut', title: "Cat's Cradle", year: 1963, genre: 'Satire, sci-fi' },
				{ author: 'M. Mitchell', title: "Gone with the Wind", year: 1936, genre: 'Historical fiction' }
			]
		}
	};

In addition, you can specify the store's [key](/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key) option to have read-write access of data. An ArrayStore has many more options available for configuring. For the full list, refer to the [ArrayStore](/Documentation/ApiReference/Data_Layer/ArrayStore/) reference section.

After you have created a data source configuration object, you need to bind it to your grid. Refer to the [Bind Data](/Documentation/Guide/UI_Widgets/Data_Grid/Data_Binding/#Bind_Data) section to learn how to do this.
