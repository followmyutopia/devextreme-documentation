To bind the **{WidgetName}** to an array, pass this array to the [dataSource](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Configuration/#dataSource) option. The array should contain objects.

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
        $("#{widgetName}Container").dx{WidgetName}({
            dataSource: fruits,
            series: {
                // See details in the "Bind Series to Data" topic
                argumentField: 'fruit',
                valueField: 'count'
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from 'devextreme-angular';
    // ...
    export class AppComponent {
        fruits = [
            { fruit: 'Apples', count: 10 },
            { fruit: 'Oranges', count: 12 },
            { fruit: 'Lemons', count: 15 },
            { fruit: 'Pears', count: 20 },
            { fruit: 'Pineapples', count: 3 }
        ];
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

    <!--HTML--><dx-{widget-name} [dataSource]="fruits">
        <!-- See details in the "Bind Series to Data" topic -->
        <dxi-series argumentField="fruit" valueField="count"></dxi-series>
    </dx-{widget-name}>

---

#if Chart

After that, you need to bind one or several **{WidgetName}** series to data. Depending on the [series type](/Documentation/Guide/Widgets/{WidgetName}/Series_Types/) you chose, use one of the techniques described in the [Bind Series to Data](/Documentation/Guide/Widgets/{WidgetName}/Data_Binding/Bind_Series_to_Data/) topic.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/LocalDataSource/jQuery/Light/"
}

#endif

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
        $("#{widgetName}Container").dx{WidgetName}({
            dataSource: DevExpress.data.query(fruits).sortBy("count", true).toArray(),
            series: {
                argumentField: 'fruit',
                valueField: 'count'
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from 'devextreme-angular';
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
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

    <!--HTML--><dx-{widget-name} [dataSource]="getSortedFruits()">
        <dxi-series argumentField="fruit" valueField="count"></dxi-series>
    </dx-{widget-name}>

---

#####See Also#####
- [Update Data in the {WidgetName}](/Documentation/Guide/Widgets/{WidgetName}/Data_Binding/Update_Data/)