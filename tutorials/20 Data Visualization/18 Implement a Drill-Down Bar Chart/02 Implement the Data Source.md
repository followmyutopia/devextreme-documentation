<article data-show-web="/Content/Applications/117_1DataVisualization/Lessons/DrillDownChart/Step2/chart.html" data-show-first="chart.js">

Drill-down charts are designed to visualize hierarchical data. In this tutorial, the chart fetches such data from the [Northwind OData Service](http://services.odata.org/V4/Northwind/). This service stores data entities, and one entity may refer to another using a [navigation property](https://msdn.microsoft.com/en-us/library/bb738520(v=vs.100).aspx). DevExtreme provides a special [Store](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores) implementation for accessing an individual OData entity - [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/).

To configure the ODataStore, pass an object with a declared **store** field to the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) constructor. Set this field
to an object with the [type](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/store/#type) and [url](/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#url) fields specified as shown in the code below. In this example, the ODataStore holds the *Categories* entity that refers to the *Products* entity. This connection between the entities is declared in the [expand](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#expand) property of the DataSource.

The top series in the chart being configured represents categories as bars. Each bar visualizes the number of product varieties in the category. Please make a note that the OData entities do not contain the product count by default. Instead, the [map](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#map) DataSource function will help to add the product count to each item of the *Categories* collection. At this point, the configuration of the chart data source is complete.

#####See Also#####
- Take a look at the powerful data solutions provided by DevExtreme. Refer to the [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/) article for further information.

In the next step, you will bind data to the top series of the drill-down chart.

</article>