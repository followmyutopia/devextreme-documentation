Regardless of the data source you use, the **Lookup** always wraps it in a [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/). Call the [getDataSource()](/Documentation/ApiReference/UI_Widgets/dxLookup/Methods/#getDataSource) method to get the instance of the **DataSource**.

    <!--JavaScript-->var lookupDataSource = $("#lookupContainer").dxLookup("getDataSource");

Now, you can call [any method](/Documentation/ApiReference/Data_Layer/DataSource/Methods/) the **DataSource** exposes. For example, you can reload data using the [load()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) method.

    <!--JavaScript-->lookupDataSource.load();

#####See Also#####
- [Data Layer - Overview](/Documentation/Guide/Data_Layer/Data_Layer/)
- [Lookup Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Basics/jQuery/Light/)

[tags]Lookup, data binding, access data source, getDataSource, reload data
