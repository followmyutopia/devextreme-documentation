Bind the **SelectBox** to an array by passing it to the [dataSource](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#dataSource) option. The array may contain primitive values...

    <!--JavaScript-->var products = ["HD Video Player", "SuperHD Video Player", "SuperPlasma 50", "SuperLED 50"];

    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: products
        });
    });

... or objects.

    <!--JavaScript-->var products = [
        { name: "HD Video Player", price: 100 },
        { name: "SuperHD Video Player", price: 420 },
        { name: "SuperPlasma 50", price: 1500 },
        { name: "SuperLED 50", price: 200 }
    ];

    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: products,
            valueExpr: 'price',
            displayExpr: 'name'
        });
    });

You can create a [Query](/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept) if objects in an array need to be processed (sorted, filtered, grouped, etc.). For example, in the following code, a Query sorts objects in the `products` array by the `price` field in descending order:

    <!--JavaScript-->var products = [
        { name: "HD Video Player", price: 100 },
        // ...
    ];

    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: DevExpress.data.query(products)
                            .sortBy("price", true)
                            .toArray(),
            valueExpr: 'price',
            displayExpr: 'name'
        });
    });

#####See Also#####
- [Data Layer - Query Concept](/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept)
- [Bind to the ArrayStore](/Documentation/Guide/Widgets/SelectBox/Data_Binding/Simple_Array/ArrayStore/)
- [Access the DataSource](/Documentation/Guide/Widgets/SelectBox/Data_Binding/Access_the_DataSource/)
- [SelectBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Select_Box/Overview/jQuery/Light/)

[tags]selectBox, data binding, provide data, array, process data, query
