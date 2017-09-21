If you want to extend the functionality of a JavaScript array, place it into an [ArrayStore](/Documentation/ApiReference/Data_Layer/ArrayStore/). It provides an interface for loading and editing data, and allows you to handle data-related events.

---
##### jQuery

    <!--JavaScript-->var fruits = [
        { fruit: 'Apples', count: 10 },
        { fruit: 'Oranges', count: 12 },
        { fruit: 'Lemons', count: 15 },
        { fruit: 'Pears', count: 20 },
        { fruit: 'Pineapples', count: 3 }
    ];

    $(function () {
        $("#chartContainer").dxChart({
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: 'array',
                    data: fruits,
                    onLoaded: function () {
                        // Event handling commands go here
                    }
                },
                paginate: false
            }),
            series: {
                argumentField: 'fruit',
                valueField: 'count'
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxChartModule } from 'devextreme-angular';
    import DataSource from 'devextreme/data/data_source';
    // ...
    export class AppComponent {
        fruits = [
            { fruit: 'Apples', count: 10 },
            { fruit: 'Oranges', count: 12 },
            { fruit: 'Lemons', count: 15 },
            { fruit: 'Pears', count: 20 },
            { fruit: 'Pineapples', count: 3 }
        ];
        chartDataSource = new DataSource({
            store: {
                type: 'array',
                data: this.fruits,
                onLoaded: function () {
                    // Event handling commands go here
                }
            },
            paginate: false
        });
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

    <!--HTML--><dx-chart [dataSource]="chartDataSource">
        <dxi-series argumentField="fruit" valueField="count"></dxi-series>
    </dx-chart>

---

As you may notice, in the previous code, the **ArrayStore** is not declared explicilty. Instead, it is wrapped in the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) instance. That is because the **Chart** requires [pagination](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) to be off in order to prevent data from partitioning. Other than that, the **DataSource** provides wide data-processing capabilities. For example, it can [map](/Documentation/Guide/Data_Layer/Data_Layer/#Data_Layer_Data_Layer_Reading_Data_Data_Transformation_Item_Mapping) objects from the array that underlies the **ArrayStore**, as shown in the following code.

---
##### jQuery

    <!--JavaScript-->var fruits = [
        { apples: 10 },
        { oranges: 12 },
        { lemons: 15 },
        { pears: 20 },
        { pineapples: 3 }
    ];
    
    $(function () {
        $("#chartContainer").dxChart({
            dataSource: new DevExpress.data.DataSource({
                store: fruits,
                map: function (item) {
                    var fruitName = Object.keys(item)[0];
                    return {
                        fruit: fruitName.charAt(0).toUpperCase() + fruitName.slice(1),
                        count: item[fruitName]
                    }
                },
                paginate: false
            }),
            series: {
                argumentField: 'fruit',
                valueField: 'count'
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxChartModule } from 'devextreme-angular';
    import DataSource from 'devextreme/data/data_source';
    // ...
    export class AppComponent {
        fruits = [
            { apples: 10 },
            { oranges: 12 },
            { lemons: 15 },
            { pears: 20 },
            { pineapples: 3 }
        ];
        chartDataSource = new DataSource({
            store: this.fruits,
            map: function (item) {
                var fruitName = Object.keys(item)[0];
                return {
                    fruit: fruitName.charAt(0).toUpperCase() + fruitName.slice(1),
                    count: item[fruitName]
                }
            },
            paginate: false
        });
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

    <!--HTML--><dx-chart [dataSource]="chartDataSource">
        <dxi-series argumentField="fruit" valueField="count"></dxi-series>
    </dx-chart>

---

[note]Even if you have [passed a JavaScript array](/Documentation/Guide/Widgets/Chart/Data_Binding/Simple_Array/Array_Only/) to the **dataSource** option, the **Chart** automatically places it into an **ArrayStore** wrapped into the **DataSource** that you can get with the [getDataSource()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#getDataSource) method.

#####See Also#####
- [Data Layer - What Are Stores](/Documentation/Guide/Data_Layer/Data_Layer/#Data_Layer_Data_Layer_Creating_DataSource_What_Are_Stores)
- [Data Layer - DataSource Examples | In-memory Data](/Documentation/Guide/Data_Layer/Data_Source_Examples/#In-memory_Data)
- [Bind Series to Data](/Documentation/Guide/Widgets/Chart/Data_Binding/Bind_Series_to_Data/)
- [Update Data in the Chart](/Documentation/Guide/Widgets/Chart/Data_Binding/Update_Data/)
- [Chart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ClientSideDataProcessing/jQuery/Light/)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

[tags]chart, data binding, provide data, ArrayStore, DataSource, pagination
