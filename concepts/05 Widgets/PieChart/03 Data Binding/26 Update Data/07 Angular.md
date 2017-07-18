[note]Use the technique described here only if your data source is a [JavaScript array](/Documentation/Guide/Widgets/PieChart/Data_Binding/Simple_Array/Array_Only/). Otherwise, update **PieChart** data [through the DataSource instance](/Documentation/Guide/Widgets/PieChart/Data_Binding/Update_Data/#DevExtreme_DataSource).

Enclose the **dataSource** option in square brackets to bind it to an array using one-way binding. Now, whenever an item is added or removed from the array, the **PieChart** will be updated accordingly.

    <!--HTML--><dx-pie-chart [dataSource]="fruits"></dx-pie-chart>
    
    <!--TypeScript-->
    export class AppComponent {
        fruits = [
            { fruit: 'Apples', count: 10 },
            { fruit: 'Oranges', count: 12 },
            { fruit: 'Lemons', count: 15 }
        ];
    }

#####See Also#####
- [DevExtreme Angular on GitHub](https://github.com/devexpress/DevExtreme-angular)