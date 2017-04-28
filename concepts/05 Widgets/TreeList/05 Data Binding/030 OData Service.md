To bind the **TreeList** to data provided by an OData service, use the [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/). It provides an interface for loading and editing data, and allows you to handle data-related events.

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            dataSource: new DevExpress.data.ODataStore({
                url: "https://examples.com/odata/Products",
                key: "Product_ID",
                onLoaded: function () {
                    // Event handling commands go here
                }
            })
        });
    });

Data kept in the **ODataStore** can be processed in the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/). For example, the **DataSource** can filter data.

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: "odata",
                    url: "https://examples.com/odata/Products",
                    key: "Product_ID"
                },
                filter: ["Product_Available", "=", true]
            })
        });
    });

#####See Also#####
- [Data Layer - Data Source Examples | OData](/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData)
- [TreeList Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/LocalDataPlainStructure/jQuery/Light/)

[tags]treeList, data binding, provide data, odata, ODataStore, DataSource, process data
