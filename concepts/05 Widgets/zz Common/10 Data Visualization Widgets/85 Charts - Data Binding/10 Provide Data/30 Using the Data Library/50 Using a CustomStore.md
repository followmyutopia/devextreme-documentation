When you have a custom web service with its own data accessing logic, use a CustomStore to operate that data. This type of store requires the implementation of a function for each data access operation. To provide data for **Chart**, **PieChart** or **Sparkline**, implement the [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) function at least. As an example of such an implementation, consider the following code snippet.

	<!--JavaScript-->var dataSource = new DevExpress.data.DataSource({
		load: function (loadOptions) {
			var d = new $.Deferred();
			$.getJSON('http://mydomain.com/MyDataService')
				.done(function (data) {
					// ...
					// process data here
					// ...
					d.resolve(data); 
			});
			return d.promise();
		}
	});

To see more examples of CustomStore implementation, refer to the [Custom Sources](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources) topic. In addition, you can review the full list of CustomStore options in the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) reference section.

After you have created a DataSource, you need to bind it to your chart. Refer to the [Bind Data](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_Data_Binding/Bind_Data/) section to learn how to do this.

You can see an example of a chart using a Custom Store in the [Use Remote Data for a Chart](/Documentation/Tutorial/Data_Visualization/Use_Remote_Data_for_Chart/#Use_Remote_Data_for_Chart) tutorial.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsremotedatasourcedataprocessingusingthedatasourceobject/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>