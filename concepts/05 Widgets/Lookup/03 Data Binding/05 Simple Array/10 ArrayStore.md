Extend a JavaScript array's functionality by placing it into an [ArrayStore](/Documentation/ApiReference/Data_Layer/ArrayStore/). It provides an interface for loading and editing data, and allows you to handle data-related events.

    <!--JavaScript-->$(function() {
        $("#lookupContainer").dxLookup({
            dataSource: new DevExpress.data.ArrayStore({
                data: products,
                onLoaded: function() {
                    // Event handling commands go here
                }
            }),
            valueExpr: 'price',
            displayExpr: 'name'
        });
    });

Data kept in the **ArrayStore** can be processed in a [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/). For example, the **DataSource** can sort data.

    <!--JavaScript-->
    var products = [
        { name: "HD Video Player", price: 100 },
        { name: "SuperHD Video Player", price: 420 },
        { name: "SuperPlasma 50", price: 1500 },
        { name: "SuperLED 50", price: 200 }
    ];
    
    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: new DevExpress.data.DataSource({
                store: products,
                sort: { getter: "name", desc: true }
            }),
            valueExpr: 'price',
            displayExpr: 'name'
        });
    });

[note]Even if you have [passed a JavaScript array](/Documentation/Guide/Widgets/Lookup/Data_Binding/Simple_Array/Array_Only/) to the **dataSource** option, the **Lookup** automatically places it into an **ArrayStore** wrapped into the **DataSource** you can get with the [getDataSource()](/Documentation/ApiReference/UI_Widgets/dxLookup/Methods/#getDataSource) method.

#####See Also#####
- [Data Layer - What Are Stores](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores)
- [Data Layer - DataSource Examples | In-memory Data](/Documentation/Guide/Data_Layer/Data_Source_Examples/#In-memory_Data)
- [Access the DataSource](/Documentation/Guide/Widgets/Lookup/Data_Binding/Access_the_DataSource/)
- [Lookup Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Basics/jQuery/Light/)

[tags]Lookup, data binding, provide data, ArrayStore, DataSource, process data
