[note]Use the technique described here only if your data source is a [JavaScript array](/Documentation/Guide/Widgets/Chart/Data_Binding/Simple_Array/Array_Only/). Otherwise, update **Chart** data [through the DataSource instance](/Documentation/Guide/Widgets/Chart/Data_Binding/Update_Data/#DevExtreme_DataSource). 

Make changes to the array using [standard methods](http://www.w3schools.com/js/js_array_methods.asp). Then, reassign the updated array to the **Chart** using the [option(optionName, optionValue)](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#optionoptionName_optionValue) method.

    <!--JavaScript-->var fruits = [
        { fruit: 'Apples', count: 10 },
        { fruit: 'Oranges', count: 12 },
        { fruit: 'Lemons', count: 15 }
    ];

    fruits.push({ fruit: 'Pineapples', count: 3 });
    // Reassigns the "fruits" array to the "Chart" 
    $("#chartContainer").dxChart("option", "dataSource", fruits);

#####See Also#####
- [Get and Set Options - jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Get_and_Set_Options/)
- [Chart API Reference](/Documentation/ApiReference/UI_Widgets/dxChart/)