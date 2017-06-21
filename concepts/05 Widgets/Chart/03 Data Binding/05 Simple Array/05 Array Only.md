To bind the **Chart** to an array, pass this array to the [dataSource](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#dataSource) option. The array should contain objects.

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
            dataSource: fruits,
            series: {
                // See details in the "Bind Series to Data" topic
                argumentField: 'fruit',
                valueField: 'count'
            }
        });
    });

##### Angular

    <!--JavaScript-->
    export class AppComponent {
        fruits = [
            { fruit: 'Apples', count: 10 },
            { fruit: 'Oranges', count: 12 },
            { fruit: 'Lemons', count: 15 },
            { fruit: 'Pears', count: 20 },
            { fruit: 'Pineapples', count: 3 }
        ];
    }

    <!--HTML--><dx-chart [dataSource]="fruits">
        <!-- See details in the "Bind Series to Data" topic -->
        <dxi-series argumentField="fruit" valueField="count"></dxi-series>
    </dx-chart>

---

After that, you need to bind one or several **Chart** series to data. Depending on the [series type](/Documentation/Guide/Widgets/Chart/Series_Types/) you chose, use one of the techniques described in the [Bind Series to Data](/Documentation/Guide/Widgets/Chart/Data_Binding/Bind_Series_to_Data/) topic.

<a href='https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/LocalDataSource/jQuery/Light/' class='button orange small fix-width-155' target='_blank'>View Demo</a>

If objects in an array need to be processed (sorted, filtered, etc.), you can create a [Query](/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept). For example, in the following code, a Query sorts objects in the `fruits` array by the `count` field in descending order.

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
            dataSource: DevExpress.data.query(fruits).sortBy("count", true).toArray(),
            series: {
                argumentField: 'fruit',
                valueField: 'count'
            }
        });
    });

##### Angular

    <!--JavaScript-->
    import query from 'devextreme/data/query';
    // ...
    export class AppComponent {
        fruits = [
            { fruit: 'Apples', count: 10 },
            { fruit: 'Oranges', count: 12 },
            { fruit: 'Lemons', count: 15 },
            { fruit: 'Pears', count: 20 },
            { fruit: 'Pineapples', count: 3 }
        ];
        getSortedFruits () {
            return query(this.fruits).sortBy("count", true).toArray();
        }
    }

    <!--HTML--><dx-chart [dataSource]="getSortedFruits()">
        <dxi-series argumentField="fruit" valueField="count"></dxi-series>
    </dx-chart>

---

#####See Also#####
- [Bind to the ArrayStore](/Documentation/Guide/Widgets/Chart/Data_Binding/Simple_Array/ArrayStore/)
- [Update Data in the Chart](/Documentation/Guide/Widgets/Chart/Data_Binding/Update_Data/)
- [Data Layer - Query Concept](/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

[tags]chart, data binding, provide data, array, process data, Query