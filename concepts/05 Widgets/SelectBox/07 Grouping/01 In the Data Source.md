Items in the **SelectBox** can be grouped if they are grouped in the data source. The **SelectBox** recognizes a group when it finds an object with the **key** and **items** fields. The **key** is the group header, the **items** are items that fall into the group. For example, the `fruitsVegetables` array from the following code produces two groups with three items each. Note that the **SelectBox** needs to be informed that it deals with grouped data, therefore its [grouped](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#grouped) option is set to **true**.

---
#####jQuery

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
        $("#selectBoxContainer").dxSelectBox({
            dataSource: fruitsVegetables,
            grouped: true,
            displayExpr: 'name',
            valueExpr: 'count'
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxSelectBoxModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        fruitsVegetables = [{
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
    }
    @NgModule({
         imports: [
             // ...
             DxSelectBoxModule
         ],
         // ...
     })

    <!--HTML-->
    <dx-select-box
        [dataSource]="fruitsVegetables"
        [grouped]="true"
        displayExpr="name"
        valueExpr="count">
    </dx-select-box>

---

If objects in your data source miss the **key** and **items** fields, use the [map](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#map) function of the [DevExtreme DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) to create **key** + **items** field mappings. You can find more information on the **map** function in the [Data Layer - Item Mapping](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Data_Transformation/Item_Mapping) topic.

---
#####jQuery

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
        $("#selectBoxContainer").dxSelectBox({
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

#####Angular

    <!--TypeScript-->
    import { DxSelectBoxModule } from 'devextreme-angular';
    import DataSource from 'devextreme/data/data_source';
    // ...
    export class AppComponent {
        fruitsVegetables = [{
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
        selectBoxDataSource = new DataSource({
            store: fruitsVegetables,
            map: function(item) {
                return {
                    key: item.type,
                    items: item.collection
                }
            }
        });
    }
    @NgModule({
         imports: [
             // ...
             DxSelectBoxModule
         ],
         // ...
     })


    <!--HTML-->
    <dx-select-box
        [dataSource]="selectBoxDataSource"
        [grouped]="true"
        displayExpr="name"
        valueExpr="count">
    </dx-select-box>

---

If your data is not grouped, you can group it using the [group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) option of the **DataSource**. See the [Data Layer - Grouping](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Grouping) topic for details.

---
#####jQuery

    <!--JavaScript-->var fruitsVegetables = [
        { type: "Fruits", name: "Apples", count: 10 },
        { type: "Fruits", name: "Oranges", count: 12 },
        { type: "Fruits", name: "Lemons", count: 15 },
        { type: "Vegetables", name: "Potatoes", count: 5 },
        { type: "Vegetables", name: "Tomatoes", count: 9 },
        { type: "Vegetables", name: "Turnips", count: 8 }
    ];

    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: new DevExpress.data.DataSource({
                store: fruitsVegetables,
                group: "type"
            }),
            grouped: true,
            displayExpr: 'name',
            valueExpr: 'count'
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxSelectBoxModule } from 'devextreme-angular';
    import DataSource from 'devextreme/data/data_source';
    // ...
    export class AppComponent {
        fruitsVegetables = [
            { type: "Fruits", name: "Apples", count: 10 },
            { type: "Fruits", name: "Oranges", count: 12 },
            { type: "Fruits", name: "Lemons", count: 15 },
            { type: "Vegetables", name: "Potatoes", count: 5 },
            { type: "Vegetables", name: "Tomatoes", count: 9 },
            { type: "Vegetables", name: "Turnips", count: 8 }
        ];
        selectBoxDataSource = new DataSource({
            store: fruitsVegetables,
            group: "type"
        });
    }
    @NgModule({
         imports: [
             // ...
             DxSelectBoxModule
         ],
         // ...
     })


    <!--HTML-->
    <dx-select-box
        [dataSource]="selectBoxDataSource"
        [grouped]="true"
        displayExpr="name"
        valueExpr="count">
    </dx-select-box>

---

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Select_Box/GroupedItems/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

#####See Also#####
- [SelectBox - Grouping | Customize Group Headers](/Documentation/Guide/Widgets/SelectBox/Grouping/Customize_Group_Headers/)
- [SelectBox API Reference](/Documentation/ApiReference/UI_Widgets/dxSelectBox/)

[tags]selectBox, grouped, key, items, group items, map items
