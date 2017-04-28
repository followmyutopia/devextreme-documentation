Regardless of the data source you use, the **TreeList** always wraps it in the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/). To get a **DataSource** instance, call the [getDataSource()](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#getDataSource) method.

    <!--JavaScript-->
    var treeListDataSource = $("#treeListContainer").dxTreeList("getDataSource");

You can now call [any method](/Documentation/ApiReference/Data_Layer/DataSource/Methods/) exposed by the **DataSource**. For example, you can reload data using the [reload()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#reload) method.

    <!--JavaScript-->
    treeListDataSource.reload();

#####See Also#####
- [Data Layer - Overview](/Documentation/Guide/Data_Layer/Data_Layer/)
- [TreeList Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/LocalDataPlainStructure/jQuery/Light/)
- [TreeList API Reference](/Documentation/ApiReference/UI_Widgets/dxTreeList/)

[tags]treeList, data binding, access data source, getDataSource, reload data
