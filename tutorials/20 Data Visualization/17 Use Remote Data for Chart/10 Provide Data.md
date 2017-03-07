<!--playground--><!--/playground-->
<article data-show-web="/Content/Applications/16_2/DataVisualization/UseRemoteDataforChart/Step3/chart.html" data-show-first="chart.js">
Create a [CustomStore](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources) object to get JSON data from the file added in the previous step. In the configuration object of the CustomStore constructor, specify the [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) function. In the code below, the **load** function gets JSON data from the specified URL. You can make a more complex request to get filtered or sorted data, taking the load options passed as a parameter into account.

Use the created Data Store to provide the DataSource object for the chart. For this purpose, do the following.

- Define a configuration object for the DataSource object specifying the [store](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#store) option.
- Create the **DataSource** object using **chartDataSourceConfiguration** as a configuration object.
- Assign the **DataSource** object to the chart's **dataSource** option. For details on chart data binding, refer to the [Data Binding](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_Data_Binding/Provide_Data/) article.

The created Data Store loads an array of the following objects.

	[        
        {
		    "month": "january",
		    "recordLow": -7,
		    "recordHigh": 18,
		    "average": 8.9,
		    "color": "#00BFFF",
		    "temperature": [
			    { "day": 1, "t": 13.1 },
			    { "day": 2, "t": 13.2 },
                //...
			    { "day": 30, "t": 7.2 },
			    { "day": 31, "t": 7.6 }
		    ]
        },
        {...},
        ...
    ]

These objects include information on the daily temperature each month. You can define twelve series each displaying the daily temperature during a month. But the object structure is not appropriate for use with the **temperature** | **day** field as a data source for chart arguments and the **temperature** | **t** field - for chart values. Utilize the following data structure for the chart instead.

    [
        { "day": 1, "january": 13.1, "february": 6.4, ... },
        { "day": 2, "january": 13.1, "february": 6.4, ... },
        ...
    ]

or

    [
        { "month": "january", "day": 1, "t": 13.1 },
        { "month": "january", "day": 2, "t": 13.2 },
        ...
    ]

The second variant is possible if you process the data received by the Store. So assign the function processing the data to the [postProcess](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#postProcess) configuration option of the **DataSource** object.

Now you can define a series template for chart series using the [seriesTemplate](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/seriesTemplate/) object. The **nameField** option inside this object specifies the field, according to which data will be grouped in series. In this example, this option is set to *"month"*. It means that all data source objects that have the same value of the *"month"* field will be grouped in a series. 

After that, specify options that must be applied to all the chart series. For this purpose, use the [commonSeriesSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/) option.
</article>