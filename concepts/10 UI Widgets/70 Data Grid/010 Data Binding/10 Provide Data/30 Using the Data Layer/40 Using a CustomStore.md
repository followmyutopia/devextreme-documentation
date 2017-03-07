When you have a custom web service with its own data accessing logic, use a CustomStore to operate data. This type of store requires the implementation of a function for each data access operation. The **DataGrid** widget supports a full set of CRUD operations (*insert*, *update* and *delete* operations are available with the [editing feature](/Documentation/Guide/UI_Widgets/Data_Grid/Data_Editing/) enabled):

- implement the [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) function to specify how data must be **loaded** from your web service;
- implement the [insert](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#insert) function to specify how data must be **added** to your remote data set;
- implement the [update](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#update) function to specify how data must be **updated** in your remote data set;
- implement the [delete](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#delete) function to specify how data must be **removed** from your remote data set.

The following code snippet shows how to do this. 

	<!--JavaScript-->var gridDataSource = {
		load: function (loadOptions) {
			return $.getJSON('http://mydomain.com/MyDataService');
		},
		update: function (key, values) {
			//Updating data
		},
		insert: function (values) {
			//Inserting data
		},
		remove: function (key) {
			//Deleting data
		}
	}

For details, refer to the [Custom Store](/Documentation/Guide/UI_Widgets/Data_Grid/Use_Custom_Store/) guide and the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) reference section.

After you have created a data source configuration object, bind it to your grid. Refer to the [Bind Data](/Documentation/Guide/UI_Widgets/Data_Grid/Data_Binding/#Bind_Data) section to learn how to do this.

You can see an example of a grid using a CustomStore in the [Use Remote Data for DataGrid](/Documentation/Tutorial/UI_Widgets/Use_Remote_Data_for_DataGrid/#Use_Remote_Data_for_DataGrid) tutorial.