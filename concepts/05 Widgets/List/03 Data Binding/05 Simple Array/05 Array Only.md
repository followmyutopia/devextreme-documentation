To bind the **List** to an array, pass this array to the [dataSource](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#dataSource) option. The array may contain primitive values...

    <!--JavaScript-->var fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];

    $(function() {
        $("#listContainer").dxList({
            dataSource: fruits
        });
    });

... or objects.

    <!--JavaScript-->var fruits = [
        { fruit: "Apples", count: 10 },
        { fruit: "Oranges", count: 12 },
        { fruit: "Lemons", count: 15 },
        { fruit: "Pears", count: 20 },
        { fruit: "Pineapples", count: 3 }
    ];

    $(function() {
        $("#listContainer").dxList({
            dataSource: fruits,
            itemTemplate: function(data, _, element) {
                element.append(
                    $("<b>").text(data.fruit), $("<br />"),
                    $("<p>").text(data.count).css("margin", 0)
                )
            }
        });
    });

If objects in an array need to be processed (sorted, filtered, grouped, etc.), you can create a [Query](/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept). For example, in the following code, a Query sorts objects in the `fruits` array by the `count` field in descending order.

    <!--JavaScript-->var fruits = [
        { fruit: "Apples", count: 10 },
        // ...
    ];

    $(function() {
        $("#listContainer").dxList({
            dataSource: DevExpress.data.query(fruits)
        				    .sortBy("count", true)
                            .toArray(),
            itemTemplate: function(data, _, element) {
                element.append(
                    $("<b>").text(data.fruit), $("<br />"),
                    $("<p>").text(data.count).css("margin", 0)
                )
            }
        });
    });

#####See Also#####
- [Data Layer - Query Concept](/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept)
- [List - Bind to the ArrayStore](/Documentation/Guide/Widgets/List/Data_Binding/Simple_Array/ArrayStore/)
- [List - Access the DataSource](/Documentation/Guide/Widgets/List/Data_Binding/Access_the_DataSource/)
- [List Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/jQuery/Light/)
- [List API Reference](/Documentation/ApiReference/UI_Widgets/dxList/)

[tags]list, data binding, provide data, array, process data, query