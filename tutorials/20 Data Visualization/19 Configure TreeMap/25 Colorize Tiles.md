<!--playground--><!--/playground-->
<article data-show-web="/Content/Applications/16_2/DataVisualization/Lessons/ConfigureTreeMap/Step5/treemap.html" data-show-first="treemap.js">

There are several approaches to colorizing tiles.

- **Individually-assigned colors**     
For this approach to be used, each data object should contain a field with a color. The name of this field must be assigned to the [colorField](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#colorField) option.
- **Colors from a palette**        
**TreeMap** provides several colorization algorithms involving a predefined or custom palette. For further information, refer to the **colorizer** | [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/colorizer/#type) option.
- **A uniform color**       
To specify a single color for all tiles, you can use the **tile** | [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tile/#color) option.    
 
This tutorial uses the *"gradient"* colorization algorithm. It demands a [palette](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/colorizer/#palette) of only two colors that will be used to colorize the smallest and largest tiles respectively. The other tiles will have a tint of either the first or the second color depending on their size. Also, this algorithm needs the [range](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/colorizer/#range) option to be set to an array of strictly two values.

In the final step of this tutorial, you will enable the tooltip and add a title to the **TreeMap** widget.
</article>