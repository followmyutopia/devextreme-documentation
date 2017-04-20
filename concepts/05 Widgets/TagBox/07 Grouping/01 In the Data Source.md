Items in the **TagBox** can be grouped if they are grouped in the data source. The **TagBox** recognizes a group when it finds an object with the **key** and **items** fields. The **key** is the group header, the **items** are items that fall into the group. For example, the `fruitsVegetables` array from the following code produces two groups with three items each. Note that the **TagBox** needs to be informed that it deals with grouped data, therefore its [grouped](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#grouped) option is set to *true*.

    <!--JavaScript-->var fruitsVegetables = [{
        key: "Fruits",
        items: [
            { name: "Apples", count: 10 },
            { name: "Oranges", count: 12 },
            { name: "Lemons", count: 15 }
        ]
    }, {
        key: "Vegetables",
        items: [
            { name: "Potatoes", count: 5 },
            { name: "Tomatoes", count: 9 },
            { name: "Turnips", count: 8 }
        ]
    }];

    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: fruitsVegetables,
            grouped: true,
            displayExpr: 'name',
            valueExpr: 'count'
        });
    });

If objects in your data source miss the **key** and **items** fields, use the [map](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#map) function of the [DevExtreme DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) to create **key** + **items** field mappings. You can find more information on the **map** function in the [Data Layer - Item Mapping](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Data_Transformation/Item_Mapping) topic.

    <!--JavaScript-->var fruitsVegetables = [{
        type: "Fruits",
        collection: [
            { name: "Apples", count: 10 },
            { name: "Oranges", count: 12 },
            { name: "Lemons", count: 15 }
        ]
    }, {
        type: "Vegetables",
        collection: [
            { name: "Potatoes", count: 5 },
            { name: "Tomatoes", count: 9 },
            { name: "Turnips", count: 8 }
        ]
    }];

    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: new DevExpress.data.DataSource({
                store: fruitsVegetables,
                map: function(item) {
                    return {
                        key: item.type,
                        items: item.collection
                    }
                }
            }),
            grouped: true,
            displayExpr: 'name',
            valueExpr: 'count'
        });
    });

If your data is not grouped at all, you can group it using the [group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) option of the **DataSource**. See the [Data Layer - Grouping](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Grouping) topic for details.

    <!--JavaScript-->var fruitsVegetables = [
        { type: "Fruits", name: "Apples", count: 10 },
        { type: "Fruits", name: "Oranges", count: 12 },
        { type: "Fruits", name: "Lemons", count: 15 },
        { type: "Vegetables", name: "Potatoes", count: 5 },
        { type: "Vegetables", name: "Tomatoes", count: 9 },
        { type: "Vegetables", name: "Turnips", count: 8 }
    ];

    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: new DevExpress.data.DataSource({
                store: fruitsVegetables,
                group: "type"
            }),
            grouped: true,
            displayExpr: 'name',
            valueExpr: 'count'
        });
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tag_Box/GroupedItems/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

#####See Also#####
- [TagBox - Grouping | Customize Group Headers](/Documentation/Guide/Widgets/TagBox/Grouping/Customize_Group_Headers/)
- [TagBox API Reference](/Documentation/ApiReference/UI_Widgets/dxTagBox/)

[tags]tagBox, grouped, key, items, group items, map items
