[OData](http://www.odata.org) is a universal open protocol for consuming data APIs. The DevExtreme data library provides a special type of store to access OData web services, called ODataStore. The following code is sufficient for providing data for a widget using an ODataStore.

	<!--JavaScript-->var dataSource = new DevExpress.data.DataSource({
		store: {
			type: 'odata',
			url: 'http://url/to/the/source'
		},
		paginate: false
	});

[note]We recommend turning pagination off when using a DataSource. This action will prevent your data from partitioning.

In some cases, this configuration is not enough for a ODataStore to support proper operation. This may occur due to the same-origin policy restrictions. For more information, read the [Note on Same-Origin Policy](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Note_On_Same-Origin_Policy) topic.

In addition, you can specify the store's [key](/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#key) option to get a read-write access to data. An ODataStore has many more options available for configuring. For a complete list, refer to the [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/) reference section.

After you have created a DataSource, you need to bind it to your chart. Refer to the [Bind Data](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_Data_Binding/Bind_Data/) section to learn how to do this.
