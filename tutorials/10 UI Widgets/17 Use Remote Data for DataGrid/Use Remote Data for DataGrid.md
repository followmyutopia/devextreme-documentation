<!--playground--><!--/playground-->
<article data-show-web="/Content/Applications/16_1/Framework/UseRemoteDataforDataGrid/Solution/grid.html" data-show-first="grid.js">
Data for DevExtreme widgets can be loaded from a locally located resource and from a remote service. To simplify your work with data, DevExtreme supplies a Data Library. This library includes the DataSource object that keeps sorting, grouping, filtering and data transformation options, and applies them each time data is loaded. The DataSource underlying data access logic is isolated in a **Store**. Unlike the DataSource, a Store is a stateless object implementing a universal interface for reading and modifying data. Each Store contains the same set of methods. 

The following Store types are implemented out of the box.

* [Array Data Store](/Documentation/ApiReference/Data_Layer/ArrayStore/) (takes an array of data).
* [Local Data Store](/Documentation/ApiReference/Data_Layer/LocalStore/) (works with the *window.localStorage* object).
* [OData Store](/Documentation/ApiReference/Data_Layer/ODataStore/) (works with the OData protocol). 

All these Stores have a single interface and thus can be easily changed to use another data source. In this tutorial, you will learn how to create a DataSource object for the [DataGrid](/Documentation/ApiReference/UI_Widgets/dxDataGrid/) widget using a [custom Store](/Documentation/ApiReference/Data_Layer/CustomStore/) that accesses data from a custom service in a JSON format.



#####See Also#####
- [Add Data-Based Widgets to MVC Project](/Documentation/Tutorial/UI_Widgets/Add_Data-Based_Widgets_to_MVC_Project/) - basics for adding a widget to MVC application
- [Data Layer Article](/Documentation/Guide/Data_Layer/Data_Layer/) - information about the Data Library
- [Data Layer Tutorials](/Documentation/Tutorials/#datalayer) - examples on using the Data Library
- [DataGrid Reference](/Documentation/ApiReference/UI_Widgets/dxDataGrid/) - a full list of grid options and methods

</article>