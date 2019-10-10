Make changes to the array using <a href="http://www.w3schools.com/js/js_array_methods.asp" target="_blank">standard methods</a>. Then, reassign the updated array to the **Funnel** using the [option(optionName, optionValue)](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Methods/#optionoptionName_optionValue) method.

    <!--JavaScript-->var fruits = [
        { fruit: 'Apples', count: 10 },
        { fruit: 'Oranges', count: 12 },
        { fruit: 'Lemons', count: 15 }
    ];

    fruits.push({ fruit: 'Pineapples', count: 3 });
    // Reassigns the "fruits" array to the Funnel 
    $("#funnelContainer").dxFunnel("option", "dataSource", fruits);

#####See Also#####
- [Get and Set Options - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/05%20Get%20and%20Set%20Options.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Get_and_Set_Options/')