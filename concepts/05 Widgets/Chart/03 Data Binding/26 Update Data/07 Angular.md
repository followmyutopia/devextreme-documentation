[note]Use the technique described here only if your data source is a [JavaScript array](/Documentation/Guide/Widgets/Chart/Data_Binding/Simple_Array/Array_Only/). Otherwise, update **Chart** data [through the DataSource instance](/Documentation/Guide/Widgets/Chart/Data_Binding/Update_Data/#DevExtreme_DataSource).

Enclose the **dataSource** option in square brackets to bind it to an array using one-way binding. Now, whenever an item is added or removed from the array, the **Chart** will be updated accordingly.

    <!--HTML--><dx-chart [dataSource]="fruits"></dx-chart>
    
    <!--JavaScript-->
    export class AppComponent {
        fruits = [
            { fruit: 'Apples', count: 10 },
            { fruit: 'Oranges', count: 12 },
            { fruit: 'Lemons', count: 15 }
        ];
    }

#####See Also#####
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)