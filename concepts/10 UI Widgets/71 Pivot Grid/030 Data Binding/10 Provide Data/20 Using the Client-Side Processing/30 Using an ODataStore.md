[OData](http://www.odata.org) is a universal open protocol for consuming data APIs. The DevExtreme data library provides a special type of Store to access OData web services, called [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/). The following code is sufficient to provide data for **PivotGrid** using an ODataStore.

	<!--JavaScript-->var pivotGridDataSource = {
		store: {
			type: 'odata',
			url: 'http://url/to/the/source'
		}
	};


An ODataStore has many more options available for configuring. For the full list, refer to the [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/) reference section.

After you have created a data source configuration object, you need to bind it to your grid. Refer to the [Bind Data](/Documentation/Guide/UI_Widgets/Pivot_Grid/Data_Binding/#Bind_Data) section to learn how to do this.
