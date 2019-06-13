Make changes to the array using <a href="http://www.w3schools.com/js/js_array_methods.asp" target="_blank">standard methods</a>. Then, reassign the updated array to the **PieChart** using the [option(optionName, optionValue)](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#optionoptionName_optionValue) method.

    <!--JavaScript-->var fruits = [
        { fruit: 'Apples', count: 10 },
        { fruit: 'Oranges', count: 12 },
        { fruit: 'Lemons', count: 15 }
    ];

    fruits.push({ fruit: 'Pineapples', count: 3 });
    // Reassigns the "fruits" array to the PieChart 
    $("#pieChartContainer").dxPieChart("option", "dataSource", fruits);

#####See Also#####
- [Get and Set Options - jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Get_and_Set_Options/)